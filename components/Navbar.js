import Link from "next/link";
import { useRouter } from "next/router";


export default function Navbar() {
  const router = useRouter();
  return (
    <nav className="text-2xl font-medium z-20 relative">
      <ul className="flex gap-12 justify-center lg:justify-start">
        <Link
          href={'/'}
          className={`cursor-pointer ${router.pathname == "/" ? "underline" : ""}`}
        >
          <li>Home</li>
        </Link>
        <Link
          href={'/contact'}
          className={`cursor-pointer ${router.pathname == "/contact" ? "underline" : ""}`}
        >
          <li>Contact</li>
        </Link>
      </ul>
    </nav >
  );
}