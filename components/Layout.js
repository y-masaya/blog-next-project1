import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function Layout({ children, title = "HP by Nextjs" }) {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen text-gray-600 text-sm font-mono">
      <Head>
        <title>{title}</title>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              window.pbjs = window.pbjs || {};
              window.pbjs.que = window.pbjs.que || [];
            `,
          }}
        />
        <script async='async' src="https://flux-cdn.com/client/*****/****.min.js"></script>
      </Head>
      <header>
        <nav className="bg-gray-800 w-screen">
          <div className="flex items-center pl-8 h-14">
            <div className="flex space-x-4">
              <Link href="/">
                <a className="text-gray-300 hover:bg-gray-300 px-3 py-2 rounded">
                  Home
                </a>
              </Link>
              <Link href="/blog-page">
                <a className="text-gray-300 hover:bg-gray-300 px-3 py-2 rounded">
                  Blog
                </a>
              </Link>
              <Link href="/contact-page">
                <a className="text-gray-300 hover:bg-gray-300 px-3 py-2 rounded">
                  contact
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex flex-1 min-h-screen justify-center items-center flex-col w-screen">
        {children}
      </main>
      <footer className='flex w-full h-12 border-t justify-center items-center'>
        <a
          className="flex items-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className='h-4 ml-2'>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
