const site = {
  "title": "HeartScape Studio",
  "description": "HeartScape Studio presents: Growing."
};

module.exports = function () {
  if (process.env.ELEVENTY_PRODUCTION) {
    site.baseURL = 'https://b7s9.com/srp/growing';
  } else if (process.env.ELEVENTY_URL) {
    site.baseURL = process.env.ELEVENTY_URL
  } else {
    site.baseURL = 'http://localhost:8080';
  }

  return site;
};
