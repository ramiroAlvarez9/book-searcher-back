module.exports = ({ env }) => ({
	url: env("METAFISICA_LIBROS_URL"),
	proxy: true,
	app: {
		keys: env.array("APP_KEYS"),
	},
  });
