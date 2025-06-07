export default function Home() {
  return (
    <main className="min-h-screen p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      <a href="/agents/doc" className="border rounded p-6 hover:bg-gray-100 dark:hover:bg-gray-800">
        <h2 className="text-xl font-semibold mb-2">Documentation Expert</h2>
        <p>Crawl and chat with documentation.</p>
      </a>
      <a href="/agents/business" className="border rounded p-6 hover:bg-gray-100 dark:hover:bg-gray-800">
        <h2 className="text-xl font-semibold mb-2">Ultimate Business Strategist</h2>
        <p>Upload docs and ask business questions.</p>
      </a>
      <a href="/knowledge" className="border rounded p-6 hover:bg-gray-100 dark:hover:bg-gray-800">
        <h2 className="text-xl font-semibold mb-2">Knowledge Base</h2>
        <p>Browse all crawled and uploaded documents.</p>
      </a>
    </main>
  );
}
