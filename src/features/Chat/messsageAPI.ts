import { MessagesArray, MessageDataObject } from "./types"
import pool from "../../api/db"
import { PrismaClient } from '@prisma/client';

declare global {
  namespace NodeJS {
    interface Global {
      prisma: PrismaClient;
    }
  }
}

let prisma: PrismaClient;

if (typeof window === "undefined") {
  if (process.env.NODE_ENV === "production") {
    prisma = new PrismaClient();
  } else {
    if (!global.prisma) {
      global.prisma = new PrismaClient();
    }

    prisma = global.prisma;
  }
}

// const prisma = new PrismaClient();

export const fetchMessages = async (roomID: number): Promise<{ data: object }> => {
  const result = [
    {
      room_id: 1,
      sender: "Person A",
      content: "Hello!",
    },
    {
      room_id: 2,
      sender: "Person B",
      content: "Hello!",
    },
    {
      room_id: 2,
      sender: "Person B",
      content: "I committed arson!",
    },
    {
      room_id: 1,
      sender: "Person A",
      content: "Hello 2!",
    },
    {
      room_id: 2,
      sender: "Person B",
      content: "Hello 3!",
    },
    {
      room_id: 1,
      sender: "Person A",
      content: "Hello 4!",
    },
  ]
  console.log("ROOM", roomID)

  return { data: result }
  // return new Promise<{data: object}>((resolve) =>
  //   resolve({data: result}),
  // )
}
// const response = await fetch("http://localhost:3000/api/identity-messages-fetch", {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ roomID }),
// })
// const result = await response.json()

export const insertMessage = async (sender: string, content: string, roomID: number): Promise<{ data: object }> => {
  // console.log(content, sender, roomID)
  // const response = await fetch("http://localhost:3000/api/identity-messages-insert", {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ content, sender, roomID }),
  // })
  // const result = await response.json()

  console.log("INSERTING: ", sender, content, roomID)

  try {
    // const sql = "INSERT INTO messages (content, sender, room_id) VALUES ($1, $2, $3)";
    // get messages from database
    const res = await prisma.messages.createMany({
      data: [
        {
          content: "Test message",
          sender: "Person A",
          room_id: 1
        },
        {
          content: "Another test message",
          sender: "Person B",
          room_id: 1
        }
      ]
    })
    // const res = await pool.query(sql, [content, sender, roomID]);
    // const res = {rows: ["kakka", "pylly"]}
    console.log("Wrote into database:", res)
    // return messages as an array of objects
    // return NextResponse.json({ data: results.rows })
    return { data: res }
  } catch (err) {
    // throw error if any
    console.error(err)
    throw err;
  }

  // return result
}
