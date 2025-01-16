const corsOptions = {
  origin: "https://chat-app-personal-394e5.web.app",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  methods: "GET,PUT,POST,DELETE ",
};

module.exports = corsOptions;
