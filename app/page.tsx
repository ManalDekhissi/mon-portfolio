export default function Home() {
  return (
    <main className="p-8">
      <h1>Bienvenue sur mon Portfolio</h1>
      <nav>
        <ul>
          <li><a href="/about">À propos</a></li>
          <li><a href="/posts/article-1">Article 1</a></li>
          <li><a href="/posts/article-2">Article 2</a></li>
          <li><a href="/posts/article-3">Article 3</a></li>
        </ul>
      </nav>
    </main>
  );
}
