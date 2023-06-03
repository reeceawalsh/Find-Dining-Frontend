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
                source: "/Register",
                destination: "/register",
                permanent: true,
            },
        ];
    },
};

module.exports = nextConfig;
