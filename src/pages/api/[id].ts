import { NextRequest, NextResponse } from "next/server";

export default async function index(req: NextRequest, res: NextResponse) {
  if (req.method === "GET") {
    try {
      const response = await fetch(
        `http://localhost:3333/editar-anotacao/${1}`,
        {
          method: "GET",
          cache: "no-store",
        }
      );
      const data = await response.json();
      //return res.json(data);
    } catch (error) {
      //return res.json(error);
    }
  }
}
