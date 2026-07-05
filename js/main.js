/* =====================================================================
   ИЛЬЯ СВЕШНИКОВ · ПОРТФОЛИО — данные сайта и движок
   ===================================================================== */
const SITE = {
  /* ── Профиль ── */
  name:     "Илья Свешников",
  role:     "Веб‑разработчик",
  location: "Россия",
  available: true,

  /* ── Ссылки ── */
  socials: {
    github:   "https://github.com/IlyaSveshnikov",
    linkedin: "",
    hh:       "",
    telegram: "https://t.me/pita_chok",
    email:    "ilya-svesh-1@yandex.ru",
    phone:    "+79093285797",
  },
  resumeUrl: "assets/resume.pdf",

  /* ── Образование ── */
  education: {
    org:    "МГУ им. Н. П. Огарёва",
    degree: "Высшее ИТ‑образование",
    years:  "2023 — 2027",
  },

  /* ── Цифры ── */
  stats: [
    { value: "15+", label: "проектов" },
    { value: "3",  label: "года с кодом" },
    { value: "100%", label: "под ключ" },
    { value: "AI",  label: "в каждом продукте" },
  ],

  /* ── Как я работаю ──────────────────────────────────────────── */
  process: [
    { title: "Бриф",        text: "Разбираю задачу, цели и аудиторию. Фиксируем результат, к которому идём." },
    { title: "Дизайн",      text: "Проектирую структуру и интерфейс: макет, типографика, анимации, атмосфера." },
    { title: "Разработка",  text: "Чистый код, адаптив, производительность. При необходимости — ИИ и интеграции." },
    { title: "Запуск",      text: "Сервер, домен, SSL, аналитика. Проверяю, оптимизирую, отдаю готовый продукт." },
    { title: "Поддержка",   text: "Правки, развитие, новые фичи. Остаюсь на связи после сдачи." },
  ],

  /* ── Навыки ── */
  skills: [
    { label: "Frontend",    level: "Уверенно",   items: ["HTML / CSS", "Tailwind", "JavaScript", "React", "Next.js"] },
    { label: "ИИ в продукте", level: "В проектах", items: ["Claude", "Чат‑боты", "Автоматизация", "Интеграции API"] },
    { label: "Данные / бэкенд", level: "В проектах", items: ["Python", "SQL"] },
    { label: "Инструменты", level: "Уверенно",   items: ["Git", "Сервер", "Домен / SSL"] },
  ],

  /* ── Категории проектов ── */
  categories: {
    landing: { label: "Лэндинг",        grad: ["#7c5cff", "#35e0c6"] },
    webapp:  { label: "Веб‑приложение", grad: ["#35e0c6", "#ccf24c"] },
    app:     { label: "Приложение",     grad: ["#ff7a59", "#7c5cff"] },
  },

  /* ── Фильтры (порядок кнопок) ───────────────────────────────── */
  filters: [
    { key: "all",     label: "Все" },
    { key: "landing", label: "Лэндинги" },
    { key: "webapp",  label: "Веб‑приложения" },
    { key: "app",     label: "Приложения" },
  ],

  /* ── Проекты ── */
  projects: [
    {
      title: "Школьная система", cat: "webapp",
      cover: "assets/school-dashboard.png",
      live: "https://school-system-opal-delta.vercel.app",
      repo: "https://github.com/IlyaSveshnikov/SchoolSystem",
      stack: ["Next.js", "React", "TypeScript", "PostgreSQL", "Tailwind", "shadcn/ui"],
      role: "Fullstack: проектирование, БД, бэкенд, фронтенд, деплой", year: "2026",
      problem: "Школе нужна единая система вместо разрозненных таблиц: ученики, учителя, классы, расписание, оценки и аналитика в одном месте.",
      solution: "Собрал фуллстек‑панель на Next.js 16 и React 19 с TypeScript и PostgreSQL: CRUD по всем сущностям, расписание, журнал оценок и дашборд с аналитикой. Интерфейс на Tailwind и shadcn/ui.",
      result: "Развёрнуто на Vercel, работает как единый инструмент управления. Полный цикл — от схемы БД до интерфейса и деплоя.",
      gallery: [],
    },
    {
      title: "Кровельная компания", cat: "landing",
      cover: "assets/steel-ridge.png",
      live: "https://ilyasveshnikov.github.io/steel-ridge/",
      repo: "https://github.com/IlyaSveshnikov/steel-ridge",
      stack: ["HTML", "CSS", "JavaScript", "SEO / JSON-LD", "Доступность"],
      role: "Дизайн, вёрстка, разработка", year: "2026",
      problem: "Кровельной компании нужен лендинг, который вызывает доверие и приводит заявки.",
      solution: "Одностраничный сайт на чистом HTML/CSS/JS без сборки: интерактивный калькулятор кровли, галерея работ, блоки услуг и отзывов, адаптив.",
      result: "Быстрый статический сайт на GitHub Pages — с семантикой, JSON‑LD и доступностью, готов к SEO.",
      gallery: [],
    },
    {
      title: "Магазин печенья", cat: "landing",
      cover: "assets/sweet-life.png",
      live: "https://ilyasveshnikov.github.io/sweet-life/",
      repo: "https://github.com/IlyaSveshnikov/sweet-life",
      stack: ["JavaScript", "CSS", "HTML", "LocalStorage", "PWA"],
      role: "Дизайн, вёрстка, разработка", year: "2026",
      problem: "Магазину сладостей нужна витрина с каталогом, корзиной и оформлением заказа — без тяжёлого стека.",
      solution: "Интернет‑магазин на ванильном JS: каталог с фильтрами, выезжающая корзина с промокодами, страницы товаров и оформление заказа. Состояние в localStorage, поддержка PWA.",
      result: "Полноценный магазин без сборки — работает как статика где угодно и ставится как PWA.",
      gallery: [],
    },
    {
      title: "Школа робототехники", cat: "landing",
      cover: "assets/robo-school.png",
      live: "https://ilyasveshnikov.github.io/robo-school/",
      repo: "https://github.com/IlyaSveshnikov/robo-school",
      stack: ["HTML", "CSS", "JavaScript", "Figma", "IntersectionObserver"],
      role: "Вёрстка и разработка по макету Figma", year: "2026",
      problem: "Школе робототехники нужен современный лендинг для набора на курсы повышения квалификации педагогов.",
      solution: "Адаптивный лендинг строго по макету Figma: чистый HTML/CSS/JS, сетки на Grid и Flexbox, плавные появления на IntersectionObserver.",
      result: "Лёгкий адаптивный сайт на GitHub Pages, точно повторяющий дизайн из Figma.",
      gallery: [],
    },

    {
      title: "Навигация по университету", cat: "app",
      cover: "assets/university-cover.png",
      live: "", repo: "https://github.com/IlyaSveshnikov/mrsu-map",
      stack: ["React Native", "Expo", "TypeScript", "SVG", "Offline-first"],
      role: "Дизайн и мобильная разработка (iOS/Android)", year: "2026",
      problem: "Студентам и абитуриентам сложно ориентироваться в корпусах и аудиториях большого вуза.",
      solution: "Кросс‑платформенное приложение на React Native + Expo: интерактивные поэтажные SVG‑планы с зумом и поиском аудитории по номеру. Работает офлайн.",
      result: "Готовое приложение под iOS и Android — навигация по корпусам МГУ им. Огарёва без интернета.",
      gallery: ["assets/university/nav_demo_1.PNG", "assets/university/nav_demo_2.PNG", "assets/university/floor.PNG", "assets/university/signs.PNG"],
    },

    {
      title: "Автомагазин", cat: "webapp",
      cover: "assets/car-shop.png",
      live: "https://autohub-1jyg.onrender.com",
      repo: "https://github.com/IlyaSveshnikov/car-shop",
      stack: ["React", "NestJS", "GraphQL", "TypeScript", "MobX", "Vite"],
      role: "Fullstack: фронтенд, бэкенд, GraphQL API", year: "2026",
      problem: "Автосалону нужен онлайн‑каталог с фильтрами, корзиной и оформлением заказа.",
      solution: "Fullstack‑магазин: React (Vite, MobX, Apollo Client) и бэкенд на NestJS с GraphQL. Каталог с фильтрами, избранное, корзина и оформление заказа.",
      result: "Живое демо на Render — SPA с реальным GraphQL API, покрыто модульными тестами (Vitest).",
      gallery: [],
    },
  ],
};


/* ===================================================================== */
(() => {
  "use strict";

  const RM   = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const FINE = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const $  = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  /* Иконки (inline SVG, наследуют currentColor) */
  const ICON = {
    github:  '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.57.1.78-.25.78-.55v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.8 1.18 1.82 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.13v3.16c0 .31.2.66.79.55A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z"/></svg>',
    telegram:'<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M21.9 4.3 18.8 19c-.2 1-.9 1.3-1.8.8l-4.9-3.6-2.3 2.3c-.3.3-.5.5-1 .5l.3-5 9.1-8.2c.4-.4-.1-.6-.6-.2L6.5 13.3l-4.8-1.5c-1-.3-1-1 .2-1.5L20.6 2.9c.9-.3 1.6.2 1.3 1.4Z"/></svg>',
    linkedin:'<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0Z"/></svg>',
    hh:      '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M4 3h3v6.2c.9-1 2-1.6 3.4-1.6 2.6 0 4 1.7 4 4.5V21h-3v-6.4c0-1.6-.7-2.4-2-2.4-1.5 0-2.4 1-2.4 2.8V21H4V3Zm12 0h3v6.2c.9-1 2-1.6 3.4-1.6V11c-1.7 0-2.9 1-2.9 2.9V21h-3.5V3Z"/></svg>',
    email:   '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    phone:   '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"/></svg>',
    resume:  '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12m0 0 4-4m-4 4-4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/></svg>',
    ext:     '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M17 7H8m9 0v9"/></svg>',
  };
  const socialMeta = {
    github:   { label: "GitHub",   value: (v) => v.replace(/^https?:\/\/(www\.)?github\.com\//, "@").replace(/\/$/, "") },
    linkedin: { label: "LinkedIn", value: () => "профиль" },
    hh:       { label: "hh.ru",    value: () => "резюме" },
    telegram: { label: "Telegram", value: (v) => "@" + v.replace(/^https?:\/\/t\.me\//, "").replace(/\/$/, "") },
    email:    { label: "Email",    value: (v) => v },
    phone:    { label: "Телефон",  value: (v) => v },
  };

  /* Страховка: если что-то упадёт — всё равно показать контент */
  const failsafe = setTimeout(revealEverything, 4000);
  function revealEverything() {
    $$("[data-reveal]").forEach((el) => el.classList.add("is-visible"));
    document.body.classList.add("loaded");
    const p = $("#preloader");
    if (p) p.classList.add("is-done");
  }

  document.addEventListener("DOMContentLoaded", () => {
    try {
      injectJsonLd();
      renderHero();
      renderStats();
      renderAboutEdu();
      renderSkills();
      renderProcess();
      renderWorks();
      renderContacts();
      renderFooter();
      initNav();
      initClockAndYear();
      initCopy();
      initScrollProgress();
      initModal();
      if (FINE) { initCursor(); initMagnetic(); }
      if (FINE && !RM) initHeroParallax();
      if (!RM) initBackground(); else document.body.classList.add("no-webgl");
    } catch (e) {
      console.error("init error:", e);
      revealEverything();
    }
    initPreloader();
  });

  /* =====================================================================
     JSON-LD (Person) — для поисковиков; единый источник данных = SITE
     ===================================================================== */
  function injectJsonLd() {
    const sameAs = Object.entries(SITE.socials)
      .filter(([k, v]) => v && ["github", "linkedin", "hh", "telegram"].includes(k));
    const data = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: SITE.name,
      jobTitle: SITE.role,
      email: SITE.socials.email ? "mailto:" + SITE.socials.email : undefined,
      telephone: SITE.socials.phone || undefined,
      address: SITE.location || undefined,
      sameAs: sameAs.map(([, v]) => v),
    };
    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.textContent = JSON.stringify(data);
    document.head.appendChild(s);
  }

  /* =====================================================================
     ГЕРОЙ: статус, быстрые ссылки (GitHub / Резюме)
     ===================================================================== */
  function renderHero() {
    const status = $("#heroStatus");
    if (status) status.hidden = !SITE.available;

    const box = $("#heroLinks");
    if (!box) return;
    const links = [];
    if (SITE.socials.github)
      links.push(`<a class="hero__link" href="${esc(SITE.socials.github)}" target="_blank" rel="noopener" data-cursor="link">${ICON.github}<span>GitHub</span></a>`);
    if (SITE.resumeUrl)
      links.push(`<a class="hero__link" href="${esc(SITE.resumeUrl)}" download data-cursor="link">${ICON.resume}<span>Резюме</span></a>`);
    box.innerHTML = links.join("");
  }

  /* =====================================================================
     ЦИФРЫ (stats) + count-up
     ===================================================================== */
  function renderStats() {
    const box = $("#statsGrid");
    if (!box) return;
    box.innerHTML = SITE.stats.map((s, i) => `
      <div class="stat" data-reveal style="--d:${i * 0.07}s">
        <span class="stat__value" data-count="${esc(s.value)}">${esc(s.value)}</span>
        <span class="stat__label">${esc(s.label)}</span>
      </div>`).join("");

    if (RM || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver((ents, obs) => {
      ents.forEach((en) => {
        if (!en.isIntersecting) return;
        countUp(en.target, en.target.dataset.count);
        obs.unobserve(en.target);
      });
    }, { threshold: 0.6 });
    $$(".stat__value", box).forEach((el) => io.observe(el));
  }
  function countUp(el, raw) {
    const m = String(raw).match(/^(\D*)(\d+)(.*)$/);
    if (!m) return;
    const pre = m[1], target = +m[2], suf = m[3];
    const dur = 1100, t0 = performance.now();
    (function step(now) {
      const p = Math.min((now - t0) / dur, 1);
      el.textContent = pre + Math.round((1 - Math.pow(1 - p, 3)) * target) + suf;
      if (p < 1) requestAnimationFrame(step);
    })(t0);
  }

  /* =====================================================================
     ОБО МНЕ: строка образования
     ===================================================================== */
  function renderAboutEdu() {
    const box = $("#aboutEdu");
    if (!box) return;
    const e = SITE.education || {};
    const parts = [e.degree, e.org, e.years].filter(Boolean);
    if (!parts.length) { box.hidden = true; return; }
    box.innerHTML = `<span class="about__edu-k">Образование</span><span>${parts.map(esc).join(" · ")}</span>`;
  }

  /* =====================================================================
     НАВЫКИ (с уровнем)
     ===================================================================== */
  function renderSkills() {
    const root = $("#skillsGroups");
    if (!root) return;
    root.innerHTML = SITE.skills.map((g, i) => `
      <div class="skill-group" data-reveal style="--d:${i * 0.06}s">
        <div class="skill-group__label">${esc(g.label)}${g.level ? `<b>${esc(g.level)}</b>` : ""}</div>
        <div class="skill-tags">
          ${g.items.map((s) => `<span class="skill-tag" data-cursor="mark"><span>${esc(s)}</span></span>`).join("")}
        </div>
      </div>`).join("");

    if (FINE) bindSpotlight($$(".skill-tag", root));
  }

  /* =====================================================================
     ПРОЦЕСС
     ===================================================================== */
  function renderProcess() {
    const box = $("#processGrid");
    if (!box) return;
    box.innerHTML = SITE.process.map((p, i) => `
      <article class="step" data-reveal style="--d:${i * 0.06}s" data-cursor="tilt">
        <span class="step__num">${String(i + 1).padStart(2, "0")}</span>
        <h3 class="step__title">${esc(p.title)}</h3>
        <p class="step__text">${esc(p.text)}</p>
      </article>`).join("");
  }

  /* =====================================================================
     РАБОТЫ: карточки + фильтры + кейс-модалка
     ===================================================================== */
  function renderWorks() {
    const grid = $("#worksGrid");
    const filtersBox = $("#worksFilters");
    if (!grid) return;
    const total = SITE.projects.length;

    grid.innerHTML = SITE.projects.map((p, i) => {
      const meta = SITE.categories[p.cat] || { label: p.cat, grad: ["#7c5cff", "#35e0c6"] };
      const n = String(i + 1).padStart(2, "0");
      const letter = (p.title.trim()[0] || "✳").toUpperCase();
      const hasCase = !!(p.problem || p.solution || p.result || (p.gallery && p.gallery.length) || p.role);

      const media = p.cover
        ? `<img src="${esc(p.cover)}" alt="${esc(p.title)}" loading="lazy" decoding="async" />`
        : `<div class="work__ph"><span class="work__ph-mark">${esc(letter)}</span></div>${(p.live || p.repo) ? "" : `<span class="work__soon">превью скоро</span>`}`;

      const line = p.result || p.solution || "Описание проекта появится здесь…";
      const lineCls = (p.result || p.solution) ? "work__desc" : "work__desc is-empty";

      const stack = (p.stack && p.stack.length)
        ? p.stack.slice(0, 4).map((t) => `<span class="chip">${esc(t)}</span>`).join("")
        : `<span class="chip chip--muted">${p.year ? esc(p.year) : "скоро"}</span>`;

      const btns = [];
      if (hasCase) btns.push(`<button class="work__btn work__btn--case" data-case="${i}" data-cursor="link">Подробнее</button>`);
      if (p.live)  btns.push(`<a class="work__btn" href="${esc(p.live)}" target="_blank" rel="noopener" data-cursor="link">Демо ${ICON.ext}</a>`);
      if (p.repo)  btns.push(`<a class="work__btn work__btn--ghost" href="${esc(p.repo)}" target="_blank" rel="noopener" data-cursor="link">${ICON.github}Код</a>`);
      if (!btns.length) btns.push(`<span class="work__btn is-disabled">в разработке</span>`);

      return `
      <article class="work" data-cat="${esc(p.cat)}" data-reveal data-cursor="tilt" style="--d:${(i % 2) * 0.08}s">
        <div class="work__media" style="background:linear-gradient(135deg, ${meta.grad[0]}, ${meta.grad[1]});">
          ${media}<div class="work__spot"></div>
        </div>
        <div class="work__body">
          <div class="work__top"><span class="work__cat">${esc(meta.label)}</span><span class="work__num">${n} / ${String(total).padStart(2, "0")}</span></div>
          <h3 class="work__title">${esc(p.title)}</h3>
          <p class="${lineCls}">${esc(line)}</p>
          <div class="work__stack">${stack}</div>
          <div class="work__foot">${btns.join("")}</div>
        </div>
      </article>`;
    }).join("");

    // Фильтры
    if (filtersBox) {
      const count = (key) => key === "all" ? total : SITE.projects.filter((p) => p.cat === key).length;
      filtersBox.innerHTML = SITE.filters
        .filter((f) => f.key === "all" || count(f.key) > 0)
        .map((f, i) => `<button class="filter${i === 0 ? " is-active" : ""}" data-filter="${esc(f.key)}" data-cursor="link">${esc(f.label)}<span>${count(f.key)}</span></button>`)
        .join("");
      $$(".filter", filtersBox).forEach((btn) =>
        btn.addEventListener("click", () => {
          $$(".filter", filtersBox).forEach((b) => b.classList.remove("is-active"));
          btn.classList.add("is-active");
          applyFilter(btn.dataset.filter);
        }));
    }

    if (FINE) bindTilt($$(".work", grid));

    // Открытие кейса
    $$(".work__btn--case", grid).forEach((btn) =>
      btn.addEventListener("click", () => openCase(+btn.dataset.case, btn)));

    function applyFilter(key) {
      $$(".work", grid).forEach((card) => {
        const match = key === "all" || card.dataset.cat === key;
        if (match) { card.classList.remove("is-hidden"); void card.offsetWidth; card.classList.remove("filtering"); }
        else { card.classList.add("filtering"); setTimeout(() => { if (card.classList.contains("filtering")) card.classList.add("is-hidden"); }, 450); }
      });
    }
  }

  /* Подсветка-прожектор, следующая за курсором */
  function bindSpotlight(els) {
    els.forEach((el) => el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", (e.clientX - r.left) + "px");
      el.style.setProperty("--my", (e.clientY - r.top) + "px");
    }));
  }

  /* =====================================================================
     КЕЙС-МОДАЛКА (доступная: focus-trap, Esc, восстановление фокуса)
     ===================================================================== */
  let lastFocused = null;
  function initModal() {
    const modal = $("#caseModal");
    if (!modal) return;
    $$("[data-close]", modal).forEach((el) => el.addEventListener("click", closeCase));
    modal.addEventListener("keydown", (e) => {
      if (e.key === "Escape") { closeCase(); return; }
      if (e.key !== "Tab") return;
      const f = $$('a[href],button:not([disabled]),[tabindex]:not([tabindex="-1"])', modal).filter((n) => n.offsetParent !== null);
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    });
  }
  function openCase(i, trigger) {
    const modal = $("#caseModal");
    const body = $("#caseBody");
    const p = SITE.projects[i];
    if (!modal || !body || !p) return;
    const meta = SITE.categories[p.cat] || { label: p.cat };
    lastFocused = trigger || document.activeElement;

    const chips = (p.stack || []).map((t) => `<span class="chip">${esc(t)}</span>`).join("");
    const block = (title, text) => text ? `<div class="case__block"><h4>${title}</h4><p>${esc(text)}</p></div>` : "";
    const links = [];
    if (p.live) links.push(`<a class="btn btn--primary" href="${esc(p.live)}" target="_blank" rel="noopener">Открыть демо ${ICON.ext}</a>`);
    if (p.repo) links.push(`<a class="btn btn--ghost" href="${esc(p.repo)}" target="_blank" rel="noopener">${ICON.github}<span>Смотреть код</span></a>`);
    const cover = p.cover ? `<img class="case__cover" src="${esc(p.cover)}" alt="${esc(p.title)}" loading="lazy" />` : "";
    const gallery = (p.gallery && p.gallery.length)
      ? `<div class="case__gallery">${p.gallery.map((g) => `<img src="${esc(g)}" alt="${esc(p.title)}" loading="lazy" />`).join("")}</div>` : "";

    body.innerHTML = `
      <span class="case__cat">${esc(meta.label)}${p.year ? " · " + esc(p.year) : ""}</span>
      <h2 id="caseTitle" class="case__title">${esc(p.title)}</h2>
      ${chips ? `<div class="case__stack">${chips}</div>` : ""}
      ${cover}
      <div class="case__grid">
        ${block("Задача", p.problem)}
        ${block("Что сделал", p.solution)}
        ${block("Моя роль", p.role)}
        ${block("Результат", p.result)}
      </div>
      ${gallery}
      ${links.length ? `<div class="case__links">${links.join("")}</div>` : ""}
    `;
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    const close = $(".modal__close", modal);
    if (close) close.focus();
  }
  function closeCase() {
    const modal = $("#caseModal");
    if (!modal || modal.getAttribute("aria-hidden") === "true") return;
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    if (lastFocused && lastFocused.focus) lastFocused.focus();
  }

  /* =====================================================================
     КОНТАКТЫ (рендер из SITE.socials)
     ===================================================================== */
  function renderContacts() {
    const list = $("#contactList");
    if (list) {
      const order = ["email", "telegram", "github", "linkedin", "hh", "phone"];
      const copyable = new Set(["email", "phone"]);
      list.innerHTML = order.filter((k) => SITE.socials[k]).map((k) => {
        const v = SITE.socials[k], m = socialMeta[k];
        const shown = m.value(v);
        return copyable.has(k)
          ? `<button class="contact__row" data-copy="${esc(v)}" data-reveal data-cursor="copy">
               <span class="contact__k">${m.label}</span><span class="contact__v">${esc(shown)}</span><span class="contact__act">копировать</span></button>`
          : `<a class="contact__row" href="${esc(k === "email" ? "mailto:" + v : v)}" ${/^https?:/.test(v) ? 'target="_blank" rel="noopener"' : ""} data-reveal data-cursor="link">
               <span class="contact__k">${m.label}</span><span class="contact__v">${esc(shown)}</span><span class="contact__act">открыть ↗</span></a>`;
      }).join("");
    }

    // Кнопки CTA (написать + резюме)
    const cta = $("#contactCta");
    if (cta) {
      const parts = [];
      if (SITE.socials.email)
        parts.push(`<a href="mailto:${esc(SITE.socials.email)}" class="contact__big-cta" data-cursor="link"><span>Обсудить проект</span>
          <svg viewBox="0 0 24 24" width="26" height="26" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></a>`);
      if (SITE.resumeUrl)
        parts.push(`<a href="${esc(SITE.resumeUrl)}" download class="btn btn--ghost contact__resume" data-cursor="link">${ICON.resume}<span>Скачать резюме</span></a>`);
      cta.innerHTML = parts.join("");
    }
  }

  /* =====================================================================
     ПОДВАЛ: соцссылки-иконки
     ===================================================================== */
  function renderFooter() {
    const box = $("#footerSocials");
    if (!box) return;
    const order = ["github", "telegram", "linkedin", "hh", "email"];
    box.innerHTML = order.filter((k) => SITE.socials[k]).map((k) => {
      const v = SITE.socials[k];
      const href = k === "email" ? "mailto:" + v : v;
      return `<a class="footer__social" href="${esc(href)}" ${/^https?:/.test(v) ? 'target="_blank" rel="noopener"' : ""} aria-label="${socialMeta[k].label}" data-cursor="mark">${ICON[k]}</a>`;
    }).join("");
  }

  /* =====================================================================
     ПРЕЛОАДЕР
     ===================================================================== */
  function initPreloader() {
    const pre = $("#preloader"), num = $("#preloaderCount"), bar = $("#preloaderBar");
    if (!pre) return;
    const dur = RM ? 200 : 1300, start = performance.now();
    (function step(now) {
      const t = Math.min((now - start) / dur, 1);
      const val = Math.round((1 - Math.pow(1 - t, 3)) * 100);
      if (num) num.textContent = val;
      if (bar) bar.style.width = val + "%";
      if (t < 1) requestAnimationFrame(step);
      else { clearTimeout(failsafe); pre.classList.add("is-done"); document.body.classList.add("loaded"); initReveal(); }
    })(start);
  }

  /* =====================================================================
     ПОЯВЛЕНИЕ ПРИ ПРОКРУТКЕ
     ===================================================================== */
  function initReveal() {
    const items = $$("[data-reveal]");
    if (!("IntersectionObserver" in window)) { items.forEach((el) => el.classList.add("is-visible")); return; }
    const io = new IntersectionObserver((ents, obs) => {
      ents.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("is-visible"); obs.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    items.forEach((el) => io.observe(el));
  }

  /* =====================================================================
     НАВИГАЦИЯ
     ===================================================================== */
  function initNav() {
    const nav = $("#nav"), burger = $("#navBurger");
    let last = 0;
    window.addEventListener("scroll", () => {
      const y = window.scrollY;
      nav.classList.toggle("is-scrolled", y > 40);
      if (!document.body.classList.contains("menu-open")) nav.classList.toggle("is-hidden", y > last && y > 400);
      last = y;
    }, { passive: true });
    if (burger) burger.addEventListener("click", () => {
      const open = document.body.classList.toggle("menu-open");
      burger.setAttribute("aria-expanded", String(open));
    });
    $$(".mobile-menu__link").forEach((a) => a.addEventListener("click", () => {
      document.body.classList.remove("menu-open");
      if (burger) burger.setAttribute("aria-expanded", "false");
    }));
  }

  /* =====================================================================
     ЧАСЫ + ГОД
     ===================================================================== */
  function initClockAndYear() {
    const clock = $("#footerClock"), year = $("#year");
    if (year) year.textContent = new Date().getFullYear();
    if (!clock) return;
    const p = (n) => String(n).padStart(2, "0");
    const tick = () => { const d = new Date(); clock.textContent = `${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}`; };
    tick(); setInterval(tick, 1000);
  }

  /* =====================================================================
     КОПИРОВАНИЕ + ТОСТ
     ===================================================================== */
  function initCopy() {
    const toast = $("#toast");
    const show = (msg) => {
      if (!toast) return;
      toast.textContent = msg; toast.classList.add("is-show");
      clearTimeout(show._t); show._t = setTimeout(() => toast.classList.remove("is-show"), 2000);
    };
    // делегирование — работает и для карточек, отрисованных из JS
    document.addEventListener("click", async (e) => {
      const el = e.target.closest("[data-copy]");
      if (!el) return;
      const val = el.dataset.copy;
      try { await navigator.clipboard.writeText(val); show("Скопировано ✳ " + val); }
      catch { show(val); }
    });
  }

  /* =====================================================================
     ПРОГРЕСС ПРОКРУТКИ
     ===================================================================== */
  function initScrollProgress() {
    const bar = $("#scrollProgress");
    if (!bar) return;
    const upd = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + "%";
    };
    upd();
    window.addEventListener("scroll", upd, { passive: true });
    window.addEventListener("resize", upd);
  }

  /* =====================================================================
     КАСТОМНЫЙ КУРСОР
     ===================================================================== */
  function initCursor() {
    document.body.classList.add("has-cursor");
    const dot = $("#cursorDot"), ring = $("#cursorRing"), label = $("#cursorLabel");
    if (!dot || !ring) return;
    let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my;
    window.addEventListener("pointermove", (e) => {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
    });
    (function loop() {
      rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      requestAnimationFrame(loop);
    })();

    const LABELS = { copy: "copy" };
    // делегирование наведения (охватывает элементы из JS-рендера)
    document.addEventListener("pointerover", (e) => {
      const el = e.target.closest("[data-cursor]");
      if (!el) return;
      document.body.classList.add("cursor-hover");
      const t = el.getAttribute("data-cursor");
      if (LABELS[t]) { label.textContent = LABELS[t]; document.body.classList.add("cursor-label"); }
    });
    document.addEventListener("pointerout", (e) => {
      const from = e.target.closest("[data-cursor]");
      if (!from) return;
      // не сбрасываем, пока курсор остаётся внутри того же элемента (без мерцания на детях)
      const to = e.relatedTarget && e.relatedTarget.closest ? e.relatedTarget.closest("[data-cursor]") : null;
      if (to === from) return;
      document.body.classList.remove("cursor-hover", "cursor-label");
    });
    document.addEventListener("pointerdown", () => ring.style.scale = "0.85");
    document.addEventListener("pointerup", () => ring.style.scale = "1");
  }

  /* =====================================================================
     МАГНИТНЫЕ КНОПКИ
     ===================================================================== */
  function initMagnetic() {
    const bind = (el, strength) => {
      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect();
        el.style.transform = `translate(${(e.clientX - (r.left + r.width / 2)) * strength}px, ${(e.clientY - (r.top + r.height / 2)) * strength}px)`;
      });
      el.addEventListener("pointerleave", () => { el.style.transform = ""; });
    };
    $$(".btn, .nav__cta").forEach((el) => bind(el, 0.3));
    $$(".contact__big-cta").forEach((el) => bind(el, 0.18));
  }

  /* =====================================================================
     3D-НАКЛОН КАРТОЧЕК + подсветка за курсором
     ===================================================================== */
  function bindTilt(els) {
    els.forEach((el) => {
      let reset;
      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect();
        el.style.setProperty("--mx", (e.clientX - r.left) + "px");
        el.style.setProperty("--my", (e.clientY - r.top) + "px");
        if (RM) return;
        clearTimeout(reset);
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        el.style.transition = "transform .12s ease-out";
        el.style.transform = `perspective(900px) rotateX(${(-py * 5).toFixed(2)}deg) rotateY(${(px * 5).toFixed(2)}deg) translateY(-5px)`;
      });
      el.addEventListener("pointerleave", () => {
        if (RM) return;
        el.style.transition = "transform .5s var(--ease)";
        el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
        reset = setTimeout(() => { el.style.transform = ""; el.style.transition = ""; }, 520);
      });
    });
  }

  /* =====================================================================
     ПАРАЛЛАКС ГЕРОЯ ПО МЫШИ
     ===================================================================== */
  function initHeroParallax() {
    const hero = $("#hero");
    if (!hero) return;
    const layers = [
      [$(".hero__title", hero), 16, 10],
      [$(".hero__status", hero), 24, 14],
      [$(".hero__lead", hero), 9, 6],
    ].filter(([el]) => el);
    let tx = 0, ty = 0, x = 0, y = 0, running = false;
    const ready = (el) => !(el.hasAttribute("data-reveal") && !el.classList.contains("is-visible"));

    hero.addEventListener("pointermove", (e) => {
      tx = e.clientX / innerWidth - 0.5;
      ty = e.clientY / innerHeight - 0.5;
      if (!running) { running = true; requestAnimationFrame(loop); }
    });
    hero.addEventListener("pointerleave", () => { tx = 0; ty = 0; });

    function loop() {
      x += (tx - x) * 0.08; y += (ty - y) * 0.08;
      layers.forEach(([el, ax, ay]) => { if (ready(el)) el.style.transform = `translate(${(x * ax).toFixed(2)}px, ${(y * ay).toFixed(2)}px)`; });
      if (tx === 0 && ty === 0 && Math.abs(x) < 0.001 && Math.abs(y) < 0.001) {
        layers.forEach(([el]) => { if (ready(el)) el.style.transform = ""; });
        running = false; return;
      }
      requestAnimationFrame(loop);
    }
  }

  /* =====================================================================
     ФОН: WebGL — «аврора» (domain-warped fbm)
     ===================================================================== */
  function initBackground() {
    const canvas = $("#bgCanvas");
    if (!canvas) return;
    const gl = canvas.getContext("webgl", { antialias: false, alpha: false, powerPreference: "low-power" }) || canvas.getContext("experimental-webgl");
    if (!gl) { document.body.classList.add("no-webgl"); return; }

    const vs = `attribute vec2 p; void main(){ gl_Position = vec4(p, 0.0, 1.0); }`;
    const fs = `
      precision highp float;
      uniform float u_time; uniform vec2 u_res; uniform vec2 u_mouse;
      vec2 hash(vec2 p){ p = vec2(dot(p,vec2(127.1,311.7)), dot(p,vec2(269.5,183.3))); return -1.0 + 2.0*fract(sin(p)*43758.5453123); }
      float noise(in vec2 p){
        const float K1 = 0.366025404; const float K2 = 0.211324865;
        vec2 i = floor(p + (p.x+p.y)*K1); vec2 a = p - i + (i.x+i.y)*K2;
        float m = step(a.y, a.x); vec2 o = vec2(m, 1.0-m); vec2 b = a - o + K2; vec2 c = a - 1.0 + 2.0*K2;
        vec3 h = max(0.5 - vec3(dot(a,a), dot(b,b), dot(c,c)), 0.0);
        vec3 n = h*h*h*h*vec3(dot(a,hash(i+0.0)), dot(b,hash(i+o)), dot(c,hash(i+1.0)));
        return dot(n, vec3(70.0));
      }
      float fbm(vec2 p){ float v=0.0,a=0.5; mat2 m=mat2(1.6,1.2,-1.2,1.6); for(int i=0;i<5;i++){ v+=a*noise(p); p=m*p; a*=0.5; } return v; }
      void main(){
        vec2 uv = gl_FragCoord.xy / u_res.xy;
        vec2 p = (gl_FragCoord.xy*2.0 - u_res.xy) / min(u_res.x, u_res.y);
        float t = u_time * 0.045;
        vec2 q = vec2(fbm(p + t), fbm(p + vec2(5.2,1.3) - t));
        vec2 r = vec2(fbm(p + 1.5*q + vec2(1.7,9.2) + 0.4*t), fbm(p + 1.5*q + vec2(8.3,2.8)));
        float f = fbm(p + 1.4*r + 0.25*u_mouse);
        vec3 base=vec3(0.027,0.027,0.039), violet=vec3(0.29,0.16,0.62), teal=vec3(0.08,0.50,0.46), lime=vec3(0.62,0.78,0.20);
        vec3 col = mix(base, violet, clamp(f*f*2.2,0.0,1.0));
        col = mix(col, teal, clamp(length(q),0.0,1.0));
        col = mix(col, lime, clamp(r.x*0.5,0.0,1.0)*0.3);
        col *= 0.62 + 0.12*f; col *= 1.0 - 0.42*length(uv-0.5);
        gl_FragColor = vec4(max(col,0.0), 1.0);
      }`;

    const prog = makeProgram(gl, vs, fs);
    if (!prog) { document.body.classList.add("no-webgl"); return; }
    gl.useProgram(prog);
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, -1,1, 1,-1, 1,1]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, "p");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    const uTime = gl.getUniformLocation(prog, "u_time"), uRes = gl.getUniformLocation(prog, "u_res"), uMouse = gl.getUniformLocation(prog, "u_mouse");
    let mouse = [0, 0], tmouse = [0, 0];
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

    function resize() {
      const w = Math.floor(canvas.clientWidth * dpr), h = Math.floor(canvas.clientHeight * dpr);
      if (canvas.width !== w || canvas.height !== h) { canvas.width = w; canvas.height = h; gl.viewport(0, 0, w, h); }
      gl.uniform2f(uRes, canvas.width, canvas.height);
    }
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", (e) => { tmouse = [(e.clientX / innerWidth) * 2 - 1, (e.clientY / innerHeight) * 2 - 1]; });

    let running = true;
    document.addEventListener("visibilitychange", () => { running = !document.hidden; if (running) requestAnimationFrame(frame); });
    const start = performance.now();
    resize();
    function frame(now) {
      if (!running) return;
      resize();
      mouse[0] += (tmouse[0] - mouse[0]) * 0.03; mouse[1] += (tmouse[1] - mouse[1]) * 0.03;
      gl.uniform1f(uTime, (now - start) / 1000);
      gl.uniform2f(uMouse, mouse[0], -mouse[1]);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }
  function makeProgram(gl, vsSrc, fsSrc) {
    const compile = (type, src) => {
      const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) { console.warn("shader:", gl.getShaderInfoLog(s)); return null; }
      return s;
    };
    const v = compile(gl.VERTEX_SHADER, vsSrc), f = compile(gl.FRAGMENT_SHADER, fsSrc);
    if (!v || !f) return null;
    const p = gl.createProgram(); gl.attachShader(p, v); gl.attachShader(p, f); gl.linkProgram(p);
    if (!gl.getProgramParameter(p, gl.LINK_STATUS)) { console.warn("link:", gl.getProgramInfoLog(p)); return null; }
    return p;
  }
})();
