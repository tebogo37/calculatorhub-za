import { getAllTaxGuides, getAllPosts } from '../../lib/sanity';

export default async function TestSanityPage() {
  const guides = await getAllTaxGuides();
  const posts = await getAllPosts();

  return (
    <div className="max-w-3xl mx-auto py-20 px-4 space-y-12">
      <h1 className="text-4xl font-black">Sanity Connection Test</h1>

      <section>
        <h2 className="text-2xl font-bold mb-4">Tax Guides ({guides.length})</h2>
        <pre className="bg-slate-100 p-4 rounded-xl text-sm overflow-auto">
          {JSON.stringify(guides, null, 2)}
        </pre>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Blog Posts ({posts.length})</h2>
        <pre className="bg-slate-100 p-4 rounded-xl text-sm overflow-auto">
          {JSON.stringify(posts, null, 2)}
        </pre>
      </section>
    </div>
  );
}