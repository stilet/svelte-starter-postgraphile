import adapter from '@sveltejs/adapter-node';
import * as middleware from "./src/middleware/index.js"

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: () => ({
			plugins: [
				(() => [
				{
					name: 'configure-server',
					configureServer(server) {
						//middleware.installLogging(server)
						//server.middlewares.use(myMiddleware1);
					}
				},	
				])(),
			]
		}),
	}
};

export default config;
