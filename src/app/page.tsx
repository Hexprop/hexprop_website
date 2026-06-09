import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Nav */}
      <header className="flex items-center justify-between px-8 py-1.5 border-b border-neutral-100">
        <Image
          src="/logo.png"
          alt="Hexprop Consulting"
          width={90}
          height={30}
          priority
          className="mix-blend-multiply"
        />
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600">
          <a href="#services" className="hover:text-neutral-900 transition-colors">Services</a>
          <a href="#about" className="hover:text-neutral-900 transition-colors">About</a>
        </nav>
        <a
          href="#contact"
          className="text-sm font-medium px-5 py-2.5 rounded-full text-white transition-colors"
          style={{ backgroundColor: "var(--navy)" }}
        >
          Get in touch
        </a>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="px-8 py-28 max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-sm font-semibold tracking-widest uppercase mb-6" style={{ color: "var(--navy)" }}>
              Technology Consultancy
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-tight text-neutral-900 max-w-3xl">
              Engineering-led technology, built to last.
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg text-neutral-500 max-w-xl leading-relaxed">
              Hexprop Consulting designs and builds data systems, infrastructure, and applications for businesses across engineering, manufacturing, retail, and beyond.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="mt-10 flex items-center gap-4">
              <a
                href="#contact"
                className="px-6 py-3 rounded-full text-white text-sm font-medium transition-colors hover:opacity-90"
                style={{ backgroundColor: "var(--navy)" }}
              >
                Work with us
              </a>
              <a
                href="#services"
                className="px-6 py-3 rounded-full text-sm font-medium text-neutral-700 border border-neutral-200 hover:border-neutral-400 transition-colors"
              >
                Our services
              </a>
            </div>
          </FadeIn>
        </section>

        {/* Divider */}
        <div className="border-t border-neutral-100 mx-8" />

        {/* Services */}
        <section id="services" className="px-8 py-24 max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-sm font-semibold tracking-widest uppercase mb-10 text-neutral-400">
              What we do
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {services.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.1}>
                <div
                  className="w-10 h-10 rounded-lg mb-5 flex items-center justify-center"
                  style={{ backgroundColor: "var(--navy)" }}
                >
                  <span className="text-white text-lg">{s.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">{s.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{s.description}</p>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-neutral-100 mx-8" />

        {/* About */}
        <section id="about" className="px-8 py-24 max-w-5xl mx-auto">
          <FadeIn>
            <div className="max-w-2xl">
              <p className="text-sm font-semibold tracking-widest uppercase mb-6 text-neutral-400">
                About us
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 mb-5">
                Built on real-world engineering experience.
              </h2>
              <p className="text-neutral-500 leading-relaxed mb-4">
                We come from engineering, manufacturing, retail, and embedded systems — industries where the cost of getting technology wrong is real and visible. That background shapes how we work: practically, precisely, and with a clear focus on outcomes.
              </p>
              <p className="text-neutral-500 leading-relaxed mb-8">
                From data pipelines and cloud infrastructure to custom applications and embedded firmware, we bring the technical depth to deliver — and the cross-industry experience to ask the right questions first.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Engineering", "Manufacturing", "Retail", "Data & Analytics", "Embedded Systems", "Supply Chain"].map((sector) => (
                  <span key={sector} className="px-4 py-2 rounded-full text-sm font-medium border text-neutral-600 border-neutral-200">
                    {sector}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Divider */}
        <div className="border-t border-neutral-100 mx-8" />

        {/* Contact */}
        <section id="contact" className="px-8 py-24 max-w-5xl mx-auto">
          <FadeIn>
            <div className="max-w-xl">
              <p className="text-sm font-semibold tracking-widest uppercase mb-6 text-neutral-400">
                Contact
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 mb-5">
                Start a conversation.
              </h2>
              <p className="text-neutral-500 leading-relaxed mb-10">
                Tell us about your challenge and we'll come back to you with a considered response — no sales pitch, just an honest assessment of how we can help.
              </p>
              <ContactForm />
            </div>
          </FadeIn>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-100 px-8 py-1 flex items-center justify-between text-sm text-neutral-400">
        <span>© {new Date().getFullYear()} Hexprop Consulting. All rights reserved.</span>
        <Image src="/logo.png" alt="Hexprop" width={100} height={34} className="opacity-40 mix-blend-multiply" />
      </footer>
    </div>
  );
}

const services = [
  {
    icon: "◈",
    title: "Data & Analytics",
    description: "Turning raw data into actionable insight — pipelines, dashboards, and data strategy built around how your business works.",
  },
  {
    icon: "◎",
    title: "Infrastructure",
    description: "Scalable, reliable cloud and on-premise infrastructure designed to support your operations and grow with you.",
  },
  {
    icon: "◻",
    title: "Application Development",
    description: "Custom software built to solve real problems — from embedded systems and internal tools to full client-facing platforms.",
  },
  {
    icon: "◇",
    title: "Consultancy",
    description: "Practical guidance on technology strategy, system architecture, and digital transformation — grounded in real industry experience.",
  },
];
