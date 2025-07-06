import Navbar from '../components/Navbar';
import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, addDoc, onSnapshot, serverTimestamp } from 'firebase/firestore';
import Letter from '../components/Letter';
import '../assets/css/contact.css';

function Contact() {
  const colors = ['#e76f51', '#2a9d8f', '#264653', '#f4a261', '#8338ec', '#ff006e'];
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [messagesList, setMessagesList] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'guestbook'), (snapshot) => {
      setMessagesList(snapshot.docs.map(doc => doc.data()));
    });
    return () => unsub();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name.trim() === '' || message.trim() === '') return;
    await addDoc(collection(db, 'guestbook'), { name, message, timestamp: serverTimestamp()});
    setName('');
    setMessage('');
  };

  return (
    <>
      <Navbar />

      <div className="grid-container-contact">
        {"LET'S CONNECT!".split('').map((c, i) => <Letter key={i} char={c} />)}
      </div>

      <div className="contact">
        <div className="info">
          <h3>CONTACT</h3>
          <br />
          &gt; <span className="contactspan" >sumithra13022004@gmail.com</span><br /><br />

          <h3>SOCIALS</h3>
          <br />
          &gt; <a href="https://www.instagram.com/sumithra.jpg" target="_blank" rel="noopener noreferrer"><span className="socialspan" >INSTAGRAM</span></a><br />
          &gt; <a href="https://www.linkedin.com/in/sumithras" target="_blank" rel="noopener noreferrer"><span className="socialspan" >LINKEDIN</span></a><br />
          &gt; <a href="https://github.com/sumi-devs" target="_blank" rel="noopener noreferrer"><span className="socialspan" >GITHUB</span></a><br />
          &gt; <a href="https://app.thestorygraph.com/profile/notsumi" target="_blank" rel="noopener noreferrer"><span className="socialspan" >STORYGRAPH</span></a><br />
        </div>

        <div className="guest">
          <h3>GUEST BOOK</h3>
          <br />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            /><br />
            <textarea
              placeholder="Leave a message!"
              id="area"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea><br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      <div className="message-wrap">
        <h3>☆ MESSAGES ☆</h3>
        <div id="messages">
          {messagesList.map((msg, idx) => {
            const color = colors[idx % colors.length];
            return (
              <p key={idx}>
                <strong style={{ color: color }}>{msg.name}:</strong> {msg.message}
              </p>
            );
          })}
        </div>
      </div>

      <footer>
        <p>Thank you for visiting!</p>
      </footer>
    </>
  );
}

export default Contact;
