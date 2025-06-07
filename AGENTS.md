#Purpose

Build a modern, agent-powered frontend application in Next.js that connects directly to an existing and fully-deployed backend (MCP RAG server) at https://agent-crawl4ai-rag.onrender.com.

#System Context

##Backend
	•	The backend application is already built and deployed, serving all API endpoints at https://agent-crawl4ai-rag.onrender.com.
	•	Primary focus: Build the frontend from scratch and connect it to this backend.
	•	Integration is required:
	•	You must connect your frontend to the deployed backend endpoint and verify that all features and API endpoints work as intended.
	•	Testing backend integration in the real environment is mandatory—every endpoint, feature, and agent flow should be confirmed to work via the live frontend.
	•	Backend review and improvement is in-scope:
	•	All provided backend files (crawl4ai_mcp.py, utils.py, Dockerfile, crawled_pages.sql, pyproject.toml, etc.) should be thoroughly reviewed for bugs, inefficiencies, or security risks.
	•	You may run/test backend scripts locally if needed to diagnose or fix issues, but the standard workflow is to use the deployed endpoint.
	•	If bugs, performance bottlenecks, or API errors are discovered during integration, document and fix them as part of the process.

##Key Integration Points
	•	Backend Endpoint: https://agent-crawl4ai-rag.onrender.com
	•	API Integration:
	•	All frontend features (crawling, RAG, uploads, authentication, etc.) must connect to and use this backend.
	•	Every API and user flow should be tested via the live frontend-to-backend connection.
	•	Debug and resolve integration issues—on either the frontend or backend—as they are discovered.
	•	Backend Files:
	•	Treat all provided backend files and configs as in-scope for static code review, bug fixing, optimization, and security improvement.


##Frontend Requirements

1. Tech Stack
	•	Next.js (App Router)
	•	TypeScript
	•	Tailwind CSS
	•	shadcn/ui for advanced component patterns
	•	Supabase UI for authentication and file upload

2. Core Pages & Layout
	•	Dashboard/Home:
3-column grid of cards:
	•	Documentation Expert Agent
	•	Ultimate Business Strategist Agent
	•	Knowledge Base
	•	Agent Pages:
	•	Documentation Expert: Chat UI, crawl new docs
	•	Business Strategist: Chat UI, upload docs (Supabase Dropzone)
	•	Knowledge Base:
Table/grid view of all crawled/uploaded docs, synced from Supabase

3. Integration Details
	•	API Calls: Use backend endpoints for crawling, RAG queries, getting available sources, uploading files, etc.
	•	Agent Orchestration:
UI and data flow should support orchestrating tasks—e.g., agents can call different tools, and results can include citations, code, summaries, etc.
	•	Reusability:
Components (chat, cards, tables, uploads) should be easily extendable for new agents in the future.


##Functional Specifications

###Documentation Expert
	•	Chat with documentation via MCP RAG endpoint
	•	Crawl new websites/documentation (smart URL detection)
	•	Display source/citation with each answer

###Ultimate Business Strategist
	•	Chat interface for business Q&A
	•	Upload new business documents (SOPs, sales calls, guides, competitors, etc.)
	•	Pull insights from all knowledge (web + uploads)

###Knowledge Base
	•	List/search all available documents and sources
	•	Filter by type, source, agent, or tags


###User Flows
	1.	Sign In:
User logs in via Supabase Auth UI
	2.	Dashboard:
See 3 agents/cards. Click one to enter chat or manage docs.
	3.	Documentation Expert:
Ask questions, add docs/sites to crawl
	4.	Business Strategist:
Upload files, ask business questions
	5.	Knowledge Base:
Browse/search all knowledge, see details


##Design Principles
	•	Agent-centric:
Every major function routes through an “agent”—UX and data both reflect this paradigm.
	•	Extensible:
Prepare for new agents, tools, and easy UI expansion.
	•	Separation of Concerns:
Keep all backend calls encapsulated from UI logic for maintainability.
	•	Seamless Integration:
All development/testing should use the live backend endpoint.
	•	Backend review and testing required:
Provided backend code/config is in-scope for active code review, bug fixing, optimization, and security improvement.


##Getting Started
	1.	Set up a Next.js app with the required stack.
	2.	Integrate Supabase Auth using UI components.
	3.	Implement the Dashboard and Agent Pages per requirements above.
	4.	Connect UI to MCP endpoints for crawling, chat, RAG, and document operations.
	5.	Test and verify all frontend-backend integrations.
	6.	Review and, if necessary, fix/improve backend files and config based on real integration testing and code analysis.


##Reference Files
	•	Backend code/config files
(crawl4ai_mcp.py, utils.py, Dockerfile, crawled_pages.sql, pyproject.toml, etc.):
In-scope for static code review, bug fixing, and optimization. You may run scripts locally if needed for testing or debugging.
	•	Frontend: Build from scratch and integrate with the live backend endpoint.


##Summary
	•	Your job: Build the frontend app and connect it to the deployed backend at https://agent-crawl4ai-rag.onrender.com.
	•	Test every API and feature from the frontend, and debug both frontend and backend as needed.
	•	Backend files are in-scope for review, optimization, and maintenance—actively fix any issues you find.
	•	If a feature or endpoint does not work as intended, fix it on the backend as needed.
	•	Document all findings, fixes, and improvements as you work.
