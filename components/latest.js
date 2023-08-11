import { allPosts } from "@/.contentlayer/generated";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const latestPosts = allPosts.slice(0, 4);

  return (
    <div className="prose max-w-none mx-auto gap-10 grid grid-cols-2 text-slate-950 dark:text-slate-50 dark:prose-invert">
      {latestPosts.map((post) => (
        <article key={post._id}>
          <Link className="text-slate-950 dark:text-slate-50" href={post.slug}>
            <h2>{post.title}</h2>
          </Link>
          <Image
 
            src={post.cover}
            alt={post.title}
            width={250}
            height={250}
          />

          {post.description && <p>{post.description}</p>}
        </article>
      ))}
    </div>
  );
}