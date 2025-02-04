import type {NextConfig} from "next";

const isProduction = process.env.NODE_ENV === "production";
const isDevelopment = process.env.NODE_ENV === "development";
const isLocal = process.env.LOCAL === 'true';

const nextConfig: NextConfig = {
  /* config options here */
    // rewrites: async ()=> {
    //     return [
    //         {
    //             source:"/api/:path*",
    //             destination:isProduction ? '' : 'http://localhost:8083/:path*'
    //         }
    //     ]
    // },
};

export default nextConfig;
