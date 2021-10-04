import Head from "next/head";
import NavBar from "./NavBar";
import "tailwindcss/tailwind.css";

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="prueba-prevalentware" />
        <title>{title}</title>
      </Head>
      <header>
        <NavBar></NavBar>
      </header>
      <main className="w-full content bg-grayLayout">{children}</main>
    </>
  );
}
