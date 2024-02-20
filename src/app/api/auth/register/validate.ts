import Users from "../../models/user";
import { sign } from "jsonwebtoken";
import bcrypt from 'bcrypt';
import { serialize } from "cookie";
import { NextResponse } from "next/server";

export default async function createUser(request: Request) {
  try {
    const MAX_AGE = 60 * 60 * 24 * 30; // days;
    const secret = process.env.JWT_SECRET || "";
    const body = await request.json();
    const { username, email, password } = body;

    const users1 = await Users.find({ email: email });
    const users2 = await Users.find({ name: username });

    if (users1.length === 0 && users2.length === 0) {
      const passwordHash = await bcrypt.hash(password, 17);
      await Users.create({ name: username, email, hash_password: passwordHash });

      const token = sign(
        {
          username,
        },
        secret,
        {
          expiresIn: MAX_AGE,
        }
      );

      const seralized = serialize(process.env.COOKIE_NAME || "", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: MAX_AGE,
        path: "/",
      });

      const response = {
        message: "Authenticated!",
      };

      return new Response(JSON.stringify(response), {
        status: 200,
        headers: { "Set-Cookie": seralized },
      });
    } else {
      return NextResponse.json(
        {
          message: "User already exists.",
        },
        {
          status: 500,
        }
      );
    }
  } catch (er) {
    return NextResponse.json(
      {
        message: "User already exists.",
      },
      {
        status: 500,
      }
    );
  }
}
