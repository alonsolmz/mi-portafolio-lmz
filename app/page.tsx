import { supabase } from "@/lib/supabase";

export default async function Home() {
  // Intentamos traer los proyectos de Supabase
  const { data: proyectos } = await supabase
    .from("proyectos")
    .select("*")
    .order('id', { ascending: false });

  return (
    <main className="min-h-screen bg-[#050505] text-white font-sans selection:bg-white selection:text-black">
      
      {/* 1. SECCIÓN HERO (Presentación Fija) */}
      <section className="max-w-6xl mx-auto pt-32 pb-20 px-6">
        <h1 className="text-8xl font-black tracking-tighter mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          ALONSO LMZ
        </h1>
        <p className="text-zinc-500 text-2xl font-light max-w-2xl leading-relaxed">
          Diseñador y Desarrollador Fullstack enfocado en crear experiencias digitales 
          minimalistas y de alto rendimiento.
        </p>
      </section>

      {/* 2. SECCIÓN SOBRE MÍ (Fija) */}
      <section className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-12 border-t border-white/5">
        <div>
          <h2 className="text-zinc-500 uppercase tracking-widest text-xs mb-4">Sobre mí</h2>
          <p className="text-xl text-zinc-300 leading-relaxed">
            Me apasiona transformar ideas complejas en interfaces intuitivas. 
            Especializado en el ecosistema de React, Next.js y arquitecturas modernas en la nube.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-white font-bold mb-2">Frontend</h3>
            <p className="text-zinc-500 text-sm">React, Next.js, Tailwind CSS, TypeScript</p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-2">Backend</h3>
            <p className="text-zinc-500 text-sm">Node.js, Supabase, PostgreSQL</p>
          </div>
        </div>
      </section>

      {/* 3. SECCIÓN DE PROYECTOS (Dinámica desde el Admin) */}
      <section className="max-w-6xl mx-auto py-20 px-6 border-t border-white/5">
        <h2 className="text-zinc-500 uppercase tracking-widest text-xs mb-10">Proyectos Seleccionados</h2>
        
        {proyectos && proyectos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[380px]">
            {proyectos.map((proyecto, index) => (
              <div 
                key={proyecto.id}
                className={`group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-zinc-900/30 transition-all hover:border-white/20 
                  ${index === 0 ? "md:col-span-2" : "md:col-span-1"}`}
              >
                {proyecto.imagen_url && (
                  <img 
                    src={proyecto.imagen_url} 
                    alt={proyecto.titulo}
                    className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-all duration-700 group-hover:scale-105"
                  />
                )}
                <div className="relative z-10 h-full flex flex-col justify-end p-10">
                  <h3 className="text-3xl font-bold mb-2 tracking-tight">{proyecto.titulo}</h3>
                  <p className="text-zinc-400 text-sm mb-6 line-clamp-2">{proyecto.descripcion}</p>
                  <div className="flex flex-wrap gap-2">
                    {proyecto.tecnologias?.map((tec: string) => (
                      <span key={tec} className="px-3 py-1 bg-white/5 rounded-full text-[10px] uppercase tracking-widest border border-white/10">
                        {tec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="h-40 flex items-center justify-center border border-dashed border-zinc-800 rounded-[2.5rem]">
            <p className="text-zinc-600 italic">Próximamente nuevos proyectos...</p>
          </div>
        )}
      </section>

      {/* 4. FOOTER / CONTACTO (Fijo) */}
      <footer className="max-w-6xl mx-auto py-20 px-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-zinc-500 text-sm">© 2025 ALONSO LMZ. Casi todos los derechos reservados.</p>
        <div className="flex gap-8 text-sm font-bold tracking-widest uppercase">
          <a href="#" className="hover:text-zinc-400 transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-zinc-400 transition-colors">GitHub</a>
          <a href="mailto:tu@email.com" className="hover:text-zinc-400 transition-colors">Email</a>
        </div>
      </footer>
    </main>
  );
}