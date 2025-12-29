"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase"; // El @ apunta a la raíz de tu proyecto

export default function AdminPage() {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [tecs, setTecs] = useState("");
  const [imagen, setImagen] = useState<File | null>(null);
  const [cargando, setCargando] = useState(false);

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
      alert("¡Proyecto guardado!");
      setTitulo(""); setDescripcion(""); setTecs(""); setImagen(null);
    } catch (err: any) {
      alert("Error: " + err.message);
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <div className="max-w-xl mx-auto border border-zinc-800 p-8 rounded-3xl bg-zinc-900/50">
        <h1 className="text-2xl font-bold mb-6">Panel Admin</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input type="file" accept="image/*" onChange={(e) => setImagen(e.target.files?.[0] || null)} className="text-sm" />
          <input placeholder="Título" value={titulo} onChange={(e) => setTitulo(e.target.value)} className="bg-black p-3 rounded-xl border border-zinc-800" required />
          <input placeholder="Tecs (React, Tailwind...)" value={tecs} onChange={(e) => setTecs(e.target.value)} className="bg-black p-3 rounded-xl border border-zinc-800" />
          <textarea placeholder="Descripción" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} className="bg-black p-3 rounded-xl border border-zinc-800 h-32" />
          <button disabled={cargando} className="bg-white text-black font-bold p-3 rounded-xl hover:bg-zinc-200">
            {cargando ? "Guardando..." : "Publicar Proyecto"}
          </button>
        </form>
      </div>
    </div>
  );
}