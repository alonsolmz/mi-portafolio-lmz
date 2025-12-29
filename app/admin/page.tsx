"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [tecs, setTecs] = useState("");
  const [imagen, setImagen] = useState<File | null>(null);
  const [cargando, setCargando] = useState(false);
  const router = useRouter();

  // Bloque de seguridad: Si no hay sesión, manda al login
  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push("/login");
      }
    };
    checkUser();
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setCargando(true);

    try {
      let urlImagen = "";

      if (imagen) {
        const nombreArchivo = `${Date.now()}-${imagen.name}`;
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from("imagenes-proyectos")
          .upload(nombreArchivo, imagen);

        if (uploadError) throw uploadError;

        const { data: publicUrlData } = supabase.storage
          .from("imagenes-proyectos")
          .getPublicUrl(nombreArchivo);
        
        urlImagen = publicUrlData.publicUrl;
      }

      const arrayTecs = tecs.split(",").map(t => t.trim());
      const { error } = await supabase.from("proyectos").insert([
        { 
          titulo, 
          descripcion, 
          tecnologias: arrayTecs,
          imagen_url: urlImagen,
          destacado: false 
        }
      ]);

      if (error) throw error;
      alert("¡Proyecto guardado con éxito!");
      setTitulo(""); setDescripcion(""); setTecs(""); setImagen(null);
    } catch (err: any) {
      alert("Error: " + err.message);
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-10 font-sans">
      <div className="max-w-xl mx-auto border border-zinc-800 p-8 rounded-[2.5rem] bg-zinc-900/30 backdrop-blur-md">
        <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold tracking-tighter">Panel de Control</h1>
            <button 
                onClick={() => supabase.auth.signOut().then(() => router.push("/login"))}
                className="text-xs text-zinc-500 hover:text-white transition-colors"
            >
                Cerrar Sesión
            </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-xs text-zinc-500 ml-2">IMAGEN DEL PROYECTO</label>
            <input type="file" accept="image/*" onChange={(e) => setImagen(e.target.files?.[0] || null)} 
                   className="text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-zinc-800 file:text-zinc-300 hover:file:bg-zinc-700 cursor-pointer" />
          </div>

          <input placeholder="Título del proyecto" value={titulo} onChange={(e) => setTitulo(e.target.value)} 
                 className="bg-zinc-900/50 p-4 rounded-2xl border border-zinc-800 outline-none focus:border-zinc-500 transition-all" required />
          
          <input placeholder="Tecnologías (ej: Next.js, Tailwind, Python)" value={tecs} onChange={(e) => setTecs(e.target.value)} 
                 className="bg-zinc-900/50 p-4 rounded-2xl border border-zinc-800 outline-none focus:border-zinc-500 transition-all" />
          
          <textarea placeholder="Describe tu obra..." value={descripcion} onChange={(e) => setDescripcion(e.target.value)} 
                    className="bg-zinc-900/50 p-4 rounded-2xl border border-zinc-800 h-32 outline-none focus:border-zinc-500 transition-all" />
          
          <button disabled={cargando} className="bg-white text-black font-black p-4 rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50">
            {cargando ? "SUBIENDO..." : "PUBLICAR EN PORTAFOLIO"}
          </button>
        </form>
      </div>
    </div>
  );
}