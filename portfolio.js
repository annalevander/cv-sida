const extraProjects = [
  {
    name: "Banking App",
    description:
      "A simple banking application built in C# with support for accounts, transactions and balance management",
    html_url: null,
  },
];

async function fetchRepos() {
  const loading = document.getElementById("loading");
  const container = document.getElementById("projects-container");

  const response = await fetch(
    "https://api.github.com/users/annalevander/repos",
  );

  if (!response.ok) {
    loading.textContent = "Could not load projects.";
    return;
  }

  const data = await response.json();

  const allowedProjects = [
    "Biblioteket",
    "PyramidBuilder",
    "NumbersGame",
    "Restaurant",
  ];

  const filtered = data.filter((repo) => allowedProjects.includes(repo.name));

  const allProjects = [...filtered, ...extraProjects];

  loading.style.display = "none";

  allProjects.forEach((item) => {
    const article = document.createElement("article");

    const h2 = document.createElement("h2");
    h2.textContent = item.name;
    article.appendChild(h2);

    const description = document.createElement("p");
    description.textContent = item.description || "No descripton avalible.";
    article.appendChild(description);

    if (item.html_url) {
      const a = document.createElement("a");
      a.textContent = "Se projekt";
      a.href = item.html_url;

      article.appendChild(a);
    }

    container.appendChild(article);
  });
}

fetchRepos();
