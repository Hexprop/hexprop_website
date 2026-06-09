import Image from "next/image";

export default function ComingSoon() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8 bg-white">
      <div className="flex flex-col items-center text-center max-w-md">
        <Image
          src="/logo.png"
          alt="Hexprop Consulting"
          width={160}
          height={54}
          priority
          className="mix-blend-multiply mb-12"
        />
        <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 mb-4">
          We're getting ready.
        </h1>
        <p className="text-neutral-500 leading-relaxed">
          We're putting the finishing touches on our new website.
        </p>
      </div>
      <p className="absolute bottom-6 text-xs text-neutral-300">
        © {new Date().getFullYear()} Hexprop Consulting
      </p>
    </div>
  );
}
