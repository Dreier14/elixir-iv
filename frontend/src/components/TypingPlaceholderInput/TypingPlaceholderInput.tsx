import React, { useState, useEffect } from 'react';

const placeholderOptions: string[] = [
  "I'm feeling dehydrated...",
  "I'm feeling stressed and tired...",
  "I'm sick and not feeling well...",
  "I'm having a migraine...",
  "I'm feeling rundown and need immune support...",
  "I'm looking for an energy boost..."
];

interface TypingPlaceholderInputProps {
  userFeeling: string;
  setUserFeeling: (val: string) => void;
}

const TypingPlaceholderInput: React.FC<TypingPlaceholderInputProps> = ({ userFeeling, setUserFeeling }) => {
  const [placeholderText, setPlaceholderText] = useState('');
  const [currentOptionIndex, setCurrentOptionIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [mounted, setMounted] = useState(false); // Track if component has mounted

  useEffect(() => {
    setMounted(true); // Set mounted to true after client-side render
  }, []);

  useEffect(() => {
    if (!mounted) return; // Prevent running animation code during SSR

    let typingInterval: NodeJS.Timeout;

    const currentOption = placeholderOptions[currentOptionIndex];

    if (charIndex < currentOption.length) {
      typingInterval = setTimeout(() => {
        setPlaceholderText((prev) => prev + currentOption[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100); // Typing speed
    } else {
      // After finishing the current text, wait then move to next
      typingInterval = setTimeout(() => {
        setPlaceholderText('');
        setCharIndex(0);
        setCurrentOptionIndex((prev) => (prev + 1) % placeholderOptions.length);
      }, 2000); // Pause after fully typing
    }

    return () => clearTimeout(typingInterval);
  }, [charIndex, currentOptionIndex, mounted]);

  return (
    <input
      type="text"
      placeholder={placeholderText || "Describe your symptoms..."}
      value={userFeeling}
      onChange={(e) => setUserFeeling(e.target.value)}
      className="form-control mb-4"
    />
  );
};


export default TypingPlaceholderInput;
