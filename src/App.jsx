function Header() {
  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <input placeholder="Search posts..." />
        <button>Clear posts</button>
      </div>
    </header>
  );
}

function App() {
  return (
    <section>
      <Header />
    </section>
  );
}

export default App;
