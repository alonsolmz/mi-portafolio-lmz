"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Home() {
  const [perfil, setPerfil] = useState<any>(null);
  const [habilidades, setHabilidades] = useState<any[]>([]);
  const [experiencias, setExperiencias] = useState<any[]>([]);
  const [proyectos, setProyectos] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const { data: p } = await supabase.from("perfil").select("*").eq('id', 1);
      if (p && p.length > 0) setPerfil(p[0]);
      
      const { data: h } = await supabase.from("habilidades").select("*");
      setHabilidades(h || []);

      const { data: e } = await supabase.from("experiencia").select("*").order('id', { ascending: false });
      setExperiencias(e || []);

      const { data: pr } = await supabase.from("proyectos").select("*").order('id', { ascending: false });
      setProyectos(pr || []);
    }
    fetchData();
  }, []);

  return (
    <main className="fondo-stack">
      <div className="container-narrow">
        
        {/* HEADER CENTRADO */}
        <header className="hero-centered">
          <h1 className="name-title">{perfil?.nombre || "ALONSO LMZ"}</h1>
          <p className="role-subtitle">{perfil?.titulo_hero || "INGENIERO DE SOFTWARE"}</p>
        </header>

        <div className="vertical-stack">
          
          {/* 1. EXPERIENCIA */}
          <section className="card-full text-center">
            <h2 className="titulo-seccion">Experiencia</h2>
            {experiencias.length > 0 ? experiencias.map(exp => (
              <div key={exp.id} className="item-experiencia">
                <div className="exp-info">
                  <span className="empresa">{exp.empresa}</span>
                  <span className="periodo">{exp.periodo}</span>
                </div>
                <p className="puesto">{exp.puesto}</p>
              </div>
            )) : <p className="vacio">No hay experiencias cargadas.</p>}
          </section>

          {/* 2. PROYECTOS */}
          <section className="card-full text-center">
            <h2 className="titulo-seccion">Proyectos</h2>
            <div className="proyectos-vertical">
              {proyectos.length > 0 ? proyectos.map(proy => (
                <div key={proy.id} className="project-card-full">
                  {proy.imagen_url && <img src={proy.imagen_url} alt={proy.titulo} className="project-img" />}
                  <div className="project-content">
                    <h3>{proy.titulo}</h3>
                    <p>{proy.descripcion}</p>
                    <div className="tags-proyectos">
                      {proy.tecnologias?.split(',').map((t: string) => (
                        <span key={t} className="tag-morado">{t.trim()}</span>
                      ))}
                    </div>
                  </div>
                </div>
              )) : <p className="vacio">Añade proyectos desde el admin.</p>}
            </div>
          </section>

          {/* 3. HABILIDADES */}
          <section className="card-full text-center">
            <h2 className="titulo-seccion">Habilidades</h2>
            <div className="skills-flex">
              {habilidades.map(skill => (
                <span key={skill.id} className="pastilla-gris-mini">
                  {skill.nombre}
                </span>
              ))}
            </div>
          </section>

          {/* 4. SOBRE MÍ */}
          <section className="card-full text-center">
            <h2 className="titulo-seccion">Sobre mí</h2>
            <p className="descripcion-texto">{perfil?.sobre_mi}</p>
          </section>

        </div>

        <footer className="footer-simple">
          <p>© 2025 - Portafolio Profesional</p>
        </footer>
      </div>

      <style jsx>{`
        .fondo-stack {
          background: radial-gradient(circle at center, #1a0b2e 0%, #050505 100%);
          color: white;
          min-height: 100vh;
          padding: 80px 20px;
          font-family: 'Inter', sans-serif;
        }
        .container-narrow { max-width: 800px; margin: 0 auto; }
        
        .hero-centered { text-align: center; margin-bottom: 80px; }
        .name-title { font-size: clamp(3rem, 10vw, 5rem); font-weight: 800; margin: 0; letter-spacing: -3px; line-height: 1; }
        .role-subtitle { color: #bc71ff; text-transform: uppercase; letter-spacing: 5px; font-weight: 600; margin-top: 15px; font-size: 0.85rem; }

        .vertical-stack { display: flex; flex-direction: column; gap: 30px; }
        .text-center { text-align: center; }
        
        .card-full { 
          background: rgba(255, 255, 255, 0.02); 
          border: 1px solid rgba(255, 255, 255, 0.05); 
          padding: 50px 30px; 
          border-radius: 24px;
          backdrop-filter: blur(10px);
        }

        .titulo-seccion { color: #ffcc33; font-size: 1.6rem; margin-bottom: 30px; font-weight: 700; text-transform: none; }
        .descripcion-texto { color: #bbb; line-height: 1.8; font-size: 1.1rem; max-width: 650px; margin: 0 auto; }

        .item-experiencia { margin-bottom: 30px; }
        .exp-info { display: flex; flex-direction: column; gap: 5px; margin-bottom: 5px; }
        .empresa { font-weight: 700; font-size: 1.3rem; color: #fff; }
        .periodo { color: #555; font-size: 0.8rem; font-family: monospace; }
        .puesto { color: #bc71ff; font-size: 1rem; font-weight: 500; }

        .skills-flex { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; max-width: 600px; margin: 0 auto; }
        .pastilla-gris-mini { 
          background: #151515; 
          color: #888; 
          padding: 6px 14px; 
          border-radius: 8px; 
          font-size: 0.75rem; 
          border: 1px solid #222; 
        }

        .project-card-full { background: #080808; border-radius: 20px; border: 1px solid #151515; overflow: hidden; margin-bottom: 30px; }
        .project-img { width: 100%; height: 300px; object-fit: cover; opacity: 0.7; }
        .project-content { padding: 30px; }
        .project-content h3 { margin: 0 0 12px 0; font-size: 1.5rem; color: #fff; }
        .project-content p { color: #777; font-size: 0.95rem; line-height: 1.6; margin-bottom: 20px; }

        .tags-proyectos { display: flex; flex-wrap: wrap; gap: 6px; justify-content: center; }
        .tag-morado { font-size: 0.65rem; background: rgba(188, 113, 255, 0.08); color: #bc71ff; padding: 4px 10px; border-radius: 5px; font-weight: 700; text-transform: uppercase; border: 1px solid rgba(188, 113, 255, 0.2); }

        .footer-simple { text-align: center; margin-top: 80px; padding-bottom: 50px; color: #333; font-size: 0.75rem; }
        .vacio { color: #444; font-size: 0.9rem; }

        @media (max-width: 768px) {
          .name-title { font-size: 2.8rem; }
          .card-full { padding: 35px 20px; }
        }
      `}</style>
    </main>
  );
}