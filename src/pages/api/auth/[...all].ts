export const prerender = false // SSR
import type { APIRoute } from "astro"

export const OPTIONS: APIRoute = ({ request }) => {
  console.log(`🚀 ~ request:`, request.method)
  return new Response(JSON.stringify({
      message: "This was an OPTIONS method!"
    }),
    {
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:4321',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Allow-Credentials': 'true',
      }
    }
  )
}

export const ALL: APIRoute = async ({ request }) => {
  console.log(`🚀 ~ [Catch-all] ~ request method:`, request.method)
  return new Response(JSON.stringify({
      message: `[Catch-all] This was an ${request.method} method!`
    })
  )
};
