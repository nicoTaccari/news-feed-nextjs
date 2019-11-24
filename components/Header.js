import Link from "next/link";
import Navbar from "../components/Navbar";

const linkStyle = {
  marginRight: 15
};

export default function Header() {
  return (
    <>
      <Link href="/">
        <a style={linkStyle}>
          <h1>News Feed</h1>
        </a>
      </Link>
      <Navbar />
    </>
  );
}
