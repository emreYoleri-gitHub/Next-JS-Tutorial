import React from "react";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>About Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="redColor bigText marginLeft">About</h1>

      <style jsx>{`
        .greenColor {
          color: green;
        }

        .redColor {
          color: red;
        }

        .bigText {
          font-size: 56px;
        }

        .marginLeft {
          margin-left: 1rem;
        }
      `}</style>
    </>
  );
};

export default About;
