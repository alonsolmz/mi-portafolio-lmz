"use client";

import { useState } from "react";
import { 
  Linkedin, Github, FileText, MapPin, 
  ExternalLink, Award, Code2, Terminal, Database, Cpu, Globe
} from "lucide-react";

const DATA = {
  nombre: "Alonso Almerco Ramirez",
  ubicacion: "Lima, Perú",
  sobre_mi: {
    es: "Programador enfocado en el desarrollo web, me considero una persona proactiva y persistente. Mis principales aficiones son la programación, los deportes de contacto, el fútbol y la música.",
    en: "I'm a programmer focused on web development, and I consider myself a proactive and persistent person. My main hobbies are programming, contact sports, soccer, and music."
  },
  experiencia: [
    { 
      empresa: "JNM", 
      puesto: "Administrador de Base de Datos", 
      periodo: "2023-2024",
      desc: "Trabajé creando y analizando una base de datos simple para una empresa de venta de servicios generales en el área de construcción industrial de máquinas.",
      tech: ["Java", "SQL", "Power BI", "Excel"]
    },
  ],
  proyectos: [
    { 
      titulo: "Sistema de Lógica Orientada a Objetos", 
      link: "https://github.com/alonsolmz/java-opp-core",
      desc: "Implementación de pilares de POO (Herencia, Polimorfismo, Encapsulamiento) para resolver problemas de lógica y gestión de datos.", 
      tech: ["Java", "JUnit","Maven"] 
    }
  ],
  certificaciones: [
    { nombre: "", emisor: "", link: "" }
  ],
  habilidades: [
    { name: "TypeScript", icon: <Code2 size={12}/> },
    { name: "HTML", icon: <Code2 size={12}/> },
    { name: "JavaScript", icon: <Code2 size={12}/> },
    { name: "Java", icon: <Cpu size={12}/> },
    { name: "SQL", icon: <Database size={12}/> },
    { name: "Git", icon: <Terminal size={12}/> },
    { name: "Python", icon: <Code2 size={12}/> },
    { name: "CSS", icon: <Code2 size={12}/> }
  ],
};

const translations = {
  es: { role: "INGENIERO DE SOFTWARE", work: "EXPERIENCIA", projects: "PROYECTOS", skills: "HABILIDADES", certs: "CERTIFICACIONES", about: "SOBRE MÍ" },
  en: { role: "SOFTWARE ENGINEER", work: "EXPERIENCE", projects: "PROJECTS", skills: "SKILLS", certs: "CERTIFICATIONS", about: "ABOUT ME" }
};

export default function Home() {
  const [lang, setLang] = useState<'es' | 'en'>('es');
  const t = translations[lang];

  const TechTag = ({ name }: { name: string }) => (
    <span className="flex items-center gap-1.5 px-2.5 py-1 bg-purple-950/10 border border-purple-500/20 rounded-md text-[11px] font-medium text-purple-300 hover:border-purple-400/50 transition-colors">
      {name}
    </span>
  );

  return (
    <div className="min-h-screen bg-[#0b0414] text-slate-400 font-sans selection:bg-purple-500/30 relative overflow-x-hidden">
      {/* Fondo Amethyst */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_-20%,_#1e1033_0%,_#0b0414_100%)] pointer-events-none" />

      <main className="relative max-w-[800px] mx-auto px-6 py-16 space-y-20">
        
        {/* HEADER */}
        <header className="flex flex-col-reverse md:flex-row justify-between items-start gap-8">
          <div className="flex-1 space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-white tracking-tight mb-1 uppercase">{DATA.nombre}</h1>
              <h2 className="text-[#c084fc] text-lg font-medium tracking-wide uppercase">{t.role}</h2>
              <div className="flex items-center gap-2 text-slate-500 text-xs mt-3 uppercase tracking-widest">
                <MapPin size={14} className="text-purple-500/60" /> <span>{DATA.ubicacion}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <a href="/CV_Alonsolmz.pdf" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[#c084fc] text-[#0b0414] rounded-lg font-bold text-[10px] uppercase tracking-wider transition-all hover:bg-[#d8b4fe] hover:scale-105 shadow-[0_0_20px_rgba(192,132,252,0.3)]">
              <FileText size={14} /> {lang === 'es' ? 'Descargar CV' : 'Download CV'}
              </a>
              <div className="flex gap-2">
                <a href="https://www.linkedin.com/in/alonso-almerco-27b8a1313/" target="_blank" rel="noopener noreferrer"
                className="p-2 bg-white/5 border border-white/10 rounded-lg hover:bg-purple-500/10 hover:border-purple-500/30 transition-all group">
                <Linkedin size={16} className="group-hover:text-purple-400" />
                </a>
                <a href="https://github.com/alonsolmz" target="_blank" rel="noopener noreferrer" 
                className="p-2 bg-white/5 border border-white/10 rounded-lg hover:bg-purple-500/10 hover:border-purple-500/30 transition-all group">
                <Github size={16} className="group-hover:text-purple-400" />
                </a>
                <button onClick={() => setLang(lang === 'es' ? 'en' : 'es')} 
                className="px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-[10px] font-bold uppercase hover:bg-purple-500/10 text-purple-200 transition-all"
                >{lang}
                </button>
              </div>
            </div>
          </div>
          <div className="w-28 h-28 md:w-32 md:h-32 rounded-xl overflow-hidden border border-purple-500/20 shadow-2xl shadow-purple-500/10">
            <img src="/ftporta.png" alt="Profile" className="w-full h-full object-cover" />
          </div>
        </header>

        {/* SOBRE MÍ */}
        <section className="space-y-4">
          <h3 className="text-xs font-bold text-purple-400/80 uppercase tracking-[0.2em]">{t.about}</h3>
          <p className="text-md text-slate-300 leading-relaxed max-w-2xl italic border-l-2 border-purple-500/30 pl-4">
            "{DATA.sobre_mi[lang]}"
          </p>
        </section>

        {/* EXPERIENCIA */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold text-[#c084fc] uppercase tracking-tight">{t.work}</h3>
          <div className="space-y-10">
            {DATA.experiencia.map((exp, i) => (
              <article key={i} className="relative pl-6 border-l border-purple-500/10 group">
                <div className="absolute w-2 h-2 bg-[#c084fc] rounded-full -left-[5px] top-1.5 shadow-[0_0_12px_#c084fc]" />
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-white text-lg font-bold">{exp.empresa}</h4>
                  <span className="text-[10px] font-mono text-purple-400/60 uppercase">{exp.periodo}</span>
                </div>
                <p className="text-[#c084fc]/70 text-xs font-semibold mb-3 uppercase tracking-widest">{exp.puesto}</p>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{exp.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((s, j) => <TechTag key={j} name={s} />)}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* PROYECTOS */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold text-[#c084fc] uppercase tracking-tight">{t.projects}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {DATA.proyectos.map((proy, i) => (
              <div key={i} className="p-5 rounded-xl bg-purple-950/5 border border-purple-500/10 hover:border-purple-500/30 hover:bg-purple-950/10 transition-all flex flex-col justify-between h-full group">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="text-white text-sm font-bold uppercase tracking-wide group-hover:text-purple-300 transition-colors">{proy.titulo}</h4>
                    <Github size={14} className="text-purple-500/40 group-hover:text-purple-400" />
                  </div>
                  <p className="text-[13px] text-slate-500 leading-relaxed mb-5">{proy.desc}</p>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {proy.tech.map((t, j) => <TechTag key={j} name={t} />)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CERTIFICACIONES */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold text-[#c084fc] uppercase tracking-tight">{t.certs}</h3>
          <div className="flex flex-col gap-3">
            {DATA.certificaciones.map((cert, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-purple-950/5 border border-purple-500/10 hover:bg-purple-950/10 hover:border-purple-500/30 transition-all group">
                <div className="flex items-center gap-3">
                  <Award size={16} className="text-[#c084fc]" />
                  <div>
                    <h4 className="text-white font-bold text-xs uppercase group-hover:text-purple-200 transition-colors">{cert.nombre}</h4>
                    <p className="text-[10px] text-purple-500/60 uppercase tracking-tighter">{cert.emisor}</p>
                  </div>
                </div>
                <a href={cert.link} className="text-purple-500/40 hover:text-purple-300 transition-colors">
                  <ExternalLink size={14} />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* HABILIDADES */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold text-[#c084fc] uppercase tracking-tight">{t.skills}</h3>
          <div className="flex flex-wrap gap-2">
            {DATA.habilidades.map((skill, i) => (
              <div key={i} className="flex items-center gap-2 px-3 py-1.5 bg-purple-950/10 border border-purple-500/10 rounded-lg hover:border-purple-500/50 hover:bg-purple-900/20 transition-all group">
                <span className="text-purple-500/60 group-hover:text-purple-400 transition-colors">{skill.icon}</span>
                <span className="text-[11px] font-bold text-slate-400 group-hover:text-purple-100 uppercase tracking-tight">{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

        <footer className="pt-10 border-t border-purple-500/10 text-center">
          <p className="text-purple-500/30 text-[9px] uppercase tracking-[0.3em]">ALONSO ALMERCO • 2025</p>
        </footer>
      </main>
    </div>
  );
}