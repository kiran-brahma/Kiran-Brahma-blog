import Link from "next/link"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@/components/analytics"
import { ModeToggle } from "@/components/mode-toggle"
import Image from 'next/image'

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Kiran Brahma",
  description: "A blog where I share my journey as an Entrepreneur",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
       className={`antialiased min-w-xl min-h-screen bg-white dark:bg-slate-950   ${inter.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="max-w-screen-xl mx-auto py-10 px-4 ">
            <header>
              <div className="flex items-center justify-between ">
                <div className="mr-10">
                <ModeToggle />
                </div>
                <nav className="mx-auto text-slate-950 dark:text-slate-50 text-sm font-semibold grid grid-cols-2 gap-4 sm:grid-cols-5">
                  <Link href="/">Home</Link>
                  <Link  href="/books">Books</Link>
                  <Link  href="/blog">My Writing</Link>
                  <Link  href="/articles">Knowledge</Link>
                  <Link  href="/contact">Contact</Link>
                </nav>
                
              </div>
             
            </header>
            <main className="pt-10">{children}</main>
            <footer className="footer items-center p-4 pt-10">
  <div className="items-center grid-flow-col">
    <Image src="/self.png" width={50} height={50} alt="Kiran Brahma"/>
    <p>Kiran Brahma</p>
  </div> 
  <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <Link href="https://twitter.com/the_brahmaa" target="_blank">  <Image src="/twitter.svg" width={20} height={20} alt="Twitter profile"/></Link> 
    <Link href="https://www.instagram.com/the.brahma/"><Image src="/insta.svg" width={20} height={20} alt="Instagram profile"/></Link>
    <Link href="https://www.linkedin.com/in/kbrahma"><Image src="/link.svg" width={20} height={20} alt="Linkedin profile"/></Link>
    <Link href="https://knighthood.co"><Image src="/work.svg" width={20} height={20} alt="Instagram profile"/></Link>

  </div>
</footer>
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
