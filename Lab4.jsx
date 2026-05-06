// ===============================
// Week 4 Lab – React Multiple Components
// Student: Nour
// This lab reorganizes Lab 3 into smaller components
// ===============================

// -------------------------------
// Global Hacker News data
// (Must stay outside all components)
// -------------------------------
import React from "react";

const stories = [
  {
    objectID: 1,
    title: "React 18 Released",
    url: "https://react.dev",
    author: "Dan Abramov",
    points: 150,
    num_comments: 50,
  },
  {
    objectID: 2,
    title: "Vite Makes Frontend Faster",
    url: "https://vitejs.dev",
    author: "Evan You",
    points: 120,
    num_comments: 30,
  },
  {
    objectID: 3,
    title: "JavaScript Remains Popular",
    url: "https://developer.mozilla.org",
    author: "MDN",
    points: 90,
    num_comments: 20,
  },
];

// -------------------------------
// Header Component — concise body (no logic needed)
// -------------------------------
const Header = () => (
  <header>
    <h1>My Hacker News App</h1>
  </header>
);

// -------------------------------
// Search Component — block body (has logic inside)
// -------------------------------
const Search = () => {
  const handleChange = (e) => {
    console.log("Event object:", e);
    console.log("Typed value:", e.target.value);
  };

  return (
    <div>
      <label htmlFor="search">Search:</label>
      <input type="text" id="search" onChange={handleChange} />
    </div>
  );
};

// -------------------------------
// List Component — concise body inside map()
// -------------------------------
const List = () => (
  <div>
    <h2>Hacker News Stories</h2>
    {stories.map((story) => (
      <div key={story.objectID}>
        <h3>
          <a href={story.url} target="_blank" rel="noopener noreferrer">
            {story.title}
          </a>
        </h3>
        <p>Author: {story.author}</p>
        <p>Points: {story.points}</p>
        <p>Comments: {story.num_comments}</p>
      </div>
    ))}
  </div>
);

// -------------------------------
// App Component — concise body (only renders children)
// -------------------------------
const App = () => (
  <div>
    <Header />
    <Search />
    <List />
  </div>
);

export default App;

// ===================== Reflection =====================
// 1. When do we use concise body arrow functions?
//    When the function only returns a single expression (no extra logic).
//    Example: () => <div>Hello</div>

// 2. When do we use block body arrow functions?
//    When we need multiple lines, variables, or logic before returning.
//    Example: () => { const x = 1; return <div>{x}</div>; }

// 3. What does an event object contain?
//    e.target → the DOM element that triggered the event
//    e.target.value → the current value of the input field
//    e.type → the type of event (e.g. "change")