import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { password } = await req.json();

    if (password === process.env.ADMIN_PASSWORD) {
      const response = NextResponse.json({
        success: true,
        message: "Welcome Boss!",
      });

      response.cookies.set({
        name: "reborn_admin",
        value: "true",
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 7,
        path: "/",
      });

      return response;
    } else {
      return NextResponse.json(
        { success: false, message: "Galat Password Bhai!" },
        { status: 401 },
      );
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Error in login" },
      { status: 500 },
    );
  }
}
