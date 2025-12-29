// 1. IMPORTACIONES (Añade Supabase si lo vas a usar después)
// import { supabase } from "@/lib/supabase";

// 2. LA FUNCIÓN PRINCIPAL (Asegúrate de que empiece con 'export default')
export default async function Home() {
  
  return (
    <main className="fondo-degradado">
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '60px 20px' }}>
        
        {/* HEADER - Máxima importancia */}
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
          <h2 style={{ color: '#bc71ff', fontSize: '0.8rem', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '40px', opacity: 0.8 }}>
            Experiencia Laboral
          </h2>
          
          {/* JNM */}
          <div style={{ marginBottom: '50px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ fontSize: '2.2rem', fontWeight: '700', margin: 0 }}>JNM</h3>
              <span style={{ color: '#666', fontSize: '0.9rem' }}>01/2024 — 12/2024</span>
            </div>
            <p style={{ color: '#bc71ff', fontSize: '1.1rem', marginTop: '5px', fontWeight: '500' }}>
              Administrador de base de datos
            </p>
            <ul style={{ color: '#a1a1aa', lineHeight: '1.8', marginTop: '15px', maxWidth: '800px' }}>
              <li>Generación de reportes e indicadores de gestión con Excel avanzado.</li>
              <li>Coordinación de requerimientos entre desarrollo y operaciones.</li>
              <li>Aseguramiento de integridad de datos de proveedores, ventas y stock.</li>
            </ul>
          </div>

          {/* FALUC */}
          <div style={{ marginBottom: '50px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ fontSize: '2.2rem', fontWeight: '700', margin: 0 }}>FALUC</h3>
              <span style={{ color: '#666', fontSize: '0.9rem' }}>01/2023 — 12/2023</span>
            </div>
            <p style={{ color: '#bc71ff', fontSize: '1.1rem', marginTop: '5px', fontWeight: '500' }}>
              Administrador SQL
            </p>
            <ul style={{ color: '#a1a1aa', lineHeight: '1.8', marginTop: '15px' }}>
              <li>Mantenimiento de bases de datos para proyectos internos e integridad crítica.</li>
              <li>Resolución de incidentes técnicos y requerimientos de usuarios.</li>
            </ul>
          </div>
        </section>

        {/* 2. SOBRE MÍ */}
        <section style={{ borderTop: '1px solid #222', paddingTop: '60px', marginBottom: '100px' }}>
          <h2 style={{ color: '#bc71ff', fontSize: '0.8rem', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '30px' }}>
            Sobre mí
          </h2>
          <p style={{ fontSize: '1.6rem', lineHeight: '1.5', color: '#eee', maxWidth: '850px', marginBottom: '40px' }}>
            Estudiante avanzado de Ingeniería de Software (6to Ciclo). Me especializo en transformar datos crudos en insights accionables y optimizar flujos operativos.
          </p>
          
          <a 
            href="/CV_Alonso_Almerco.docx" 
            download 
            className="boton-cv"
            style={{ 
              display: 'inline-block',
              padding: '16px 32px',
              backgroundColor: 'white',
              color: 'black',
              borderRadius: '50px',
              fontWeight: 'bold',
              textDecoration: 'none',
              fontSize: '1rem',
              transition: 'all 0.3s ease'
            }}
          >
            Descargar Currículum Vitae
          </a>
        </section>

      </div>
    </main>
  );
}