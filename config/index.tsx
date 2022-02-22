const prod = process.env.NODE_ENV === "production";

export const server = prod ? "https:studyspots.com" : "http://localhost:8080";

export const client = prod ? "https:studyspotsfrontendwtv.com" :  "http://localhost:3000";