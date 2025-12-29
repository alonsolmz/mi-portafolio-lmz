"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert("Error: " + error.message);
    } else {
      router.push("/admin"); // Si entra bien, lo mandamos al admin
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <form onSubmit={handleLogin} className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 w-full max-w-md">
        <h1 className="text-white text-2xl font-bold mb-6">Acceso Administrador</h1>
        <input 
          type="email" 
          placeholder="Correo" 
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-black text-white p-3 rounded-xl mb-4 border border-zinc-800"
        />
        <input 
          type="password" 
          placeholder="Contraseña" 
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-black text-white p-3 rounded-xl mb-6 border border-zinc-800"
        />
        <button className="w-full bg-white text-black font-bold p-3 rounded-xl hover:bg-zinc-200 transition-all">
          Entrar
        </button>
      </form>
    </div>
  );
}