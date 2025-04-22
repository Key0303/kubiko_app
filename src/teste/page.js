// src/app/teste/page.js
"use client";
import { auth } from "@/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Teste() {
  const handleTest = async () => {
    try {
      await signInWithEmailAndPassword(auth, "teste@exemplo.com", "senhaqualquer");
      alert("Conectado ao Firebase!");
    } catch (error) {
      alert("Firebase configurado! Erro esperado: " + error.message);
    }
  };

  return (
    <div>
      <h1>Teste de Conexão</h1>
      <button onClick={handleTest}>Testar Firebase</button>
    </div>
  );
}
