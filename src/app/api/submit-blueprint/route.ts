import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const { nameHandle, whatYouBuild, systemDescription, stackUsed } = await req.json();

    if (!nameHandle || !whatYouBuild || !systemDescription || !stackUsed) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    await pool.query(
      `INSERT INTO system_submissions (name_handle, what_you_build, system_description, stack_used)
       VALUES ($1, $2, $3, $4)`,
      [nameHandle.trim(), whatYouBuild.trim(), systemDescription.trim(), stackUsed.trim()]
    );

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Submit system error:", err);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
