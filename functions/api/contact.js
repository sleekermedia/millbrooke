export async function onRequestPost({ env }) {
  const raw = env.MAILGUN_API_KEY ?? null;
  return Response.json({
    keyPresent: raw !== null,
    rawLength: raw ? raw.length : 0,
    trimmedLength: raw ? raw.trim().length : 0,
    base: env.MAILGUN_BASE ?? null,
    domain: env.MAILGUN_DOMAIN ?? null,
  });
}