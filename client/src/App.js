import React, { useRef, useState } from 'react';
//import logo from './logo.svg';
import './App.css';
//import VideoChat from './components/room';
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import 'firebase/compat/auth'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useAuthState } from "react-firebase-hooks/auth"
import { useCollectionData } from 'react-firebase-hooks/firestore'
import OnBoarding from './pages/OnBoarding';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import ChatContainer from './components/ChatContainer';
import Nav from './components/Nav';
import QuizComponent from './components/QuizComponent';

firebase.initializeApp({
  apiKey: "AIzaSyCKyB1MNt4OocE6iJrLmzoh_7A-ebar20o",
  authDomain: "chat-app-ad724.firebaseapp.com",
  projectId: "chat-app-ad724",
  storageBucket: "chat-app-ad724.appspot.com",
  messagingSenderId: "113118338300",
  appId: "1:113118338300:web:29ac8c2fad0444fa930b79"
})

const auth = firebase.auth();
const firestore = firebase.firestore();
//const analytics = firebase.analytics();

function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1></h1>
        <SignOut />
      </header>

      <section>
        <BrowserRouter>
          <Routes><Route path="/" element={<Home />}></Route>
            {user ? <Route path="/chat" element={<ChatRoom />} /> : <Route path="/" element={<Home />} />}
          </Routes>
        </BrowserRouter>
      </section>

    </div>
  );
}

function SignOut() {
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
  )
}


function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');


  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (<>
    <main>

      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

      <span ref={dummy}></span>

    </main>

    <form onSubmit={sendMessage}>

      <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say hello" />

      <button type="submit" disabled={!formValue}>SEND</button>

    </form>
  </>)
}


function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (<>
    <div className={`message ${messageClass}`}>
      <p>{text}</p>
    </div>
  </>)
}


export default App;