import React, { useState, useEffect } from "react";
import day from "../assets/day.jpg";
import morning from "../assets/morning.jpg";
import evening from "../assets/evening.jpg";
import night from "../assets/night.jpg";

const BackgroundBox = () => {
  const [background, setBackground] = useState(day);
  const [position, setPosition] = useState("25%");

  useEffect(() => {
    const changeBackground = () => {
      const hour = new Date().getHours();
      if (hour >= 4 && hour < 8) {
        setPosition("center");
      } else if (hour >= 8 && hour < 16) {
        setBackground(day);
        setPosition("25%");
      } else if (hour >= 16 && hour < 20) {
        setBackground(evening);
        setPosition("center");
      } else if (hour >= 20 || hour < 4) {
        setBackground(night);
        setPosition("top");
      }
    };
    changeBackground();

    const intervalId = setInterval(changeBackground, 60000);
    return () => clearInterval(intervalId);
  }, []);

  const backgroundStyles = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: position,
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
    position: "fixed",
    zIndex: "-1",
  };

  return <div className="background-box" style={backgroundStyles}></div>;
};

const styles = `
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    overflow: hidden;
  }

  .background-box {
    width: 100%;
    height: 100%;
  }
`;

const Head = () => (
  <head>
    <style>{styles}</style>
  </head>
);

const Page = () => (
  <div>
    <Head />
    <BackgroundBox />
    {/* Add your other components here */}
  </div>
);

export default Page;
