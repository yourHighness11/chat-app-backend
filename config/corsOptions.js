const corsOptions = {
  origin: process.env.URL,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  methods: "GET,PUT,POST,DELETE ",
};

module.exports = corsOptions;
