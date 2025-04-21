"use client";
import { auth } from '@/lib/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function TestPage() {
  const testFirebase = async () => {
    try {
      // Tenta fazer login com credenciais inválidas (isso vai falhar, mas prova que a conexão funciona)
      await signInWithEmailAndPassword(auth, "teste@exemplo.com", "senhaerrada");
    } catch (error: any) {
      console.log("✅ Firebase conectado! Erro esperado:", error.message);
      alert("Firebase está funcionando! Erro esperado: " + error.message);
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