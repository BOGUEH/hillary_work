import "./globals.css";

export const metadata = {
  title: "Career Path – Frontend Developer",
  description: "Career path definition page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}
