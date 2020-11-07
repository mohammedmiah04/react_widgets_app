import React, { useState } from "react";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Accordion from "./components/Accordian";
import Translate from "./components/translate.js";
import Route from "./components/route";
import Header from "./components/header.js";

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
    content: "You use React by creating components",
  },
];

const options = [
  {
    label: "The colour Red",
    value: "red",
  },
  {
    label: "The color green",
    value: "green",
  },
  {
    label: "A shade of Blue",
    value: "blue",
  },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a Color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};
