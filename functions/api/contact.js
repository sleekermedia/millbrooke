export async function onRequestPost({ request, env }) {
  try {
    const form = await request.formData();

    // Honeypot — if a bot filled the hidden field, fake success and bail.
    if (form.get("bot-field")) return Response.json({ ok: true });

    const get = (k) => (form.get(k) || "").toString().trim();
    const name = get("name"), email = get("email"), message = get("message");
    const phone = get("phone"), company = get("company"), service = get("service");

    if (!name || !email || !message) {
      return Response.json({ ok: false, error: "Missing required fields" }, { status: 400 });
    }

    const text =
`New enquiry from the Millbrooke website

Name: ${name}
Email: ${email}
Phone: ${phone}
Company: ${company}
Service: ${service}

Message:
${message}`;

    const body = new URLSearchParams({
      from: env.CONTACT_FROM,
      to: env.CONTACT_TO,
      subject: `New enquiry: ${service || "Website contact"} — ${name}`,
      text,
      "h:Reply-To": email,
    });

    const res = await fetch(`${env.MAILGUN_BASE}/v3/${env.MAILGUN_DOMAIN}/messages`, {
      method: "POST",
      headers: {
        Authorization: "Basic " + btoa(`api:${env.MAILGUN_API_KEY}`),
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body,
    });

    if (!res.ok) {
      return Response.json({ ok: false, detail: await res.text() }, { status: 502 });
    }
    return Response.json({ ok: true });
  } catch (err) {
    return Response.json({ ok: false, error: err.message }, { status: 500 });
  }
}