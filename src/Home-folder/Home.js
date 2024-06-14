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
import "./Home.css";
import React, { useState } from "react";

import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import { Toaster, toast } from "sonner";

import { Divider } from "@nextui-org/divider";

import Navbar from "./components/Navbar.js";

function Home() {
  const [hover, setHover] = useState(false);
  const [hover2, setHover2] = useState(false);

  return (
    <div className="aboutmediv center">
      <Navbar />
      <div className="center">
        <div>
          <p
            style={{
              fontFamily:
                "SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif",
              fontWeight: 600,
              color: "#1d1d1f",
              // fontSize: "6rem",
              // lineHeight: "84px",
              textAlign: "center",
            }}
            className="mobile-name"
          >
            Jonathan Skoog
            <br />
          </p>
          <p
            style={{
              fontFamily:
                "SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif",
              fontWeight: 600,
              color: "#6e6e73",
              // lineHeight: "29px",
              // fontSize: "2.5rem",
              marginTop: "1.5rem",
              marginBottom: "1.5rem",
              textAlign: "center",
            }}
            className="mobile-deschribtion"
          >
            I'm a Software Developer, based in Sweden.
          </p>
        </div>

        <div className="icon-container">
          <div
            className={`icon-button ${hover ? "underline " : ""}`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <IconButton
              // style={{ width: "4rem", height: "4rem" }}

              className="icon-mobile"
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
              <LinkedInIcon style={{ width: "100%", height: "100%" }} />
            </IconButton>
          </div>

          <Divider orientation="vertical" className="divide-mobile" />

          <div
            className={`text-center icon-button ${hover2 ? "underline" : ""}`}
            onMouseEnter={() => setHover2(true)}
            onMouseLeave={() => setHover2(false)}
          >
            <IconButton
              // style={{ width: "4rem", height: "4rem" }}
              className="icon-mobile"
              size="large"
              aria-label="githubicon"
              color="inherit"
              onClick={() => {
                window.open("https://github.com/jonathanskoog", "_blank");
              }}
            >
              <GitHubIcon style={{ width: "100%", height: "100%" }} />
            </IconButton>
          </div>

          <Divider
            orientation="vertical"
            className="divide-mobile divide-mobile-right"
          />

          <motion.div
            layout
            className="box"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500, damping: 18 }}
            onClick={() =>
              toast.success("Email was copied to clipboard") &&
              navigator.clipboard.writeText("jonathan.c.skoog@gmail.com")
            }
          >
            <EnvelopeIcon
              className="-ml-0.5 mr-1.5 text-white email-icon"
              aria-hidden="true"
            />
            <p
              style={{
                fontFamily:
                  "SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif",
                fontWeight: 400,
              }}
              className="email-btn-text"
            >
              Email
            </p>
          </motion.div>
        </div>

        <Toaster richColors closeButton invert={true} />

        {/* Lägg till onclick till nästa section*/}
        <div id="scroll-down-animation">
          <span class="mouse">
            <span class="move"></span>
          </span>
          {/* <p class="scrolldown">Scroll down</p> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
