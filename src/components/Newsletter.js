import React, { useState } from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";

export default function Newsletter() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await addToMailchimp(email);
    console.log(result);
    setMessage(result.msg);
    // I recommend setting `result` to React state
    // but you can do whatever you want
  };

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <>
      <div className="newsletter flex flex-column align-items-center justify-content-center">
        <h2>Join Our Newsletter</h2>
        <p>
          Michaela sends you a monthly email to make sure you never miss an
          episode. In addition, she shares behind-the-scenes information about
          the show, the guests, and her journey as a tech entrepreneur.
        </p>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-column align-items-center"
        >
          <input
            type="email"
            placeholder="Email"
            required
            onChange={(e) => {
              setEmail(e.currentTarget.value);
            }}
          />{" "}
          <input type="text" placeholder="First Name" required />
          {message ? (
            <p style={{ color: "white", fontSize: "16px" }}>{message}</p>
          ) : (
            ""
          )}
          <button>Subscribe</button>
        </form>
      </div>
    </>
  );
}
