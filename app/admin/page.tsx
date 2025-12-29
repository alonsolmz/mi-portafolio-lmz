import { supabase } from "@/lib/supabase";

export default async function Home() {
  // Traemos los proyectos ordenados por el más reciente
  const { data: proyectos, error } = await supabase
    .from("proyectos")
    .select("*")
    .order('id', { ascending: false });

  return (
    <main className="min-h-screen bg-[#050505] text-white p-6 md:p-24 font-sans">
      <header className="max-w-6xl mx-auto mb-16">
        <h1 className="text-6xl font-black tracking-tighter mb-4">ALONSO LMZ</h1>
        <p className="text-zinc-500 text-xl font-light">Diseñador & Desarrollador Fullstack</p>
      </header>

      {/* El famoso Bento Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[350px]">
        {proyectos?.map((proyecto, index) => (
          <div 
            key={proyecto.id}
            className={`group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-zinc-900/50 p-8 transition-all hover:border-white/20 
              ${index === 0 ? "md:col-span-2 md:row-span-1" : "md:col-span-1"}`}
          >
            {/* Imagen de fondo con efecto hover */}
            {proyecto.imagen_url && (
              <img 
                src={proyecto.imagen_url} 
                alt={proyecto.titulo}
                className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-all duration-700 group-hover:scale-110"
              />
            )}

            <div className="relative z-10 h-full flex flex-col justify-end">
              <h3 className="text-3xl font-bold mb-2 tracking-tight">{proyecto.titulo}</h3>
              <p className="text-zinc-400 text-sm line-clamp-2 mb-4">{proyecto.descripcion}</p>
              
              <div className="flex flex-wrap gap-2">
                {Array.isArray(proyecto.tecnologias) && proyecto.tecnologias.map((tec: string) => (
                  <span key={tec} className="px-3 py-1 bg-white/5 rounded-full text-[10px] uppercase tracking-widest border border-white/10">
                    {tec}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}