import { useEffect, useRef, useState } from "react";

export default function Typewriter({ text, speed = 15 }) {
  const [displayed, setDisplayed] = useState("");
  const [fast, setFast] = useState(false);

  const indexRef = useRef(0);

  // keyboard handling
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Space") setFast(true);
    };

    const handleKeyUp = (e) => {
      if (e.code === "Space") setFast(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  // typing loop with speed boost option
  useEffect(() => {
    const interval = setInterval(() => {
      const step = fast ? 10 : 1; // type # characters at a time when space is held down

      indexRef.current += step;

      if (indexRef.current > text.length) {
        indexRef.current = text.length;
        clearInterval(interval);
      }

      setDisplayed(text.slice(0, indexRef.current));
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, fast]);

  return (
    <p
      className="typewriter-text"
      style={{
        color: "white",
        textShadow: "0 0 8px rgba(255, 255, 255, 0.8)",
      }}
    >
      {displayed}
    </p>
  );
}