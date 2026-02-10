"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Editor from "@monaco-editor/react";
import { cssSnippets, htmlSnippets, jsSnippets } from "../utils/monacoSnippets";

const tabs = [
  { id: "html", label: "HTML", language: "html" },
  { id: "css", label: "CSS", language: "css" },
  { id: "js", label: "JS", language: "javascript" },
];

const STORAGE_KEY = "career-assessment-preview";

const defaultCode = {
  html: `<main class="panel">
  <header>
    <p class="badge">Frontend Track</p>
    <h1>Career Sprint</h1>
    <p class="subtitle">Build a landing card with a playful toggle.</p>
  </header>

  <section class="stats">
    <div>
      <p class="label">Modules</p>
      <p class="value">8</p>
    </div>
    <div>
      <p class="label">Projects</p>
      <p class="value">3</p>
    </div>
    <div>
      <p class="label">Weeks</p>
      <p class="value">5</p>
    </div>
  </section>

  <button id="modeToggle">Switch Theme</button>
</main>`,
  css: `:root {
  --bg: #0f172a;
  --card: #ffffff;
  --text: #0f172a;
  --muted: #64748b;
  --accent: #0ea5e9;
}

body {
  margin: 0;
  font-family: "Segoe UI", sans-serif;
  background: var(--bg);
  display: grid;
  place-items: center;
  min-height: 100vh;
  color: var(--text);
}

.panel {
  width: min(420px, 90vw);
  background: var(--card);
  border-radius: 24px;
  padding: 28px;
  box-shadow: 0 25px 60px rgba(15, 23, 42, 0.2);
}

.badge {
  display: inline-block;
  padding: 6px 12px;
  border-radius: 999px;
  background: rgba(14, 165, 233, 0.15);
  color: var(--accent);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.subtitle {
  margin-top: 8px;
  color: var(--muted);
}

.stats {
  margin: 20px 0 24px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.label {
  font-size: 12px;
  color: var(--muted);
  margin: 0;
}

.value {
  font-size: 18px;
  font-weight: 700;
  margin: 4px 0 0;
}

button {
  width: 100%;
  border: none;
  background: var(--accent);
  color: white;
  padding: 12px 16px;
  border-radius: 999px;
  font-weight: 600;
  cursor: pointer;
}
`,
  js: `const toggle = document.querySelector("#modeToggle");
let dark = true;

toggle.addEventListener("click", () => {
  dark = !dark;
  document.documentElement.style.setProperty("--bg", dark ? "#0f172a" : "#e2e8f0");
  document.documentElement.style.setProperty("--card", dark ? "#ffffff" : "#0f172a");
  document.documentElement.style.setProperty("--text", dark ? "#0f172a" : "#f8fafc");
  toggle.textContent = dark ? "Switch Theme" : "Switch Back";
});
`,
};

export default function CodeEditorPanel() {
  const [activeTab, setActiveTab] = useState("html");
  const [codeByTab, setCodeByTab] = useState(defaultCode);
  const initialized = useRef(false);
  const saveTimeout = useRef(null);

  const activeLanguage = useMemo(
    () => tabs.find(t => t.id === activeTab)?.language ?? "html",
    [activeTab]
  );

  const handleMount = (editor, monaco) => {
    if (initialized.current) return;
    initialized.current = true;

    const domNode = editor.getDomNode();
    if (domNode) {
      const blockPaste = (event) => {
        event.preventDefault();
      };

      domNode.addEventListener("paste", blockPaste);
      editor.onDidDispose(() => domNode.removeEventListener("paste", blockPaste));
    }

    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyV, () => {});
    editor.addCommand(monaco.KeyMod.Shift | monaco.KeyCode.Insert, () => {});

    editor.onKeyDown((event) => {
      const isPaste =
        (event.ctrlKey || event.metaKey) && event.code === "KeyV";
      const isShiftInsert = event.shiftKey && event.code === "Insert";

      if (isPaste || isShiftInsert) {
        event.preventDefault();
        event.stopPropagation();
      }
    });

    const makeSuggestions = (items) =>
      items.map((item) => ({
        label: item.label,
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: item.insertText,
        insertTextRules:
          monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: item.documentation,
      }));

    monaco.languages.registerCompletionItemProvider("html", {
      provideCompletionItems: () => ({
        suggestions: makeSuggestions(htmlSnippets),
      }),
    });

    monaco.languages.registerCompletionItemProvider("css", {
      provideCompletionItems: () => ({
        suggestions: makeSuggestions(cssSnippets),
      }),
    });

    monaco.languages.registerCompletionItemProvider("javascript", {
      provideCompletionItems: () => ({
        suggestions: makeSuggestions(jsSnippets),
      }),
    });
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (saveTimeout.current) {
      window.clearTimeout(saveTimeout.current);
    }

    saveTimeout.current = window.setTimeout(() => {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(codeByTab));
    }, 250);

    return () => {
      if (saveTimeout.current) {
        window.clearTimeout(saveTimeout.current);
      }
    };
  }, [codeByTab]);

  const openPreview = () => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(codeByTab));
    }
    window.open("/career-assessment/preview", "_blank", "noopener,noreferrer");
  };

  return (
    <section className="min-w-0 rounded-xl border border-slate-800 bg-slate-950">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 px-4 py-2">
        <div>
          <p className="text-sm font-semibold text-slate-200">Editor</p>
          <p className="text-xs text-slate-400">HTML / CSS / JS</p>
        </div>
        <button
          type="button"
          onClick={openPreview}
          className="rounded-full border border-slate-700 px-3 py-1 text-xs font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white"
        >
          Live Preview
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 border-b border-slate-800 px-2 py-1">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`rounded-md px-3 py-1.5 text-xs font-medium transition
              ${
                activeTab === tab.id
                  ? "bg-slate-800 text-white"
                  : "text-slate-400 hover:bg-slate-800/50 hover:text-white"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Editor */}
      <Editor
        height="600px"
        theme="vs-dark"
        language={activeLanguage}
        value={codeByTab[activeTab]}
        onMount={handleMount}
        onChange={value =>
          setCodeByTab(prev => ({ ...prev, [activeTab]: value ?? "" }))
        }
        options={{
          fontSize: 15,
          fontFamily:
            "JetBrains Mono, Fira Code, Menlo, Monaco, Consolas, monospace",
          minimap: { enabled: false },
          padding: { top: 12, bottom: 12 },
          wordWrap: "on",

          //  AUTOCOMPLETE & TAB FIXES
          quickSuggestions: true,
          suggestOnTriggerCharacters: true,
          snippetSuggestions: "inline",
          tabCompletion: "on",
          acceptSuggestionOnEnter: "on",

          autoClosingBrackets: "always",
          autoClosingQuotes: "always",
          autoClosingTags: true,

          scrollBeyondLastLine: false,
          cursorSmoothCaretAnimation: "on",
        }}
      />
    </section>
  );
}
