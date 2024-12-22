/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    output: `export`,
    trailingSlash: true,
    swcMinify: true,
    images: {
        unoptimized: true,
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.webm$/,
            use: {
                loader: `file-loader`,
                options: {
                    publicPath: `/_next/static/videos/`,
                    outputPath: `static/videos/`,
                    name: `[name].[hash].[ext]`,
                },
            },
        });

        return config;
    },
    experimental: {
        scrollRestoration: true,
    },
};

module.exports = nextConfig;
