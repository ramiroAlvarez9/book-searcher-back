module.exports = ({ env }) => ({
	url: env("BOOK_SEARCHER_URL"),
	proxy: true,
	app: {
		keys: env.array("APP_KEYS"),
	},
  });
