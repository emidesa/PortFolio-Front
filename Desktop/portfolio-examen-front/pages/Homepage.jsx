
import React from "react";
import SplineViewer from "../components/Animation";

const Homepage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        zIndex: 1,
        marginLeft: "121px",
        width: "100%",
        backgroundColor: "#2E2D2D",
      }}
    >
      <main
        style={{
          minHeight: "100vh",
          zIndex: 2,
          flex: 1,
          backgroundColor: "#2E2D2D",
          overflow: "hidden",
          padding: "2rem",
          color: "white",
          fontFamily: "roboto",
          position: "absolute",
        }}
      >
        <div
          className="container"
          style={{
            maxWidth: "100%",
            marginRight: "150%",
            marginTop: "30%",
          }}
        >
          <h1 className="display-2 mb-4">Hi,</h1>
          <h1 className="display-2 mb-4">
            I'm{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #FF6B6B, #8B0000)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Emeline
            </span>
            ,
          </h1>
          <h1 className="display-2 mb-4">Web developer.</h1>
          <p
            className="text-white mb-5"
            style={{
              fontSize: "1.5em",
              lineHeight: "1.5",
              fontFamily: "roboto",
            }}
          >
            Fullstack developer
          </p>
          <button
            className="btn px-4 py-2"
            style={{
              background: "linear-gradient(90deg, #FF6B6B, #8B0000)",
              color: "white",
              borderRadius: "5px",
              border: "1px solid white",
            }}
          >
            Contact Me!
          </button>
        </div>
      </main>
      <div
        className="container-spline"
        style={{
          flex: 1,
          width: "100%",
          position: "relative",
          left: "600px",
        }}
      >
        <SplineViewer />
      </div>
      <div
      style={{
        width: "100vw",
        height:"100vh",
        backgroundColor: "black",
      }}>

      </div>
    </div>
  );
};

export default Homepage;
