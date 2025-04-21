// src/app/teste/page.tsx
"use client";
import { auth } from '@/lib/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FirebaseError } from 'firebase/app'; // Importe o tipo de erro do Firebase

export default function TestPage() {
  const testFirebase = async () => {
    try {
      await signInWithEmailAndPassword(auth, "teste@exemplo.com", "senhaerrada");
    } catch (error) {
      if (error instanceof FirebaseError) {
        console.log("✅ Firebase conectado! Erro esperado:", error.message);
        alert(`Firebase está funcionando! Erro esperado: ${error.code} - ${error.message}`);
      } else {
        console.log("Erro desconhecido:", error);
        alert("Ocorreu um erro desconhecido");
      }
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold mb-4">Teste de Conexão Firebase</h1>
      <button 
        onClick={testFirebase}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Testar Conexão
      </button>
    </div>
  );
}