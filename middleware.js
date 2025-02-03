export function middleware(req) {
    const hostname = req.headers.get("host");

    if (hostname === "wondrlink.vercel.app") {
        return new Response(null, {
            status: 200,
            headers: {
                "X-Robots-Tag": "noindex, nofollow",
            },
        });
    }

    if (hostname === "wondrlink.com") {
        return new Response(null, {
            status: 200,
            headers: {
                "X-Robots-Tag": "index, follow",
            },
        });
    }

    return new Response(null);
}
