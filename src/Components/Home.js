import React from "react";
import "./Home.css";

export default function Home({ getData }) {
  return (
    <section className="home">
      <center>
        <div className="content">
          <p>
            <h1> Welcome</h1>
            To get the User Data Please Click the button
            <button onClick={getData}>Get Users</button>
          </p>

          <h6 style={{ color: "blue" }}> made by Keerti Gupta</h6>
        </div>
      </center>
    </section>
  );
}
