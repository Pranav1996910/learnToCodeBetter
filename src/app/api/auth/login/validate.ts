import Users from "../../models/user";
import { sign } from "jsonwebtoken";
import bcrypt from 'bcrypt';
import { serialize } from "cookie";
import { NextResponse } from "next/server";

const loginUser = async (request: Request) => {

  const MAX_AGE = 60 * 60 * 24 * 30; // days;
  const secret = process.env.JWT_SECRET || "";
  const body = await request.json();

  const { email, password } = body;

  const user = await Users.findOne({ email: email });

  if (user) {
    const passwordHash = await bcrypt.hash(password, 17);
    const isPasswordMatch = await bcrypt.compare(
      password,
      user.hash_password
    );
    console.log(isPasswordMatch);

    const token = sign(
      {
        name: user.name,
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
  }
  else {
    return NextResponse.json(
      {
        message: "Incorrect user credentials",
      },
      {
        status: 403,
      }
    );
  }
}

export default loginUser;