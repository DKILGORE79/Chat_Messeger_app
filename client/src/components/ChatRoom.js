import firebase from "firebase/compat/app";
import React, { useRef, useState } from "react";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import ChatMessage from "./ChatMessage";
import Nav from "../components/Nav";

const auth = firebase.auth();
const firestore = firebase.firestore();
function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);

  const [messages] = useCollectionData(query, { idField: "id" });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue("");
    dummy?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
       <Nav minimal={true} setShowModal={() => { }} showModal={false} />
      <main>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

        <span ref={dummy}></span>
      </main>

      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="say something nice"
        />

        <button className="primary-button" disabled={!formValue}>
          SEND
        </button>
      </form>
    </>
  );
}

export default ChatRoom;
