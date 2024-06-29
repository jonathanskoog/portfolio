import React from "react";
import "./About.css";
import { Divider } from "@nextui-org/react";
import { motion } from "framer-motion";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { Toaster, toast } from "sonner";
import { Image } from "@nextui-org/react";
import myImage from "./about-components/short.jpg";
import CV from "./about-components/Jonathan Skoog cv 2024 ny eng.pdf";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

function About() {
  useGSAP(() => {
    gsap.from(".image", {
      opacity: 0,
      delay: 0.5,
      scrollTrigger: {
        trigger: ".image",
        start: "top 75%",
        end: "bottom 25%",
      },
    });
    gsap.from(".btnbox", {
      opacity: 0,
      delay: 1,
      y: 50,
      scrollTrigger: {
        trigger: ".image",
        start: "top 75%",
        end: "bottom 25%",
        markers: true,
      },
    });
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1 className="header">About</h1>
      <Divider orientation="horizontal" className="divider" />
      <div className="image">
        <Image
          isZoomed
          isBlurred
          shadow="md"
          radius="lg"
          width={475}
          height={509}
          alt="NextUI Fruit Image with Zoom"
          src={myImage}
          fallbackSrc="https://via.placeholder.com/300x200"
        />
      </div>

      <div className="textbox">
        <div className="text">
          <p
            style={{
              fontFamily:
                "SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif",
              fontWeight: 400,
            }}
          >
            I am a student and aspiring software developer. Currently studying
            at the university of Blekinges tekniska högskola, where I am
            pursuing a masters degree in software development. I have a passion
            for programming and always looking to learn new things. Looking for
            new opportunities and to learn and grow as a developer.
          </p>
          <br />
          <p
            style={{
              fontFamily:
                "SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif",
              fontWeight: 400,
            }}
          >
            I am excited to see where my journey in software development will
            take me. I'm a quick learner and always looking to improve my skills
            in collaboration with other motivated individuals. Let's connect and
            see what we can create together!
          </p>
          <a href={CV} download="Jonathan Skoog cv 2024 ny eng">
            <motion.div
              layout
              className="btnbox"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 18 }}
              onClick={() => toast.success("CV was downloaded")}
            >
              <p
                style={{
                  fontFamily:
                    "SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif",
                  fontWeight: 400,
                }}
                className="cv-btn-text"
              >
                CV
              </p>
              <ArrowDownTrayIcon
                className="ml-2.5 mr-0 text-white cv-icon"
                aria-hidden="true"
              />
            </motion.div>
          </a>
        </div>
      </div>
      <Toaster richColors closeButton invert={true} />
    </div>
  );
}

export default About;
