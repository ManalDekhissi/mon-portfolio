import posts from "@/data/posts.json";
import { notFound } from "next/navigation";
import Image from "next/image";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return posts.map(post => ({
    slug: post.slug,
  }));
}

export default function PostPage({ params }: Props) {
  const post = posts.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 mb-4">{post.date}</p>

      {post.image && (
        <div className="mb-6">
          <Image
            src={`/images/${post.image}`}
            alt={post.title}
            width={800}
            height={400}
            className="rounded-md shadow-md"
          />
        </div>
      )}

      <article className="prose">{post.content}</article>
    </main>
  );
}
