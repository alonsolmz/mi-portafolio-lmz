import { supabase } from "@/lib/supabase";

export default async function Home() {
  const { data: proyectos } = await supabase
    .from("proyectos")
    .select("*")
    .order('id', { ascending: false });

  return (
    <main className="fondo-degradado">
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '60px 20px' }}>
        
        {/* HEADER */}
        <header style={{ marginBottom: '80px' }}>
          <h1 style={{ fontSize: '5rem', fontWeight: '900', letterSpacing: '-3px', margin: 0 }}>
            ALONSO LMZ
          </h1>
          <p style={{ color: '#a1a1aa', fontSize: '1.5rem', fontWeight: '300' }}>
            Ingeniero de Software & Especialista en Datos
          </p>
        </header>

        {/* 1. EXPERIENCIA LABORAL */}
        <section style={{ marginBottom: '100px' }}>
          <h2 style={{ color: '#bc71ff', fontSize: '0.8rem', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '30px' }}>
            Experiencia Laboral
          </h2>
          
          {/* JNM */}
          <div style={{ marginBottom: '40px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <h3 style={{ fontSize: '1.8rem', margin: 0 }}>JNM</h3>
              <span style={{ color: '#a1a1aa', fontSize: '0.9rem' }}>01/2024 — 12/2024</span>
            </div>
            <p style={{ color: '#bc71ff', marginTop: '5px', fontWeight: '500' }}>Administrador de base de datos</p>
            <ul style={{ color: '#ccc', lineHeight: '1.8', marginTop: '15px' }}>
              [cite_start]<li>Generación de reportes e indicadores de gestión con Excel avanzado[cite: 10].</li>
              [cite_start]<li>Coordinación de requerimientos de software entre desarrollo y operaciones[cite: 11].</li>
              [cite_start]<li>Aseguramiento de integridad de datos de proveedores, ventas y stock[cite: 12].</li>
            </ul>
          </div>

          {/* FALUC */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <h3 style={{ fontSize: '1.8rem', margin: 0 }}>FALUC</h3>
              <span style={{ color: '#a1a1aa', fontSize: '0.9rem' }}>01/2023 — 12/2023</span>
            </div>
            <p style={{ color: '#bc71ff', marginTop: '5px', fontWeight: '500' }}>Administrador SQL</p>
            <ul style={{ color: '#ccc', lineHeight: '1.8', marginTop: '15px' }}>
              [cite_start]<li>Implementación y mantenimiento de bases de datos para proyectos internos[cite: 15].</li>
              [cite_start]<li>Resolución de incidentes técnicos y requerimientos de usuarios[cite: 16].</li>
            </ul>
          </div>
        </section>

        {/* 2. PROYECTOS (Admin) */}
        <section style={{ marginBottom: '100px' }}>
          <h2 style={{ color: '#bc71ff', fontSize: '0.8rem', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '30px' }}>
            Proyectos Seleccionados
          </h2>
          <div className="proyectos-grid">
             {/* Aquí va tu mapeo de proyectos que ya tenías */}
             <p style={{ color: '#555', fontStyle: 'italic' }}>Los proyectos subidos desde el admin aparecerán aquí.</p>
          </div>
        </section>

        {/* 3. HABILIDADES */}
        <section style={{ marginBottom: '100px' }}>
          <h2 style={{ color: '#bc71ff', fontSize: '0.8rem', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '30px' }}>
            Habilidades Técnicas
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            <div>
              <h4 style={{ color: 'white' }}>Lenguajes</h4>
              [cite_start]<p style={{ color: '#ccc' }}>Java, Python, SQL[cite: 17].</p>
            </div>
            <div>
              <h4 style={{ color: 'white' }}>Análisis & BI</h4>
              [cite_start]<p style={{ color: '#ccc' }}>Power BI, Excel, n8n[cite: 17].</p>
            </div>
            <div>
              <h4 style={{ color: 'white' }}>Web</h4>
              <p style={{ color: '#ccc' }}>HTML, CSS, Next.js.</p>
            </div>
          </div>
        </section>

        {/* 4. CERTIFICACIONES / EDUCACIÓN */}
        <section style={{ marginBottom: '100px' }}>
          <h2 style={{ color: '#bc71ff', fontSize: '0.8rem', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '30px' }}>
            Educación
          </h2>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ fontSize: '1.2rem' }}>Ingeniería de Software</h3>
              [cite_start]<p style={{ color: '#ccc' }}>Universidad Tecnológica del Perú[cite: 19, 20].</p>
            </div>
            [cite_start]<span style={{ color: '#a1a1aa' }}>2022 — Actualidad [cite: 20]</span>
          </div>
        </section>

        {/* 5. SOBRE MÍ */}
        <section style={{ borderTop: '1px solid #333', paddingTop: '60px' }}>
          
            Sobre mí<h2 style={{ color: '#bc71ff', fontSize: '0.8rem', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '30px' }}>
          </h2>
          <p style={{ fontSize: '1.4rem', lineHeight: '1.6', color: '#eee', maxWidth: '800px' }}>
            Soy un estudiante avanzado de Ingeniería de Software enfocado en transformar datos 
            [cite_start]crudos en insights accionables[cite: 3, 5]. Mi experiencia se centra en la 
            [cite_start]administración de bases de datos y la automatización de procesos operativos[cite: 4, 5].
          </p>
          <a href="/CV_Alonso_Almerco.docx" download className="boton-cv">
            Descargar Currículum Vitae
          </a>
        </section>

      </div>
    </main>
  );
}