import "@fontsource/inter/200.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";

import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "@fontsource/inter/900.css";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub"; // Import the new icon

import IconButton from "@mui/material/IconButton";
import "animate.css";
import "./AboutMe.css";
import React, { useState } from "react";

import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

function AboutMe() {
  const [hover, setHover] = useState(false);
  const [hover2, setHover2] = useState(false);

  return (
    <div>
      <p
        style={{
          fontFamily:
            "SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif",
          fontWeight: 600,
          color: "#1d1d1f",
          fontSize: "3rem",
          lineHeight: "60px",
          textAlign: "center",
        }}
        // className="text-center"
      >
        Jonathan Skoog
        <br />
        <p
          style={{
            fontFamily:
              "SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif",
            fontWeight: 600,
            color: "#6e6e73",
            lineHeight: "29px",
            fontSize: "1.5rem",
          }}
        >
          I'm a Software Developer
        </p>
      </p>

      <div className="icon-container">
        <div
          className={`icon-button ${hover ? "underline " : ""}`}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <IconButton
            size="large"
            aria-label="linkedinicon"
            color="primary"
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/jonathan-skoog-763599276",
                "_blank"
              );
            }}
          >
            <LinkedInIcon />
          </IconButton>
        </div>

        <div
          className={`text-center icon-button ${hover2 ? "underline" : ""}`}
          onMouseEnter={() => setHover2(true)}
          onMouseLeave={() => setHover2(false)}
        >
          <IconButton
            size="large"
            aria-label="githubicon"
            color="inherit"
            onClick={() => {
              window.open("https://github.com/jonathanskoog", "_blank");
            }}
          >
            <GitHubIcon /> {/* Use the new icon */}
          </IconButton>
        </div>

        {/* <span className="sm:ml-3">
          <button
            type="button"
            className="inline-flex mt-2 ml-1 items-center rounded-md bg-custom-blue px-5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <EnvelopeIcon
              className="-ml-0.5 mr-1.5 h-5 w-5 text-white"
              aria-hidden="true"
            />
            Publish
          </button>
        </span> */}

        <motion.div
          className="box"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 500, damping: 18 }}
          style={{ marginTop: "0.7rem" }}
        >
          <EnvelopeIcon
            className="-ml-0.5 mr-1.5 h-4 w-4 text-white"
            aria-hidden="true"
          />
          <p
            style={{
              fontFamily:
                "SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif",
              fontWeight: 400,
            }}
          >
            Contact
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutMe;
