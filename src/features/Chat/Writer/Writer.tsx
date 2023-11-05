"use client";

import { useState, useEffect } from "react";
import styles from "./writer.module.css";

import { sendMessage } from "@/lib/api";

import SendIcon from '@mui/icons-material/Send';

import {
  useDispatch,
  addMessage
} from '@/lib/redux'

export const Writer = () => {
  const dispatch = useDispatch()
  const [message, setMessage] = useState("");

  function sendUserMessage() {
    console.log("send message:", message);
    // connect to the database
    sendMessage(message, "Person A", 1)
  }

  useEffect(() => {

    // const user = dispatch(fetchUser(currentUser))
    dispatch(addMessage(message, "Person A", 1))
    //setCurrentUser(userData)

  }, [dispatch])

  return (
    <div className={styles.writerBox}>
      <input
        className={styles.input}
        placeholder="Here is my message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></input>
      <SendIcon
      className={styles.send} onClick={() => sendUserMessage()}
      ></SendIcon>
    </div>
  );
};

// export async function getStaticProps() {
//   // get posts from database
//   const posts = await sendMessage(message, "Person A", "1");
//   // return posts as props
//   return {
//     props: {
//       posts,
//     },
//   };
// }
