// ===============================
// Week 4 Lab – React Multiple Components
// Student: Nour
// This lab reorganizes Lab 3 into smaller components
// ===============================

// -------------------------------
// Global Hacker News data
// (Must stay outside all components)
// -------------------------------
const stories = [
  {
    objectID: 1,
    title: "React 18 Released",
    url: "https://react.dev",
    author: "Dan Abramov",
    points: 150,
    num_comments: 50
  },
  {
    objectID: 2,
    title: "Vite Makes Frontend Faster",
    url: "https://vitejs.dev",
    author: "Evan You",
    points: 120,
    num_comments: 30
  },
  {
    objectID: 3,
    title: "JavaScript Remains Popular",
    url: "https://developer.mozilla.org",
    author: "MDN",
    points: 90,
    num_comments: 20
  }
];

// -------------------------------
// Header Component
// -------------------------------
function Header() {
  return (
    <header>
      <h1>My Hacker News App</h1>
    </header>
  );
}

// -------------------------------
// Search Component
// -------------------------------
function Search() {
  return (
    <div>
      <label htmlFor="search">Search:</label>
      <input type="text" id="search" />
    </div>
  );
}

// -------------------------------
// List Component
// Responsible for rendering stories
// -------------------------------
function List() {
  return (
    <div>
      <h2>Hacker News Stories</h2>

      {stories.map((story) => (
        <div key={story.objectID}>
          <h3>
            <a
              href={story.url}
              target="_blank"
              rel="noopener noreferrer"
            >
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
}

// -------------------------------
// App Component
// Orchestrates the application
// -------------------------------
function App() {
  return (
    <div>
      <Header />
      <Search />
      <List />
    </div>
  );
}

export default App;

// ===================== Reflection =====================
// What does App do now?
// App organizes and renders the main components of the application.

// What does List do?
// List is responsible for rendering the list of stories using map().

// What does Search do?
// Search displays the search input UI.

// Why is this structure cleaner than before?
// Because the code is split into smaller components with clear responsibilities.