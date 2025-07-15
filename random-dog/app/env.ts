if(!process.env.CAT_API_KEY) {
  throw new Error("env CAT_API_KEY is not set");
}

export const CAT_API_KEY = process.env.CAT_API_KEY;