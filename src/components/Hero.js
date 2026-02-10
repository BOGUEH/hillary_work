export default function Hero() {
  return (
    <section className="bg-white text-black rounded-lg p-6 flex items-center gap-6">
      <div className="text-5xl">👨‍💻</div>
      <div>
        <h1 className="text-3xl font-bold">
          Career Path Definition Page
        </h1>
        <p className="text-xl mt-1">
          Role: <span className="text-green-600 font-semibold">
            Frontend Developer
          </span>
        </p>
        <p className="text-gray-600 mt-2">
          A critical role in bringing web applications to life,
          focusing on everything users see and interact with.
        </p>
      </div>
    </section>
  );
}
