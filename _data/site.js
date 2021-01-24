const site = {
  "title": "HeartScape Studio",
  "baseURL": "https://b7s9.com/srp/growing",
  "description": "HeartScape Studio presents: Growing."
};

module.exports = function () {
  // use the URL that is set via an environment variable
  if (process.env.ELEVENTY_URL) {
    site.baseURL = process.env.ELEVENTY_URL;
  }

  return site;
};
