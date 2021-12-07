import React from "react";

export default function Newsletter() {
  return (
    <>
      <div className="newsletter flex flex-column align-items-center justify-content-center">
        <h2>Join Our Newsletter</h2>
        <p>
          Michaela sends you a monthly email to make sure you never miss an
          episode. In addition, she shares behind-the-scenes information about
          the show, the guests, and her journey as a tech entrepreneur.
        </p>
        <form className="flex flex-column align-items-center">
          <input type="email" placeholder="Email" required />{" "}
          <input type="text" placeholder="First Name" required />
          <button>Subscribe</button>
        </form>
      </div>
    </>
  );
}
