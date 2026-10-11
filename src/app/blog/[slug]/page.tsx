import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { getPost, posts } from "@/lib/content";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article className="contain py-14 sm:py-20">
      <Link
        href="/#blog"
        className="nav-link inline-flex items-center gap-2 text-sm"
      >
        <ArrowLeft size={16} aria-hidden />
        Back
      </Link>

      <header className="mt-8 max-w-[60ch]">
        <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-3 text-sm text-soft">{post.dateLabel}</p>
      </header>

      <div className="post-body mt-10 max-w-[68ch]">
        {post.content.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}