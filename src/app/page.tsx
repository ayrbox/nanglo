import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Image
        src="/nepali-craft.jpg"
        alt="Traditional Nepali Palace"
        fill
        sizes="100vw"
        style={{
          objectFit: 'cover',
        }}
        className="blur-sm"
      />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[32px] row-start-2 items-center z-1">
          <h1 className="text-slate-50 text-center py-6 text-5xl font-bold sm:text-6xl md:text-7xl lg:text-12xl font-heading">
            nanglo.co.uk
          </h1>
          <div className="text-xl">
            Coming this Summer
          </div>
          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
              href="https://nanglo.kit.com/9a484d2bb7"
              target="_blank"
              rel="noopener noreferrer"
            >
              Subscribe to get notified
            </a>
          </div>
        </main>
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center z-1">
          <Link
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="/about"
            rel="noopener noreferrer"
          >
            About →
          </Link>
        </footer>
      </div>
    </>
  );
}
