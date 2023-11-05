import { useState, useEffect } from "react";
import { Writer } from "./Writer/Writer"
import styles from "./chat.module.css";
import { MessageDataObject } from "./types";
// import { MessageDataObject } from "@/lib/redux/slices/messageSlice/types";
// import { UserDataObject } from "@/lib/redux/slices/userSlice/types";

import { useAppSelector, useAppDispatch } from "../../app/hooks"

// import {
//   userSlice,
//   useDispatch,
//   useSelector,
//   fetchUser,
//   selectUserData,
//   fetchMessages
// } from '@/lib/redux'

import {
  selectMessage
} from "./messageSlice"
import { getMessages } from "./thunks";

export const Chat = () => {
  const messages = useAppSelector(selectMessage)
  const dispatch = useAppDispatch()
  //const currentUser = "Person A"//useSelector(selectUserData)
  const [currentUser, setCurrentUser] = useState("Person A");
  // const userData = useSelector((state) => state.user.data)
  // const { data, status, error } = useSelector((state) => state.messages);

  useEffect(() => {
    console.log("DATA:", messages)
    console.log("currentUser:", currentUser)

    // const user = dispatch(fetchUser(currentUser))
    // dispatch(fetchUser("1"))
    dispatch(getMessages(1))
    //setCurrentUser(userData)

  }, [dispatch])

  // let currentUser = "Person A";

  return (
    <div className={styles.chatBoxParent}>
      <div className={styles.chatBox}>
        {messages &&
          <>
            {messages.map((msg: MessageDataObject, index: number) => {
              if (msg.sender === currentUser) {
                return (
                  <div key={index} className={styles.message + " " + styles.currentUserMessage}>
                    <div className={styles.username}>{msg.sender}</div>
                    <p>{msg.content}</p>
                  </div>
                );
              } else {
                return (
                  <div key={index} className={styles.message + " " + styles.otherUserMessage}>
                    <div className={styles.username}>{msg.sender}</div>
                    <p>{msg.content}</p>
                  </div>
                );
              }
            })}
          </>
        }
      </div>

      <Writer />

    </div>
  );
};
