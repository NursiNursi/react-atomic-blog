import { faker } from "@faker-js/faker";
import { useState } from "react";

function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}

function App() {
  const [posts, setposts] = useState(() =>
    Array.from({ length: 32 }, () => createRandomPost())
  );
  const [searchQuery, setSearchQuery] = useState("");

  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : posts;

  return (
    <section>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Main posts={searchedPosts} />
    </section>
  );
}

function Header({ searchQuery, setSearchQuery }) {
  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search posts..."
        />
        <button>Clear posts</button>
      </div>
    </header>
  );
}

function Main({ posts }) {
  return (
    <main>
      <FormAddPost />
      <Posts posts={posts} />
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

function Posts({ posts }) {
  return (
    <section>
      <List posts={posts} />
    </section>
  );
}

function List({ posts }) {
  return (
    <ul>
      {posts.map((post, i) => (
        <li key={i}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
}

export default App;
