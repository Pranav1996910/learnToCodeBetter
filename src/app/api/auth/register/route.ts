import dbConnect from "../../lib/db";
import createUser from "./validate";

export async function POST(request: Request) {

  return Promise.resolve()
    .then(() => dbConnect())
    .then(() => createUser(request))
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