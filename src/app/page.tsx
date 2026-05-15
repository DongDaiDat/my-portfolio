export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="text-6xl font-bold tracking-tight">
          Hi, I'm Dat
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-400">
          Software Engineering Student & Fullstack Developer
        </p>

        <div className="mt-8 flex gap-4">
          <button className="rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:scale-105">
            View Projects
          </button>

          <button className="rounded-xl border border-gray-700 px-6 py-3 transition hover:bg-white hover:text-black">
            Contact Me
          </button>
        </div>
      </section>
    </main>
  );
}