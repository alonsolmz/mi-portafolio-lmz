import { supabase } from "@/lib/supabase";

export default async function Home() {
  // Obtenemos los datos de Supabase
  const { data: perfil } = await supabase.from("perfil").select("*").single();
  const { data: habilidades } = await supabase.from("habilidades").select("*");

  return (
    <main className="fondo-degradado" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'white' }}>
      <div style={{ width: '100%', maxWidth: '900px', padding: '0 20px' }}>
        
        {/* HERO SECTION */}
        <header style={{ textAlign: 'center', padding: '120px 0 80px 0' }}>
          <h1 style={{ fontSize: '5rem', fontWeight: '900', letterSpacing: '-3px', margin: 0 }}>
            ALONSO LMZ
          </h1>
          <p style={{ color: '#bc71ff', letterSpacing: '6px', fontSize: '0.9rem', marginTop: '15px', textTransform: 'uppercase' }}>
            {perfil?.titulo_hero || "Cargando título..."}
          </p>
        </header>

        {/* HABILIDADES (DISEÑO DE RECUADROS CON PUNTO) */}
        <section style={{ marginBottom: '100px' }}>
          <h2 style={{ color: '#666', fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '40px', borderBottom: '1px solid #222', paddingBottom: '10px' }}>
            / Habilidades
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            {habilidades?.map((skill) => (
              <div key={skill.id} style={{ 
                padding: '10px 20px', 
                backgroundColor: 'rgba(255,255,255,0.03)', 
                border: '1px solid #222', 
                borderRadius: '50px', 
                fontSize: '0.9rem',
                color: '#ccc',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#bc71ff' }}></div>
                {skill.nombre}
              </div>
            ))}
          </div>
        </section>

        {/* SOBRE MÍ */}
        <section style={{ textAlign: 'center', padding: '100px 0', borderTop: '1px solid #222' }}>
          <p style={{ fontSize: '1.6rem', lineHeight: '1.5', color: '#eee', maxWidth: '750px', margin: '0 auto 50px auto' }}>
            {perfil?.sobre_mi || "Cargando biografía..."}
          </p>
          <a href="/CV_Alonso_Almerco.docx" download className="boton-cv">
            Descargar CV
          </a>
        </section>
      </div>
    </main>
  );
}