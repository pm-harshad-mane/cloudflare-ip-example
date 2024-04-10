/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run "npm run dev" in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run "npm run deploy" to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
  async fetch(request, env, ctx) {
    // return new Response('Hello World!');
    return await handleRequest(request)
  },
};

/**
 * Respond to the request
 * @param {Request} request
 */
async function handleRequest(request) {
  // Get the IP address of the requester
  const ipAddress = request.headers.get('CF-Connecting-IP')

  // Prepare the JSON response
  const json = JSON.stringify({
    ip: ipAddress,
  })

  // Create a new response with CORS headers
  const response = new Response(json, {
    // Respond with a 200 status code
    status: 200,
    headers: {
      // Allow all origins to access this endpoint
      'Access-Control-Allow-Origin': '*',
      // Ensure the response has a JSON content type
      'Content-Type': 'application/json',
      // Optional: Customize the CORS policy further if needed
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })

  return response
}
