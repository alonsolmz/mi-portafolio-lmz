"use client";

import { useState } from "react";
import { 
  Mail, Linkedin, Github, FileText, MapPin, 
  ExternalLink, Award 
} from "lucide-react";

const DATA = {
  nombre: "Alonso Almerco Ramirez",
  ubicacion: "Lima, Perú",
  sobre_mi: {
    es: "Ingeniero de Software en formación en la UTP, enfocado en la arquitectura de sistemas modernos, desarrollo web de alto rendimiento y creación de experiencias de usuario memorables.",
    en: "Software Engineering student at UTP, focused on modern systems architecture, high-performance web development, and creating memorable user experiences."
  },
  trayectoria: [
    { empresa: "Universidad Tecnológica del Perú", puesto: "Estudiante de Ingeniería", periodo: "2023 — ACTUALIDAD" },
    { empresa: "Proyectos Independientes", puesto: "Software Developer", periodo: "2024" },
  ],
  proyectos: [
    { 
      titulo: "Portfolio Personal", 
      desc: "Diseño minimalista con enfoque en tipografía y rendimiento.", 
      tech: "Next.js, Tailwind, Framer Motion" 
    }
  ],
  habilidades: ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "Git", "Python"],
};

const translations = {
  es: { role: "INGENIERO DE SOFTWARE", work: "TRAYECTORIA", projects: "PROYECTOS", skills: "HABILIDADES", education: "EDUCACIÓN", certs: "CERTIFICACIONES", about: "SOBRE MÍ" },
  en: { role: "SOFTWARE ENGINEER", work: "EXPERIENCE", projects: "PROJECTS", skills: "TECH STACK", education: "EDUCATION", certs: "CERTIFICATIONS", about: "ABOUT ME" }
};

export default function Home() {
  const [lang, setLang] = useState<'es' | 'en'>('es');
  const [copiado, setCopiado] = useState(false);
  const t = translations[lang];

  const copiarCorreo = () => {
    navigator.clipboard.writeText("alonsoalmerco425@gmail.com");
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#000000] text-slate-400 font-sans selection:bg-yellow-500/30 relative overflow-x-hidden">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_-15%,_#201933_0%,_#000000_75%)] pointer-events-none" />

      <main className="relative max-w-[850px] mx-auto px-8 py-20 space-y-32">
        <header className="flex flex-col-reverse md:flex-row justify-between items-center md:items-start gap-12">
          <div className="flex-1 space-y-8 text-center md:text-left">
            <div>
              <h1 className="text-6xl font-black text-white tracking-tighter mb-2 italic uppercase">
                {DATA.nombre}
              </h1>
              <p className="text-yellow-500 font-bold tracking-[0.3em] text-sm uppercase">
                {t.role}
              </p>
              <div className="flex items-center justify-center md:justify-start gap-2 text-slate-500 text-xs mt-6 uppercase tracking-widest">
                <MapPin size={14} className="text-yellow-500" /> <span>{DATA.ubicacion}</span>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-start gap-6">
              <a 
                href="/CV_ALONSO.pdf" 
                download 
                className="group relative flex items-center justify-center gap-3 w-full md:w-auto px-8 py-4 bg-yellow-500/10 border border-yellow-500/20 rounded-2xl text-yellow-500 font-black text-xs uppercase tracking-[0.3em] transition-all duration-300 hover:bg-yellow-500 hover:text-black hover:shadow-[0_0_40px_rgba(234,179,8,0.3)] hover:-translate-y-1"
              >
                <FileText size={18} />
                <span>{lang === 'es' ? 'Descargar CV' : 'Download CV'}</span>
              </a>

              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <button onClick={copiarCorreo} className="icon-btn group">
                  <Mail size={22} className={copiado ? "text-black" : ""} />
                  {copiado && <span className="absolute -top-12 text-[10px] bg-yellow-500 text-black px-3 py-1 rounded-full font-black tracking-tighter shadow-lg">COPIADO</span>}
                </button>
                <a href="https://linkedin.com/in/alonso-almerco-27b8a1313/" target="_blank" className="icon-btn group"><Linkedin size={22} /></a>
                <a href="https://github.com/alonsolmz" target="_blank" className="icon-btn group"><Github size={22} /></a>
                <button onClick={() => setLang(lang === 'es' ? 'en' : 'es')} className="icon-btn text-xs font-black border-white/10 hover:border-yellow-500">
                  {lang.toUpperCase()}
                </button>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-yellow-500 rounded-[2.5rem] blur opacity-10 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-[2.2rem] overflow-hidden border border-white/10 bg-black">
              <img src="/ftportada.jpeg" alt="Alonso" className="w-full h-full object-cover" />
            </div>
          </div>
        </header>

        <section className="space-y-12">
          <h3 className="section-title-yellow">{t.work}</h3>
          <div className="space-y-10">
            {DATA.trayectoria.map((exp, i) => (
              <div key={i} className="flex justify-between items-start border-l-2 border-white/5 pl-8 hover:border-yellow-500/50 transition-colors group">
                <div>
                  <h4 className="text-white text-xl font-bold group-hover:text-yellow-500 transition-colors">{exp.empresa}</h4>
                  <p className="text-slate-500 text-sm font-medium">{exp.puesto}</p>
                </div>
                <span className="text-[10px] font-black text-slate-700 tracking-widest uppercase">{exp.periodo}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-12">
          <h3 className="section-title-yellow">{t.projects}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {DATA.proyectos.map((proy, i) => (
              <div key={i} className="project-card group">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="text-white text-lg font-bold group-hover:text-yellow-500 transition-colors">{proy.titulo}</h4>
                  <ExternalLink size={18} className="text-slate-700 group-hover:text-yellow-500" />
                </div>
                <p className="text-sm text-slate-500 leading-relaxed mb-8 italic">{proy.desc}</p>
                <div className="text-[10px] text-yellow-500/50 font-black tracking-widest uppercase">{proy.tech}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-12">
          <h3 className="section-title-yellow">{t.education}</h3>
          <div className="p-10 rounded-[2rem] border border-white/5 bg-white/[0.01] hover:border-yellow-500/20 transition-all group">
            <h4 className="text-white text-2xl font-bold group-hover:text-yellow-500 transition-colors">Universidad Tecnológica del Perú</h4>
            <p className="text-slate-400 font-semibold mt-2 text-lg italic">Ingeniería de Software</p>
            <div className="flex items-center gap-4 mt-8">
               <span className="text-yellow-500/20 text-[10px] font-black tracking-[0.5em] uppercase">2023 — ACTUALIDAD</span>
            </div>
          </div>
        </section>

        <section className="space-y-12">
          <h3 className="section-title-yellow">{t.skills}</h3>
          <div className="flex flex-wrap gap-3">
            {DATA.habilidades.map((skill, i) => (
              <span key={i} className="skill-pill italic hover:text-yellow-500 hover:border-yellow-500/30">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <footer className="pt-24 border-t border-white/5">
          <h3 className="section-title-yellow mb-10">{t.about}</h3>
          <p className="text-slate-500 leading-relaxed text-lg font-light max-w-3xl italic">
            {lang === 'es' ? DATA.sobre_mi.es : DATA.sobre_mi.en}
          </p>
        </footer>
      </main>

      <style jsx>{`
        .section-title-yellow { @apply text-xl font-black uppercase tracking-[0.4em] text-yellow-500; }
        .icon-btn { @apply relative flex items-center justify-center w-14 h-14 bg-white/[0.03] border border-white/10 rounded-2xl text-slate-400 transition-all duration-300 hover:bg-yellow-500 hover:text-black hover:scale-110 hover:shadow-[0_0_40px_rgba(234,179,8,0.5)] hover:border-yellow-500 active:scale-90; }
        .project-card { @apply p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-yellow-500/20 transition-all duration-500 hover:-translate-y-2; }
        .skill-pill { @apply px-6 py-3 bg-[#0a0a0a] border border-white/5 text-[11px] font-bold text-slate-500 rounded-2xl transition-all cursor-default; }
      `}</style>
    </div>
  );
}