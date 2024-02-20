import dbConnect, { dbDisconnect } from "../../lib/db";
import loginUser from "./validate";

export async function POST(request: Request) {

  return Promise.resolve()
    .then(() => dbConnect())
    .then(() => loginUser(request))
    .catch(() => {
      Response.json(
        {
          message: "Something went wrong.",
        },
        {
          status: 500,
        }
      );
    })
}
