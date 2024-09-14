import { serve } from 'https://deno.land/std@0.208.0/http/server.ts';

const html = await Deno.readTextFile('./index.html');

function handler(_req: Request): Response {
	return new Response(html, {
		headers: { 'content-type': 'text/html; charset=utf-8' },
	});
}

await serve(handler, { port: 8000 });
