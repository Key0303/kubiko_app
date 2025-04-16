import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-sky-900 px-12 py-2">
      <nav className="grid grid-cols-2 ">
        <Image src={logo} alt="" width={60} />

        <ul className="flex items-center justify-end gap-4 text-white">
          <li>
            <Link href="#">Ínicio</Link>
          </li>
          <li>
            <Link href="#">Imnóveis</Link>
          </li>
          <li>
            <Link href="#">Sobre nós</Link>
          </li>
          <li>
            <Link href="#">Contactos</Link>
          </li>
          <li>
            <Link href="#">Login</Link>
          </li>
          <li>
            <Link href="#">Cadastrar</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
