import { ConnectOptions, MongoClient } from 'mongodb';
import { NextResponse } from "next/server";
    
    export default async function handler(req: Request) {
      const client = new MongoClient(process.env.MONGODB_URI || "", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as ConnectOptions);
    
      await client.connect();
      const db = client.db();
    
      switch (req.method) {
        case 'GET':
          const posts = await db.collection('posts').find({}).toArray();
          NextResponse.json(
            {
              data: posts,
            },
            {
              status: 200,
            }
          );
          break;
        case 'POST':
          // Handle POST request
          break;
        case 'PUT':
          // Handle PUT request
          break;
        case 'DELETE':
          // Handle DELETE request
          break;
        default:
          NextResponse.json(
            {
              message: "Unsupported HTTP method",
            },
            {
              status: 405,
            }
          );
      }
    
      await client.close();
    }