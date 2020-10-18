import React from "react";
import Accordion from "./components/Accordian";

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React",
    content: "React isd a favourite JS libary among enginners for its speed",
  },
  {
    title: "How do you use REACT",
    CONTENT: "You use React by creating components",
  },
];

export default () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};
