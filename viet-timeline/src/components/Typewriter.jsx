import { useEffect, useState } from "react";

export default function Typewriter({ text, speed = 15 }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    setDisplayed(""); // reset when text changes

    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i));
      i++;

      if (i > text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <p className="typewriter-text" style={{ color: "white", textShadow: "2px 2px 4px rgba(255, 255, 255, 0.5)", textShadow: "0 0 8px rgba(255, 255, 255, 0.8)" }}>{displayed}</p>;
}