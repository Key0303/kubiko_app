"use client"; // Adicione se estiver usando Next.js 13+
import { auth } from "@/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Teste() {
  const testarFirebase = async () => {
    try {
      await signInWithEmailAndPassword(auth, "teste@exemplo.com", "123456");
      alert("Conexão ao Firebase OK! (ignore o erro de usuário inválido)");
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        alert("Firebase conectado! Falta apenas criar usuários.");
      } else {
        alert("Erro: " + error.message);
      }
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Teste de Conexão</h1>
      <button 
        onClick={testarFirebase}
        className="bg-blue-500 text-white p-2 rounded mt-2"
      >
        Testar Firebase
      </button>
    </div>
  );
}