import { db } from "$lib/database";

export const handle = async ({ event, resolve }) => {
  const session = event.cookies.get("session");

  if (!session) {
    return resolve(event);
  }
  const user = await db.User.findUnique({
    where: { authToken: session },
    select: { id: true, phone: true, Role: true, email: true },
  });
  if (user) {
    event.locals.user = {
      id: user.id,
      phone: user.phone,
      role: user.Role.name,
      email: user.email,
    };
  }
  return await resolve(event);
};
