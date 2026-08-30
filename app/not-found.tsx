import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#faf8f5] flex flex-col items-center justify-center text-center px-4">
      <h1
        className="text-7xl sm:text-9xl font-bold tracking-tight text-black"
        style={{ fontFamily: "'Pixelify Sans', monospace" }}
      >
        404
      </h1>
      <p
        className="mt-4 text-lg text-neutral-700 max-w-md"
        style={{ fontFamily: "'Space Mono', monospace" }}
      >
        This page doesn&apos;t exist — like a branch that was never merged.
      </p>
      <Link
        href="/"
        className="mt-8 px-6 py-2.5 bg-black text-white text-xs font-bold tracking-widest uppercase rounded border-2 border-black hover:bg-neutral-800 transition-colors shadow-[3px_3px_0px_#000]"
        style={{ fontFamily: "'Space Mono', monospace" }}
      >
        BACK TO HOME
      </Link>
    </div>
  );
}
