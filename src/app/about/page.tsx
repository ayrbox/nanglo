import Image from "next/image";
import Link from 'next/link'

export default function About() {
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
          <div className="bg-stone-950/70  rounded-2xl p-8 md:p-16">
            <h1 className="text-stone-50 text-center py-6 text-5xl font-bold sm:text-6xl md:text-7xl lg:text-12xl font-heading">
              nanglo.co.uk
            </h1>
            <p className="md:w-200 pb-8">
              <strong className="text-emerald-600">nanglo.co.uk</strong> is an online platform operated by{" "}
              <strong className="text-emerald-600">Nanglo Ecom Ltd</strong>, dedicated to selling handcrafted
              interior decorations inspired by Nepalese arts and traditions. Our
              collection includes paintings, wooden decorations, and metal crafts,
              all made with authenticity and care.
            </p>
            <p className="md:w-200 pb-8">
              We aim to provide unique, high-quality handmade products that bring
              cultural heritage into your home. Each item is crafted by skilled
              artisans, ensuring exceptional craftsmanship. We are working hard to
              create an online platform for a seamless shopping experience.
              We are aiming to launch by <strong>5 May 2025</strong>. Stay connected with us through
              social media or {" "}
              <a
                className="underline"
                href="https://nanglo.kit.com/9a484d2bb7"
                target="_blank"
                rel="noopener noreferrer"
              >
                subscribe to our newsletter.
              </a>
            </p>
            <p>Thank you!</p>
          </div>
        </main>
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center z-1">
          <Link
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="/"
            rel="noopener noreferrer"
          >
            ← Go Back
          </Link>
        </footer>
      </div>
    </>
  );
}
