import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeatureCard from "@/components/FeatureCard";
import RoleCard from "@/components/RoleCard";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { features, roles } from "@/data/mockData";

// ─── Who We Are ──────────────────────────────────────────────────────────────
function AboutSection() {
  const cards = [
    {
      icon: "🎓",
      title: "For Students",
      body: "Read books, listen to audio, practice speaking, and track learning progress.",
    },
    {
      icon: "👩‍🏫",
      title: "For Teachers",
      body: "Monitor student reading activity, view class progress, and support personalized learning.",
    },
    {
      icon: "🏛️",
      title: "For Institutions",
      body: "Manage accounts, courses, teachers, students, and learning data in one platform.",
    },
  ];

  return (
    <section id="about" className="section-alt py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Text */}
          <div>
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest block mb-3">About Us</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-5">Who We Are</h2>
            <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full mb-6" />
            <p className="text-slate-600 leading-relaxed text-base">
              We provide digital reading and audio learning solutions for schools, teachers, students, and education institutions.
              Our platform combines reading resources, original audio, follow-reading practice, and learning analytics to make
              language learning easier to manage and more effective.
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-4">
            {cards.map((c) => (
              <div
                key={c.title}
                className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-slate-100 shadow-sm shadow-slate-100/50 card-hover"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center text-2xl flex-shrink-0">
                  {c.icon}
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{c.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{c.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Platform Features ────────────────────────────────────────────────────────
function FeaturesSection() {
  return (
    <section id="features" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3 block">What We Offer</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Platform Features</h2>
          <div className="mt-4 h-1 w-12 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full mx-auto" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <FeatureCard key={f.id} icon={f.icon} title={f.title} description={f.description} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── User Roles ───────────────────────────────────────────────────────────────
function RolesSection() {
  return (
    <section className="section-alt py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3 block">Role-Based Access</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Designed for Every User Role</h2>
          <div className="mt-4 h-1 w-12 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full mx-auto" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {roles.map((r) => (
            <RoleCard key={r.id} {...r} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Home Page ────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <RolesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
