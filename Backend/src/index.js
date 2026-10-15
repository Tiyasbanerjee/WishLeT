export default {
  async fetch(request, env, ctx) {
    return new Response("Hello from my manual Cloudflare Worker!");
  },
};