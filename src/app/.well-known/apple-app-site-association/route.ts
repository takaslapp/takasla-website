import { NextResponse } from "next/server";

export async function GET() {
  const aasa = {
    applinks: {
      details: [
        {
          appIDs: ["J323M6Z65U.com.takaslapp.app"],
          components: [
            {
              "/": "/i/*",
            },
          ],
        },
      ],
    },
  };

  return NextResponse.json(aasa, {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
