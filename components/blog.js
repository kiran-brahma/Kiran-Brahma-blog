import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"
import Image from 'next/image'

export default function Home() {
  return (
    <div className="prose max-w-none mx-auto pt-10 gap-10 grid lg:grid-cols-3   sm:grid-cols-1  md:grid-cols-2 text-slate-950 dark:text-slate-50 dark:prose-invert">
      {allPosts.map((post) => (
        <article key={post._id}>
          <div className="card card-side">
  <figure><Image className="mx-auto" src={post.cover} alt={post.title} width={250} height={250} /></figure>
  <div className="card-body">
    <h2 className="card-title"><Link href={post.slug}>{post.title}</Link></h2>
    {post.description && <p>{post.description}</p>}
    <div className="card-actions justify-end">          
    </div>
  </div>
</div>

          
        </article>
      ))}
    </div>
  )
}
