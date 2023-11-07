function App() {
  return (
    <section>
      <Header />
      <Main />
    </section>
  );
}

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

function Main() {
  return (
    <main>
      <FormAddPost />
      <Posts />
    </main>
  );
}

function FormAddPost() {
  return (
    <form>
      <input placeholder="Post title" />
      <textarea placeholder="Post body" />
      <button>Add post</button>
    </form>
  );
}

function Posts() {
  return (
    <section>
      <List />
    </section>
  );
}

function List() {
  return (
    <ul>
      <li>
        <h3>Title</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum corrupti
          tempore aut vitae sed modi, debitis optio dolorem! Ipsum dolor ea cum
          placeat aliquam at libero culpa eius nostrum fugit?
        </p>
      </li>
    </ul>
  );
}

export default App;
