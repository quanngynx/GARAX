import type { NextConfig } from "next";
import withBundleAnalyzer from '@next/bundle-analyzer';
import { ExperimentalConfig } from "next/dist/server/config-shared";

const bundleAnalyzer = withBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
})

const experimental: ExperimentalConfig = {
    optimizePackageImports: [
        'antd',
        'framer-motion',
    ],
    serverActions: {
        allowedOrigins: []
    }
}

const nextConfig: NextConfig = {
    /* config options here */
    compress: true,
    compiler: {
        removeConsole: {
            exclude: ['error'],
        },
        styledComponents: true,
    },
    // styledComponents: true,
    onDemandEntries: {
        maxInactiveAge: 30 * 1000,
        pagesBufferLength: 5,
    },
    experimental: {
        reactCompiler: true,
        optimizeCss: true,
        optimizePackageImports: [
            'framer-motion',
        ],
        // typedRoutes: true,
        // scrollRestoration: true,
        ...experimental,
        optimizeServerReact: true,
        scrollRestoration: true,
        parallelServerCompiles: true,
        parallelServerBuildTraces: true,
        webpackBuildWorker: true,
        webpackMemoryOptimizations: true,
    },
    /**
      * @description unit: sec
      */
    expireTime: 60 * 60,
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
    images: {
        minimumCacheTTL: 31536000,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "bevgyjm5apuichhj.public.blob.vercel-storage.com",
                port: "",
                pathname: "/**",
                search: "",
            },
        ],
    },
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    // {
                    //   key: 'Content-Security-Policy',
                    //   value: "default-src 'self'; script-src 'self'; object-src 'none';",
                    // },
                    // {
                    //   key: 'X-Content-Type-Options',
                    //   value: 'nosniff',
                    // },
                    // {
                    //   key: 'X-Frame-Options',
                    //   value: 'DENY',
                    // },
                    // {
                    //   key: 'X-XSS-Protection',
                    //   value: '1; mode=block',
                    // },
                    {
                        key: 'Access-Control-Allow-Origin',
                        value: '*',
                    },
                    {
                        key: 'Access-Control-Allow-Methods',
                        value: 'GET, POST, PUT, PATCH, DELETE',
                    },
                    {
                        key: 'Access-Control-Allow-Headers',
                        value: 'X-Requested-With, Content-Type, Authorization',
                    },
                    {
                        key: 'Access-Control-Allow-Credentials',
                        value: 'true',
                    },
                    // {
                    //   key: 'X-API-Version',
                    //   value: '1.0.0',
                    // },
                    // {
                    //   key: 'X-CSRF-Token',
                    //   value: 'your-csrf-token-here',
                    // },
                ],
            }
        ]
    },
    async rewrites() {
        return [
            {
                source: '/',
                destination: '/dashboard',
            },
        ];
    },
};

export default bundleAnalyzer(nextConfig);
