export const runtime = "nodejs";

type PayLoad = {
    name?: string;
    email?: string;
    phone?: string;
    eventDate?: string;
    eventType?: string;
    message?: string;
    company?: string; //honeypot
};

function isEmail(value: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(req: Request) {
    try {
        const body = (await req.json()) as PayLoad;

        // Honeypot: if filled, silently succeed but do nothing
        if (body.company && body.company.trim().length > 0) {
            return Response.json({ ok: true });
        }

        const name = (body.name ?? "").trim();
        const email = (body.email ?? "").trim();
        const phone = (body.phone ?? "").trim();
        const date = (body.eventDate ?? "").trim();
        const type = (body.eventType ?? "").trim();
        const message = (body.message ?? "").trim();

        if (!name || !email || !message) {
            return Response.json({ ok: false, error: "Please fill in name, email, and message." }, { status: 400 });
        }
        if (!isEmail(email)) {
            return Response.json({ ok: false, error: "Please enter a valid email address." }, { status: 400 });
        }

        const webhookUrl = process.env.MAKE_WEBHOOK_URL;
        const secret = process.env.MAKE_WEBHOOK_SECRET;

        if (!webhookUrl || !secret) {
            return Response.json({ ok: false, error: "Server is not configured for enquiries yet." }, { status: 500 });
        }

        const res = await fetch(webhookUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                secret,
                name,
                email,
                phone,
                eventDate: date,
                eventType: type,
                message,
                company: "", // enforce empty
                source: "website",
            }),
        });

        if (!res.ok) {
            return Response.json({ ok: false, error: "Failed to send enquiry. Please try again." }, { status: 502 });
        }

        return Response.json({ ok: true });
    } catch {
        return Response.json({ ok: false, error: "Server error. Please try again." }, { status: 500 });
    }
}