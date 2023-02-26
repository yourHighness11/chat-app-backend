const corsOptions = {
  origin: process.env.URL,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

module.exports = corsOptions;
