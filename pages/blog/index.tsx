import Layout from '../../components/Layout';
import Link from 'next/link';
import { getAllPosts } from '../../lib/blog';

export default function Blog({ posts }: any) {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">My Blog</h1>
      <ul className="mt-4 space-y-2">
        {posts.map((post: any) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:underline">
              {post.title}
            </Link>
            <p className="text-sm text-gray-500">{post.date}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: { posts },
  };
}
