import Link from "next/link";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/list">go to list</Link>
        </li>
        <li>
          <Link href="/map">map</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
