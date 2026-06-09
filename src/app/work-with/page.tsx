import Image from "next/image";

// TODO: Add companies and ventures here when ready to launch
// Each entry should have: name, description, type ("venture" | "partner"), link (optional), logo (optional)
const companies: Company[] = [
  // {
  //   name: "Planning Pocket",
  //   description: "Short description of the relationship or what was delivered.",
  //   type: "venture",
  //   link: "https://...",
  // },
  // {
  //   name: "Sunset Studios",
  //   description: "Short description.",
  //   type: "venture",
  //   link: "https://...",
  // },
  // {
  //   name: "Cadence Instruments",
  //   description: "Short description.",
  //   type: "venture",
  //   link: "https://...",
  // },
];

interface Company {
  name: string;
  description: string;
  type: "venture" | "partner";
  link?: string;
}

export default function WorkWith() {
  const ventures = companies.filter((c) => c.type === "venture");
  const partners = companies.filter((c) => c.type === "partner");

  return (
    <div className="flex flex-col min-h-screen">
      {/* Nav */}
      <header className="flex items-center justify-between px-8 py-1.5 border-b border-neutral-100">
        <a href="/">
          <Image
            src="/logo.png"
            alt="Hexprop Consulting"
            width={90}
            height={30}
            priority
            className="mix-blend-multiply"
          />
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600">
          <a href="/#services" className="hover:text-neutral-900 transition-colors">Services</a>
          <a href="/#about" className="hover:text-neutral-900 transition-colors">About</a>
        </nav>
        <a
          href="/#contact"
          className="text-sm font-medium px-5 py-2.5 rounded-full text-white transition-colors"
          style={{ backgroundColor: "var(--navy)" }}
        >
          Get in touch
        </a>
      </header>

      <main className="flex-1 px-8 py-24 max-w-5xl mx-auto w-full">
        <p className="text-sm font-semibold tracking-widest uppercase mb-6 text-neutral-400">
          Ecosystem
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 mb-5">
          Who we work with
        </h1>
        <p className="text-neutral-500 leading-relaxed max-w-xl mb-16">
          We build and advise across a network of ventures and organisations — bringing the same rigour and technical depth to every relationship.
        </p>

        {companies.length === 0 ? (
          <div className="border border-dashed border-neutral-200 rounded-2xl p-16 flex flex-col items-center justify-center text-center">
            <p className="text-neutral-400 text-sm">Coming soon.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-16">
            {ventures.length > 0 && (
              <div>
                <p className="text-sm font-semibold tracking-widest uppercase mb-8 text-neutral-400">Ventures</p>
                <div className="grid md:grid-cols-2 gap-8">
                  {ventures.map((c) => <CompanyCard key={c.name} company={c} />)}
                </div>
              </div>
            )}
            {partners.length > 0 && (
              <div>
                <p className="text-sm font-semibold tracking-widest uppercase mb-8 text-neutral-400">Partners</p>
                <div className="grid md:grid-cols-2 gap-8">
                  {partners.map((c) => <CompanyCard key={c.name} company={c} />)}
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      <footer className="border-t border-neutral-100 px-8 py-1 flex items-center justify-between text-sm text-neutral-400">
        <span>© {new Date().getFullYear()} Hexprop Consulting. All rights reserved.</span>
        <Image src="/logo.png" alt="Hexprop" width={100} height={34} className="opacity-40 mix-blend-multiply" />
      </footer>
    </div>
  );
}

function CompanyCard({ company }: { company: Company }) {
  return (
    <div className="rounded-2xl border border-neutral-100 p-8 flex flex-col gap-3">
      <h2 className="text-xl font-semibold text-neutral-900">{company.name}</h2>
      <p className="text-sm text-neutral-500 leading-relaxed flex-1">{company.description}</p>
      {company.link && (
        <a
          href={company.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium self-start"
          style={{ color: "var(--navy)" }}
        >
          Visit →
        </a>
      )}
    </div>
  );
}
