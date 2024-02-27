import { useState, useEffect } from "react";

export default function Typing({ texts, delay, infinite, ind, setInd }) {
  let text = texts[ind];
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout;
    if (currentIndex <= text.length) {
      timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + (text[currentIndex] || ""));
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);
    } else if (infinite) {
      setTimeout(() => {
        setCurrentIndex(0);
        setCurrentText("");
        setInd((ind + 1) % 4);
      }, 500);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [currentIndex, delay, infinite, text, setInd, ind]);

  return currentText;
}
