const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'https://agent-crawl4ai-rag.onrender.com';

export async function mcpCall<T>(tool: string, input: unknown): Promise<T> {
  const res = await fetch(`${BASE_URL}/mcp/${tool}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ input })
  });
  if (!res.ok) throw new Error('Request failed');
  return res.json() as Promise<T>;
}
