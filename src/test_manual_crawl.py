import asyncio
import os
from dotenv import load_dotenv

from crawl4ai_mcp import smart_crawl_url, crawl4ai_lifespan

# Load .env variables
load_dotenv()

# Create dummy context
class DummyRequestContext:
    lifespan_context = None

class DummyCtx:
    request_context = DummyRequestContext()

async def test():
    async with crawl4ai_lifespan(None) as lifespan_ctx:
        DummyCtx.request_context.lifespan_context = lifespan_ctx

        # Load URL from .env
        url = os.getenv("TEST_CRAWL_URL")
        if not url:
            raise ValueError("TEST_CRAWL_URL is not set in .env")

        result = await smart_crawl_url(DummyCtx(), url, max_depth=2)

        print(result)

# Run it
asyncio.run(test())