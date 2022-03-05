module.exports = ({ env }) => ({
	url: env("METAFISICA_LIBROS_URL"),
	proxy: true,
	app: {
	  keys: env.array("APP_KEYS", ["testKey1", "testKey2"]),
	},
  });

  APP_KEYS= 'jP8pb1lYsAhnmURarewxhA==','34xnLMYHY5jiU7ONTstTqQ=='


  