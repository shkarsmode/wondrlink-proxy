export function middleware(req) {
    const hostname = req.headers.get("host");

    if (hostname === "wondrlink.vercel.app") {
        return new Response(null, {
            headers: {
                "X-Robots-Tag": "noindex, nofollow",
            },
        });
    }

    return new Response(null);
}
