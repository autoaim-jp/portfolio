(function () {
  const works = window.PORTFOLIO_WORKS || [];
  const useCases = window.PORTFOLIO_USE_CASES || [];
  const hobbies = window.PORTFOLIO_HOBBIES || [];
  const categoryOrder = [
    "AI・音声・知識化",
    "GitLab連携・開発運用",
    "文書・コンテンツ生成",
    "生活・行動管理",
    "Webサービス試作",
    "データ収集・自然言語処理",
    "ボット・通知・自動化",
    "インフラ・基盤",
    "アプリ・実験",
    "知識化"
  ];

  function createWorkCard(work) {
    const article = document.createElement("article");
    article.className = "work-card";

    if (work.category) {
      const category = document.createElement("p");
      category.className = "project-kicker";
      category.textContent = work.category;
      article.appendChild(category);
    }

    const title = document.createElement("h3");
    title.textContent = work.title;
    article.appendChild(title);

    const summary = document.createElement("p");
    summary.textContent = work.summary;
    article.appendChild(summary);

    if (work.tags && work.tags.length > 0) {
      article.appendChild(createTagList(work.tags));
    }

    return article;
  }

  function createTagList(tags) {
    const list = document.createElement("ul");
    list.className = "tag-list";
    list.setAttribute("aria-label", "タグ");

    tags.forEach((tag) => {
      const item = document.createElement("li");
      const link = document.createElement("a");
      link.href = `./search.html?tag=${encodeURIComponent(tag)}`;
      link.textContent = tag;
      item.appendChild(link);
      list.appendChild(item);
    });

    return list;
  }

  function createHobbyCard(hobby) {
    const article = document.createElement("article");
    article.className = "hobby-card";

    const image = document.createElement("img");
    image.src = hobby.image || "./assets/hobby-placeholder.png";
    image.alt = "";
    article.appendChild(image);

    const body = document.createElement("div");
    body.className = "hobby-card-body";

    const title = document.createElement("h3");
    title.textContent = hobby.title;
    body.appendChild(title);

    const summary = document.createElement("p");
    summary.textContent = hobby.summary;
    body.appendChild(summary);

    article.appendChild(body);
    return article;
  }

  function createUseCaseCard(useCase) {
    const article = document.createElement("article");
    article.className = "usecase-card";

    const kicker = document.createElement("p");
    kicker.className = "project-kicker";
    kicker.textContent = useCase.scene;
    article.appendChild(kicker);

    const title = document.createElement("h2");
    title.textContent = useCase.value;
    article.appendChild(title);

    const problem = document.createElement("p");
    problem.className = "usecase-problem";
    problem.textContent = useCase.problem;
    article.appendChild(problem);

    const details = document.createElement("dl");
    details.className = "usecase-detail";
    [
      ["入力", useCase.input],
      ["使うアプリ/機能", `${useCase.tool} / ${useCase.feature}`],
      ["やること", useCase.action]
    ].forEach(([label, value]) => {
      const term = document.createElement("dt");
      term.textContent = label;
      const description = document.createElement("dd");
      description.textContent = value;
      details.appendChild(term);
      details.appendChild(description);
    });

    article.appendChild(details);
    return article;
  }

  function renderFeatured() {
    const root = document.querySelector("[data-featured-works]");
    if (!root) return;

    works.filter((work) => work.featured).slice(0, 6).forEach((work) => {
      root.appendChild(createWorkCard(work));
    });
  }

  function renderFeaturedHobbies() {
    const root = document.querySelector("[data-featured-hobbies]");
    if (!root) return;

    hobbies.filter((hobby) => hobby.featured).slice(0, 4).forEach((hobby) => {
      root.appendChild(createHobbyCard(hobby));
    });
  }

  function renderHobbies() {
    const hobbyRoot = document.querySelector("[data-hobbies]");
    const challengeRoot = document.querySelector("[data-hobby-challenges]");
    if (!hobbyRoot && !challengeRoot) return;

    hobbies.forEach((hobby) => {
      if (hobby.group === "challenge" && challengeRoot) {
        challengeRoot.appendChild(createHobbyCard(hobby));
        return;
      }

      if (hobby.group !== "challenge" && hobbyRoot) {
        hobbyRoot.appendChild(createHobbyCard(hobby));
      }
    });
  }

  function renderUseCases() {
    const root = document.querySelector("[data-usecases]");
    if (!root) return;

    useCases.forEach((useCase) => {
      root.appendChild(createUseCaseCard(useCase));
    });
  }

  function renderCatalog() {
    const root = document.querySelector("[data-works-catalog]");
    if (!root) return;

    categoryOrder.forEach((category) => {
      const items = works.filter((work) => work.category === category);
      if (items.length === 0) return;

      const block = document.createElement("div");
      block.className = "category-block";

      const heading = document.createElement("div");
      heading.className = "section-heading compact";

      const eyebrow = document.createElement("p");
      eyebrow.className = "eyebrow";
      eyebrow.textContent = category;
      heading.appendChild(eyebrow);

      const h2 = document.createElement("h2");
      h2.textContent = items[0].categoryLead || category;
      heading.appendChild(h2);

      const grid = document.createElement("div");
      grid.className = "works-grid";
      items.forEach((work) => grid.appendChild(createWorkCard(work)));

      block.appendChild(heading);
      block.appendChild(grid);
      root.appendChild(block);
    });
  }

  function renderSearch() {
    const root = document.querySelector("[data-search-results]");
    if (!root) return;

    const params = new URLSearchParams(window.location.search);
    const tag = params.get("tag") || "";
    const title = document.querySelector("[data-search-title]");
    const lead = document.querySelector("[data-search-lead]");
    const normalizedTag = tag.toLowerCase();
    const results = tag
      ? works.filter((work) => work.tags.some((item) => item.toLowerCase() === normalizedTag))
      : works;

    if (title) {
      title.textContent = tag ? `「${tag}」の実績` : "実績を探す";
    }
    if (lead) {
      lead.textContent = tag
        ? `${results.length}件の実績が見つかりました。`
        : "タグをクリックすると、関連する実績を絞り込めます。";
    }

    if (results.length === 0) {
      const empty = document.createElement("p");
      empty.className = "empty-state";
      empty.textContent = "該当する実績はまだ登録されていません。";
      root.appendChild(empty);
      return;
    }

    results.forEach((work) => root.appendChild(createWorkCard(work)));
  }

  renderFeatured();
  renderUseCases();
  renderFeaturedHobbies();
  renderHobbies();
  renderCatalog();
  renderSearch();
})();
