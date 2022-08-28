import { useState, useContext } from "react";
import NotificationContext from "../../store/notification-ctx";

const sendRequest = async (obj) => {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }
};

const ContactForm = () => {
  const NotificationCtx = useContext(NotificationContext);
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    NotificationCtx.updateStatus("pending");
    NotificationCtx.updateMessage("Sending your message...");

    try {
      await sendRequest({
        name: enteredName,
        email: enteredEmail,
        message: enteredMessage,
      });
      NotificationCtx.updateStatus("success");
      NotificationCtx.updateMessage("Your message has been sent successfully!");
      setEnteredName("");
      setEnteredEmail("");
      setEnteredMessage("");
    } catch (error) {
      NotificationCtx.updateStatus("error");
      NotificationCtx.updateMessage(error.message);
      console.log(error.message);
    }
  };

  return (
    <div>
      <h2 className="text-5xl font-bold mb-8">Let&apos;s Talk!</h2>
      <form onSubmit={submitHandler}>
        <div className="input-group">
          <label htmlFor="name">Name & Company</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Andy from CompanyA"
            required
            value={enteredName}
            onChange={(event) => setEnteredName(event.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="andy@companya.com"
            required
            value={enteredEmail}
            onChange={(event) => setEnteredEmail(event.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            cols="50"
            rows="5"
            placeholder="we need help to remake our company website"
            required
            value={enteredMessage}
            onChange={(event) => setEnteredMessage(event.target.value)}
          />
        </div>
        <button className="font-bold tracking-wider bg-dark-prime hover:bg-white text-white hover:text-dark-prime border-[0.5px] border-white hover:border-opacity-0 py-2 px-6 mt-4 rounded-full transition-all duration-300">
          send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
