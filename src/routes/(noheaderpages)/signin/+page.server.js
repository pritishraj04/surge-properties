import { fail, redirect } from "@sveltejs/kit";
import bcrypt from "bcrypt";
import { db } from "$lib/database";

export const load = async ({ locals }) => {
  if (locals.user) {
    throw redirect(302, "/account");
  }
};

export const actions = {
  signin: async ({ request, cookies }) => {
    const data = await request.formData();
    const email = data.get("email");
    const password = data.get("password");

    if (!email || typeof email !== "string") {
      return fail(400, { error: "Please prove valid email id." });
    }
    if (!password || typeof password !== "string") {
      return fail(400, { error: "Please prove valid password." });
    }
    const user = await db.User.findUnique({ where: { email } });
    if (!user) {
      return fail(400, {
        error: "Combination of phone and password is incorrect.",
      });
    }
    const auth = await bcrypt.compare(password, user.hash);
    if (!auth) {
      return fail(400, {
        error: "Combination of phone and password is incorrect.",
      });
    }
    const authUser = await db.User.update({
      where: { email },
      data: { authToken: crypto.randomUUID() },
    });
    cookies.set("session", authUser.authToken, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 30,
    });
    throw redirect(302, "/");
  },
};
