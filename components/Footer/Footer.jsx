import React from "react";
import Image from "next/image";

import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import afubot from "../../public/AFUbot.svg";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "transparent",
        color: "#333",
        padding: "2rem 0",
        textAlign: "center",
      }}
    >
      <hr style={{ border: "1px solid #333", margin: "1rem 0" }} />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <Image
          src={afubot}
          alt="Logo"
          width="100"
          height="100"
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            display: "block",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "1rem",
        }}
      >
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: "0 1rem", color: "#333", textDecoration: "none" }}
        >
          <FacebookIcon color="#01AFEA" fontSize="large" />
        </a>
        <a
          href="https://www.github.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: "0 1rem", color: "#333", textDecoration: "none" }}
        >
          <GitHubIcon color="#01AFEA" fontSize="large" />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: "0 1rem", color: "#333", textDecoration: "none" }}
        >
          <InstagramIcon color="#01AFEA" fontSize="large" />
        </a>
      </div>
      <hr style={{ border: "1px solid #333", margin: "1rem 0" }} />
      <p style={{ fontSize: "0.9rem" }}>AFUBot© {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
