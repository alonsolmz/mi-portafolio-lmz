"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

export default function AdminPanel() {
  const [tab, setTab] = useState("perfil");
  const [perfil, setPerfil] = useState({ titulo_hero: "", sobre_mi: "" });
  const [habilidades, setHabilidades] = useState<any[]>([]);
  const [experiencias, setExperiencias] = useState<any[]>([]);
  const [proyectos, setProyectos] = useState<any[]>([]);

  // Estados para nuevos registros
  const [nuevaSkill, setNuevaSkill] = useState("");
  const [nuevaExp, setNuevaExp] = useState({ empresa: "", puesto: "", periodo: "", descripcion: "", tecnologias: "" });
  const [nuevoProy, setNuevoProy] = useState({ titulo: "", descripcion: "", github_url: "", live_url: "", tecnologias: "" });
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => { cargarDatos(); }, []);

  async function cargarDatos() {
    const { data: p } = await supabase.from("perfil").select("*").single();
    if (p) setPerfil(p);
    const { data: h } = await supabase.from("habilidades").select("*");
    setHabilidades(h || []);
    const { data: e } = await supabase.from("experiencia").select("*").order('id', { ascending: false });
    setExperiencias(e || []);
    const { data: pr } = await supabase.from("proyectos").select("*").order('id', { ascending: false });
    setProyectos(pr || []);
  }

  // --- FUNCIONES DE PERSISTENCIA ---
  async function guardarPerfil() {
    await supabase.from("perfil").upsert({ id: 1, ...perfil });
    alert("Perfil actualizado");
  }

  async function agregarSkill() {
    if (!nuevaSkill) return;
    await supabase.from("habilidades").insert([{ nombre: nuevaSkill }]);
    setNuevaSkill("");
    cargarDatos();
  }

  async function agregarExperiencia() {
    await supabase.from("experiencia").insert([nuevaExp]);
    setNuevaExp({ empresa: "", puesto: "", periodo: "", descripcion: "", tecnologias: "" });
    cargarDatos();
  }

  async function agregarProyecto() {
    let imagen_url = "";
    if (file) {
      const fileName = `${Date.now()}-${file.name}`;
      const { data } = await supabase.storage.from('proyectos').upload(fileName, file);
      if (data) {
        const { data: publicUrl } = supabase.storage.from('proyectos').getPublicUrl(fileName);
        imagen_url = publicUrl.publicUrl;
      }
    }
    await supabase.from("proyectos").insert([{ ...nuevoProy, imagen_url }]);
    setNuevoProy({ titulo: "", descripcion: "", github_url: "", live_url: "", tecnologias: "" });
    setFile(null);
    cargarDatos();
  }

  async function borrarItem(tabla: string, id: number) {
    if (confirm("¿Seguro que quieres eliminarlo?")) {
      await supabase.from(tabla).delete().eq('id', id);
      cargarDatos();
    }
  }

  return (
    <div style={{ padding: '40px', backgroundColor: '#000', minHeight: '100vh', color: 'white', fontFamily: 'sans-serif' }}>
      <h1 style={{ borderBottom: '2px solid #bc71ff', paddingBottom: '10px', marginBottom: '30px' }}>Admin Dashboard</h1>
      
      {/* MENÚ DE PESTAÑAS */}
      <nav style={{ display: 'flex', gap: '20px', marginBottom: '40px' }}>
        {['perfil', 'skills', 'experiencia', 'proyectos'].map((t) => (
          <button 
            key={t}
            onClick={() => setTab(t)}
            style={{ 
              background: 'none', border: 'none', color: tab === t ? '#bc71ff' : '#666', 
              cursor: 'pointer', fontSize: '1.1rem', fontWeight: 'bold', textTransform: 'uppercase' 
            }}
          >
            {t}
          </button>
        ))}
      </nav>

      {/* CONTENIDO DE PESTAÑAS */}
      <div style={{ backgroundColor: '#111', padding: '30px', borderRadius: '15px', border: '1px solid #222' }}>
        
        {tab === 'perfil' && (
          <section>
            <h2 style={{ marginBottom: '20px' }}>👤 Información Principal</h2>
            <label>Título en el Hero:</label>
            <input className="admin-input" value={perfil.titulo_hero} onChange={e => setPerfil({...perfil, titulo_hero: e.target.value})} />
            <label>Sobre mí:</label>
            <textarea className="admin-input" style={{ height: '150px' }} value={perfil.sobre_mi} onChange={e => setPerfil({...perfil, sobre_mi: e.target.value})} />
            <button className="btn-save" onClick={guardarPerfil}>Actualizar Perfil</button>
          </section>
        )}

        {tab === 'skills' && (
          <section>
            <h2>⚡ Habilidades Profesionales</h2>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
              <input className="admin-input" placeholder="Ej: Python" value={nuevaSkill} onChange={e => setNuevaSkill(e.target.value)} />
              <button className="btn-add" onClick={agregarSkill}>Añadir</button>
            </div>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {habilidades.map(h => (
                <span key={h.id} className="admin-pill" onClick={() => borrarItem('habilidades', h.id)}>{h.nombre} ✕</span>
              ))}
            </div>
          </section>
        )}

        {tab === 'experiencia' && (
          <section>
            <h2>💼 Trayectoria Laboral</h2>
            <div style={{ display: 'grid', gap: '10px', marginBottom: '30px' }}>
              <input className="admin-input" placeholder="Empresa" value={nuevaExp.empresa} onChange={e => setNuevaExp({...nuevaExp, empresa: e.target.value})} />
              <input className="admin-input" placeholder="Puesto" value={nuevaExp.puesto} onChange={e => setNuevaExp({...nuevaExp, puesto: e.target.value})} />
              <input className="admin-input" placeholder="Periodo (Ej: 2024)" value={nuevaExp.periodo} onChange={e => setNuevaExp({...nuevaExp, periodo: e.target.value})} />
              <textarea className="admin-input" placeholder="Descripción de logros" value={nuevaExp.descripcion} onChange={e => setNuevaExp({...nuevaExp, descripcion: e.target.value})} />
              <input className="admin-input" placeholder="Tecnologías (separadas por coma)" value={nuevaExp.tecnologias} onChange={e => setNuevaExp({...nuevaExp, tecnologias: e.target.value})} />
              <button className="btn-save" onClick={agregarExperiencia}>Guardar Puesto</button>
            </div>
            {experiencias.map(exp => (
              <div key={exp.id} style={{ padding: '15px', borderBottom: '1px solid #333', display: 'flex', justifyContent: 'space-between' }}>
                <div><strong>{exp.empresa}</strong> - {exp.puesto}</div>
                <button onClick={() => borrarItem('experiencia', exp.id)} style={{ color: 'red', background: 'none', border: 'none' }}>Eliminar</button>
              </div>
            ))}
          </section>
        )}

        {tab === 'proyectos' && (
          <section>
            <h2>🚀 Portafolio de Proyectos</h2>
            <div style={{ display: 'grid', gap: '10px' }}>
              <input type="file" onChange={e => setFile(e.target.files ? e.target.files[0] : null)} />
              <input className="admin-input" placeholder="Título del Proyecto" value={nuevoProy.titulo} onChange={e => setNuevoProy({...nuevoProy, titulo: e.target.value})} />
              <textarea className="admin-input" placeholder="Descripción" value={nuevoProy.descripcion} onChange={e => setNuevoProy({...nuevoProy, descripcion: e.target.value})} />
              <input className="admin-input" placeholder="URL GitHub" value={nuevoProy.github_url} onChange={e => setNuevoProy({...nuevoProy, github_url: e.target.value})} />
              <input className="admin-input" placeholder="URL Demo en Vivo" value={nuevoProy.live_url} onChange={e => setNuevoProy({...nuevoProy, live_url: e.target.value})} />
              <input className="admin-input" placeholder="Tecnologías usadas" value={nuevoProy.tecnologias} onChange={e => setNuevoProy({...nuevoProy, tecnologias: e.target.value})} />
              <button className="btn-save" onClick={agregarProyecto}>Subir Proyecto</button>
            </div>
          </section>
        )}
      </div>

      <style jsx>{`
        .admin-input { width: 100%; padding: 12px; margin: 5px 0; background: #222; color: white; border: 1px solid #333; border-radius: 5px; }
        .btn-save { padding: 12px 25px; background: #bc71ff; border: none; color: white; cursor: pointer; border-radius: 5px; font-weight: bold; margin-top: 10px; }
        .btn-add { padding: 0 20px; background: white; color: black; border: none; cursor: pointer; border-radius: 5px; font-weight: bold; }
        .admin-pill { padding: 5px 15px; border: 1px solid #bc71ff; borderRadius: 20px; font-size: 0.8rem; cursor: pointer; }
        .admin-pill:hover { background: rgba(188, 113, 255, 0.2); }
      `}</style>
    </div>
  );
}