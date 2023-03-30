const configFile = require('./config.json');

const serverEnv = process.env.NODE_ENV
const config = configFile[serverEnv]

export const BACKEND_URL = config["BACKEND_URL"]
export const REDIRECT_URL = config["REDIRECT_URL"]
export const SEARCH_URL = config["SEARCH_URL"]