const axios = require("axios");
const https = require("https");

const api = axios.create({
  baseURL: process.env.ZOSMF_HOST + ":" + process.env.ZOSMF_PORT,
  headers: { "X-CSRF-ZOSMF-HEADER": "" },
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

module.exports = api;
