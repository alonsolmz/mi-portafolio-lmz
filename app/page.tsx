"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { 
  Mail, Linkedin, Github, FileText, MapPin, 
  ExternalLink, Moon, Award 
} from "lucide-react";

const translations = {
  es: {
    role: "INGENIERO DE SOFTWARE",
    location: "Lima, Perú",
    work: "TRAYECTORIA",
    projects: "PROYECTOS",
    skills: "HABILIDADES",
    education: "EDUCACIÓN",
    certs: "CERTIFICACIONES",
    about: "SOBRE MÍ",
    cv: "CV",
  },
  en: {
    role: "SOFTWARE ENGINEER",
    location: "Lima, Peru",
    work: "EXPERIENCE",
    projects: "PROJECTS",
    skills: "TECH STACK",
    education: "EDUCATION",
    certs: "CERTIFICATIONS",
    about: "ABOUT ME",
    cv: "CV",
  }
};

export default function Home() {
  const [lang, setLang] = useState<'es' | 'en'>('es');
  const [perfil, setPerfil] = useState<any>(null);
  const [habilidades, setHabilidades] = useState<any[]>([]);
  const [experiencias, setExperiencias] = useState<any[]>([]);
  const [proyectos, setProyectos] = useState<any[]>([]);
  const [copiado, setCopiado] = useState(false);

  const t = translations[lang];

  useEffect(() => {
    async function fetchData() {
      const { data: p } = await supabase.from("perfil").select("*").limit(1).single();
      if (p) setPerfil(p);
      const { data: h } = await supabase.from("habilidades").select("*");
      setHabilidades(h || []);
      const { data: e } = await supabase.from("experiencia").select("*").order('id', { ascending: false });
      setExperiencias(e || []);
      const { data: pr } = await supabase.from("proyectos").select("*").order('id', { ascending: false });
      setProyectos(pr || []);
    }
    fetchData();
  }, []);

  const copiarCorreo = () => {
    navigator.clipboard.writeText("alonsoalmerco425@gmail.com");
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-slate-400 font-sans selection:bg-yellow-500/30 relative overflow-x-hidden">
      {/* Fondo con brillo radial sutil */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,_#111_0%,_#050505_100%)] pointer-events-none" />

      <main className="relative max-w-[850px] mx-auto px-8 py-20 space-y-32">
        
        {/* HEADER */}
        <header className="flex flex-col-reverse md:flex-row justify-between items-center md:items-start gap-12">
          <div className="flex-1 space-y-8 text-center md:text-left">
            <div>
              <h1 className="text-6xl font-black text-white tracking-tighter mb-2">
                {perfil?.nombre || "ALONSO LMZ"}
              </h1>
              <p className="text-yellow-500 font-bold tracking-[0.3em] text-sm uppercase">
                {t.role}
              </p>
              <div className="flex items-center justify-center md:justify-start gap-2 text-slate-500 text-xs mt-6">
                <MapPin size={14} /> <span>{t.location}</span>
              </div>
            </div>

            {/* BOTONES CON GLOW MEJORADO */}
            <div className="flex flex-wrap justify-center md:justify-start gap-5">
              <button onClick={copiarCorreo} title="Email" className="icon-btn group">
                <Mail size={22} className={copiado ? "text-yellow-500" : ""} />
              </button>
              <a href="https://linkedin.com/..." className="icon-btn group"><Linkedin size={22} /></a>
              <a href="https://github.com/..." className="icon-btn group"><Github size={22} /></a>
              <a href="/CV.pdf" title={t.cv} className="icon-btn group border-yellow-500/20">
                <FileText size={22} />
              </a>
              
              <div className="flex gap-3 ml-auto">
                <button 
                  onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
                  className="icon-btn text-xs font-black border-white/20 hover:border-yellow-500"
                >
                  {lang.toUpperCase()}
                </button>
              </div>
            </div>
          </div>

          {/* AVATAR CON ANILLO DE LUZ */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-yellow-500 rounded-[2.5rem] blur opacity-10 group-hover:opacity-30 transition duration-500"></div>
            <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-[2.2rem] overflow-hidden border border-white/10 bg-black">
              <img 
                src={perfil?.foto_url || "https://api.dicebear.com/7.x/avataaars/svg?seed=Alonso"} 
                alt="Avatar" className="w-full h-full object-cover"
              />
            </div>
          </div>
        </header>

        {/* TRAYECTORIA */}
        <section className="space-y-12">
          <h3 className="section-title-yellow">{t.work}</h3>
          <div className="space-y-10">
            {experiencias.map((exp) => (
              <div key={exp.id} className="flex justify-between items-start border-l-2 border-white/5 pl-8 hover:border-yellow-500/50 transition-colors">
                <div className="space-y-1">
                  <h4 className="text-white text-xl font-bold">{exp.empresa}</h4>
                  <p className="text-yellow-500/80 text-sm font-medium">{exp.puesto}</p>
                </div>
                <span className="text-[10px] font-black text-slate-600 tracking-widest">{exp.periodo}</span>
              </div>
            ))}
          </div>
        </section>

        {/* PROYECTOS */}
        <section className="space-y-12">
          <h3 className="section-title-yellow">{t.projects}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {proyectos.map((proy) => (
              <div key={proy.id} className="project-card group">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="text-white text-lg font-bold group-hover:text-yellow-500 transition-colors">{proy.titulo}</h4>
                  <ExternalLink size={18} className="text-slate-700 group-hover:text-yellow-500" />
                </div>
                <p className="text-sm text-slate-500 leading-relaxed mb-8 italic">{proy.descripcion}</p>
                <div className="flex flex-wrap gap-2">
                  {proy.tecnologias?.split(',').map((tech: string) => (
                    <span key={tech} className="tech-tag">{tech.trim()}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCACIÓN */}
        <section className="space-y-12">
          <h3 className="section-title-yellow">{t.education}</h3>
          <div className="p-10 rounded-[2rem] border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-white text-2xl font-bold">Universidad Tecnológica del Perú</h4>
                <p className="text-yellow-500 font-semibold mt-2 text-lg">Ingeniería de Software</p>
                <p className="text-slate-600 text-[10px] mt-6 font-black uppercase tracking-[0.3em]">2023 — Actualidad</p>
              </div>
            </div>
          </div>
        </section>

        {/* CERTIFICACIONES (ESPACIO LIMPIO) */}
        <section className="space-y-12">
          <h3 className="section-title-yellow">{t.certs}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="h-24 rounded-3xl border border-dashed border-white/10 flex items-center justify-center opacity-30">
              <Award size={20} className="mr-2" />
              <span className="text-[10px] uppercase font-bold tracking-widest">Pending Certification</span>
            </div>
            <div className="h-24 rounded-3xl border border-dashed border-white/10 flex items-center justify-center opacity-30">
              <Award size={20} className="mr-2" />
              <span className="text-[10px] uppercase font-bold tracking-widest">Pending Certification</span>
            </div>
          </div>
        </section>

        {/* HABILIDADES (PILLS) */}
        <section className="space-y-12">
          <h3 className="section-title-yellow">{t.skills}</h3>
          <div className="flex flex-wrap gap-3">
            {habilidades.map(skill => (
              <span key={skill.id} className="skill-pill">
                {skill.nombre}
              </span>
            ))}
          </div>
        </section>

        {/* SOBRE MÍ */}
        <footer className="pt-24 border-t border-white/5">
          <h3 className="section-title-yellow mb-10">{t.about}</h3>
          <p className="text-slate-400 leading-relaxed text-lg italic font-light max-w-3xl">
            {perfil?.sobre_mi || "Ingeniero de Software en formación, enfocado en la arquitectura de sistemas modernos y la experiencia de usuario de alto nivel."}
          </p>
        </footer>

      </main>

      <style jsx>{`
        /* Títulos Grandes y Amarillos */
        .section-title-yellow {
          @apply text-lg font-black uppercase tracking-[0.4em] text-yellow-500;
        }

        /* Botones de Iconos con Glow al pasar el mouse */
        .icon-btn {
          @apply flex items-center justify-center w-14 h-14 bg-white/[0.03] border border-white/10 rounded-2xl text-slate-400 transition-all duration-300
                 hover:bg-yellow-500 hover:text-black hover:scale-110 hover:shadow-[0_0_30px_rgba(234,179,8,0.4)] hover:border-yellow-500 active:scale-90;
        }

        /* Tarjetas de Proyectos */
        .project-card {
          @apply p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-yellow-500/20 transition-all duration-500 hover:-translate-y-2;
        }

        /* Etiquetas de Tecnología */
        .tech-tag {
          @apply px-4 py-1.5 bg-yellow-500/5 text-[10px] text-yellow-500/70 rounded-full border border-yellow-500/10 uppercase font-black tracking-widest;
        }

        /* Pastillas de Habilidades */
        .skill-pill {
          @apply px-6 py-3 bg-[#0a0a0a] border border-white/5 text-xs text-slate-400 rounded-2xl hover:border-yellow-500/40 hover:text-white transition-all cursor-default;
        }
      `}</style>
    </div>
  );
}