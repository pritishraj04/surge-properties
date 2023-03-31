import { fail, redirect } from "@sveltejs/kit";
import { db } from "$lib/database";
import bcrypt from "bcrypt";

export const load = async ({ locals }) => {
  if (locals.user) {
    throw redirect(302, "/account");
  }
};

export const actions = {
  signup: async ({ request }) => {
    const data = await request.formData();
    const email = data.get("email");
    const phone = data.get("phone");
    const password = data.get("password");
    const confPassword = data.get("confPassword");

    console.log({ email, phone, password, confPassword });
    //need better validation
    if (!email || typeof email !== "string") {
      return fail(400, { error: "Please provide valid email." });
    }
    if (!phone || typeof phone !== "string") {
      return fail(400, { error: "Please provide valid phone." });
    }
    if (!password || typeof password !== "string") {
      return fail(400, { error: "Please provide valid password." });
    }
    if (password !== confPassword) {
      return fail(400, { error: "Password do not match." });
    }
    const userByEmail = await db.User.findUnique({ where: { email } });
    const userByPhone = await db.User.findUnique({
      where: { phone: parseInt(phone) },
    });
    if (userByEmail) {
      return fail(400, { error: "User with this email id already exist" });
    }
    if (userByPhone) {
      return fail(400, { error: "User with this phone number already exist" });
    }
    //hash the password

    await db.User.create({
      data: {
        email,
        phone: parseInt(phone),
        hash: await bcrypt.hash(password, 10),
        authToken: crypto.randomUUID(),
        Role: { connect: { name: "User" } },
      },
    });
    throw redirect(302, "/");
  },
};
