export default async function Home() {
  return (
    <main className="fondo-degradado" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'white' }}>
      
      {/* CONTENEDOR CENTRALIZADO */}
      <div style={{ width: '100%', maxWidth: '900px', padding: '0 20px' }}>
        
        {/* HEADER (HERO) - CENTRADO */}
        <header style={{ textAlign: 'center', padding: '120px 0 80px 0' }}>
          <h1 style={{ fontSize: '5rem', fontWeight: '900', letterSpacing: '-3px', margin: 0, lineHeight: 1 }}>
            ALONSO LMZ
          </h1>
          <p style={{ color: '#bc71ff', letterSpacing: '6px', fontSize: '0.9rem', marginTop: '15px', textTransform: 'uppercase', fontWeight: '300' }}>
            Ingeniero de Software & Especialista en Datos
          </p>
        </header>

        {/* 1. EXPERIENCIA LABORAL */}
        <section style={{ marginBottom: '100px' }}>
          <h2 style={{ color: '#666', fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '40px', borderBottom: '1px solid #222', paddingBottom: '10px' }}>
            / Experiencia Laboral
          </h2>
          
          {/* JNM */}
          <div style={{ marginBottom: '50px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '10px' }}>
              <h3 style={{ fontSize: '1.8rem', fontWeight: '700', margin: 0 }}>JNM</h3>
              <span style={{ color: '#444', fontSize: '0.9rem', fontFamily: 'monospace' }}>2024</span>
            </div>
            <p style={{ color: '#bc71ff', fontSize: '1.1rem', marginBottom: '15px' }}>Administrador de base de datos</p>
            <ul style={{ color: '#a1a1aa', lineHeight: '1.7', paddingLeft: '20px' }}>
              <li>Generación de reportes e indicadores de gestión (Excel avanzado).</li>
              <li>Coordinación de requerimientos entre desarrollo y operaciones.</li>
              <li>Aseguramiento de integridad de datos críticos del negocio.</li>
            </ul>
          </div>

          {/* FALUC */}
          <div style={{ marginBottom: '50px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '10px' }}>
              <h3 style={{ fontSize: '1.8rem', fontWeight: '700', margin: 0 }}>FALUC</h3>
              <span style={{ color: '#444', fontSize: '0.9rem', fontFamily: 'monospace' }}>2023</span>
            </div>
            <p style={{ color: '#bc71ff', fontSize: '1.1rem', marginBottom: '15px' }}>Administrador SQL</p>
            <ul style={{ color: '#a1a1aa', lineHeight: '1.7', paddingLeft: '20px' }}>
              <li>Mantenimiento de bases de datos para proyectos internos.</li>
              <li>Resolución de incidentes técnicos y soporte a usuarios.</li>
            </ul>
          </div>
        </section>

        {/* 2. PROYECTOS (Espacio para Supabase) */}
        <section style={{ marginBottom: '100px' }}>
          <h2 style={{ color: '#666', fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '40px', borderBottom: '1px solid #222', paddingBottom: '10px' }}>
            / Proyectos Seleccionados
          </h2>
          <div style={{ padding: '40px', border: '1px dashed #333', textAlign: 'center', color: '#444', borderRadius: '10px' }}>
            Los proyectos de la base de datos aparecerán aquí.
          </div>
        </section>

        {/* 3. SKILLS - GRID MODERNO */}
        <section style={{ marginBottom: '100px' }}>
          <h2 style={{ color: '#666', fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '40px', borderBottom: '1px solid #222', paddingBottom: '10px' }}>
            / Habilidades Técnicas
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '15px' }}>
            {['SQL', 'Python', 'Java', 'Power BI', 'n8n', 'Excel', 'HTML', 'CSS'].map((skill) => (
              <div key={skill} style={{ 
                padding: '15px', 
                backgroundColor: 'rgba(255,255,255,0.03)', 
                border: '1px solid #222', 
                borderRadius: '8px', 
                textAlign: 'center',
                fontSize: '0.9rem',
                color: '#ccc',
                transition: '0.3s'
              }}>
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* 4. SOBRE MÍ & CV - CENTRADO AL FINAL */}
        <section style={{ textAlign: 'center', padding: '100px 0', borderTop: '1px solid #222' }}>
          <h2 style={{ color: '#bc71ff', fontSize: '0.75rem', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '30px' }}>
            Sobre mí
          </h2>
          <p style={{ fontSize: '1.6rem', lineHeight: '1.5', color: '#eee', maxWidth: '750px', margin: '0 auto 50px auto' }}>
            Estudiante de 6to ciclo de Ingeniería de Software. Me apasiona transformar datos complejos en decisiones estratégicas mediante automatización y análisis.
          </p>
          
          <a 
            href="/CV_Alonso_Almerco.docx" 
            download 
            className="boton-cv"
            style={{ 
              display: 'inline-block',
              padding: '18px 40px',
              backgroundColor: 'white',
              color: 'black',
              borderRadius: '50px',
              fontWeight: 'bold',
              textDecoration: 'none',
              fontSize: '1rem'
            }}
          >
            Descargar Currículum
          </a>
        </section>

      </div>
    </main>
  );
}