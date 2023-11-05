export async function fetchIdentityMessages(roomID: string){
    const result = [
        {
          user_id: 1,
          username: "Person A",
          message: "Hello!",
          timestamp: new Date(),
        },
        {
          user_id: 2,
          username: "Person B",
          message: "Hello!",
          timestamp: new Date(),
        },
        {
          user_id: 2,
          username: "Person B",
          message: "I committed arson!",
          timestamp: new Date(),
        },
        {
          user_id: 1,
          username: "Person A",
          message: "Hello 2!",
          timestamp: new Date(),
        },
        {
          user_id: 2,
          username: "Person B",
          message: "Hello 3!",
          timestamp: new Date(),
        },
        {
          user_id: 1,
          username: "Person A",
          message: "Hello 4!",
          timestamp: new Date(),
        },
    ]
    return new Promise<{ data: object }>((resolve) =>
        resolve({ data: result }),
    )
}
    // const response = await fetch("http://localhost:3000/api/identity-messages-fetch", {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ roomID }),
    // })
    // const result = await response.json()

export const insertIdentityMessage = async (content: string, sender: string, roomID: number): Promise<{ data: object }> => {
    const response = await fetch("http://localhost:3000/api/identity-messages-insert", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content, sender, roomID }),
    })
    const result = await response.json()

    return result
}
