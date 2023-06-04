/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,

    async redirects() {
        return [
            {
                source: "/",
                destination: "/home",
                permanent: true,
            },
            {
                source: "/register",
                destination: "/signup",
                permanent: true,
            },
        ];
    },
};

module.exports = nextConfig;
