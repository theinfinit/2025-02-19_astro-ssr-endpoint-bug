import { defineMiddleware } from "astro:middleware";

// `context` and `next` are automatically typed
export const onRequest = defineMiddleware(async (context, next) => {
	const isPreflight = context.request.method === "OPTIONS"
	console.log(`🚀 ~ onRequest ~ isPreflight:`, isPreflight)
	return await next();
});
