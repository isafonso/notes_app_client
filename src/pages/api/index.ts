import { NextRequest, NextResponse } from "next/server";

export default async function index(req: NextRequest, res: NextResponse) {
  const response = await fetch("http://localhost:3333", {
    method: "GET",
    cache: "no-store",
  });

  const data = await response.json();
  //res.json(data);
}
