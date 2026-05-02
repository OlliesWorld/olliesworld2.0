import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({ fallback: '404.html' }),
    prerender: {
      handleHttpError: ({ path, message }) => {
        if (path.startsWith('/olliesworld2.0')) return;
        throw new Error(message);
      }
    }
  }
};

export default config;
