import "server-only";

// import { experimental_taintUniqueValue } from "react";
import { taintUniqueValue } from "next/dist/server/app-render/rsc/taint";

export const token = process.env.SANITY_API_READ_TOKEN;

if (!token) {
	throw new Error("Missing SANITY_API_READ_TOKEN");
}

taintUniqueValue(
	"Do not pass the sanity API read token to the client.",
	process,
	token
);
