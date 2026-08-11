// Netlify build script — runs at deploy time to inject environment variables
// into config.js so credentials are never stored in GitHub.
const fs = require("fs");

const template = fs.readFileSync("config.js", "utf8");

const output = template
  .replace("NETLIFY_VAR_FIREBASE_API_KEY",     process.env.FIREBASE_API_KEY     || "")
  .replace("NETLIFY_VAR_FIREBASE_AUTH_DOMAIN", process.env.FIREBASE_AUTH_DOMAIN || "")
  .replace("NETLIFY_VAR_FIREBASE_DB_URL",      process.env.FIREBASE_DB_URL      || "")
  .replace("NETLIFY_VAR_FIREBASE_PROJECT_ID",  process.env.FIREBASE_PROJECT_ID  || "")
  .replace("NETLIFY_VAR_APP_USERNAME",         process.env.APP_USERNAME         || "")
  .replace("NETLIFY_VAR_APP_PASSWORD",         process.env.APP_PASSWORD         || "");

fs.writeFileSync("config.js", output);
console.log("✅ config.js populated with environment variables.");
