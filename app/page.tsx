import Link from "next/link"
import Image from 'next/image'
import Latest from '@/components/latest'

export default function Home() {
  return (
    <div className="prose max-w-none mx-auto pt-10 text-slate-950 dark:text-slate-50 dark:prose-invert">
      <h1>hey, I am Kiran Brahma 👋</h1>
<p> I am an entrepreneur managing my own business, which provides security and staffing solutions to organizations across India.</p>
<p>Management Graduate from <Link href="https://isb.edu" target="_blank">ISB</Link> and Civil Engineering from <Link href="https://nith.ac.in" target="_blank">NIT Hamirpur</Link></p>
<p>Worked across various industries, including infrastructure, telecom, transportation, Tech-Startups, and Clean-tech.</p>
<Link href="https://www.linkedin.com/in/kbrahma" target="_blank">Linkedin Profile</Link>
      <h2>What this blog is about</h2>
      
      <p>This blog shares my journey as an entrepreneur running my own small business.

While startups and large organizations get most of the attention, I found little assistance for those like me - forcing me to experiment and learn on my own. I chronicle that journey here to help others.</p>

<p>I plan to share my various tools, guides, lessons from entrepreneurial experience and hope it helps others in some form or other.</p>

<p>Beyond business, I&apos;m passionate about travel, photography, reading and music.  
This blog is a work in progress. I write out of curiosity, covering a wide range of topics. I hope those reading can find some topics that interest you.</p>
    
    <h2>My Latest Writings</h2>
    <div className="max-w-none">
    <Latest/>
    </div>
    </div>

  )
}
