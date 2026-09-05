const root = document.documentElement;
const themeToggle = document.querySelector(".theme-toggle");
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");
const systemTheme = matchMedia("(prefers-color-scheme: dark)");

themeToggle?.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = nextTheme;
  localStorage.setItem("theme", nextTheme);
});

systemTheme.addEventListener?.("change", (event) => {
  if (localStorage.getItem("theme")) return;
  root.dataset.theme = event.matches ? "dark" : "light";
});

menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  navigation?.classList.toggle("is-open", !isOpen);
});

navigation?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle?.setAttribute("aria-expanded", "false");
    navigation.classList.remove("is-open");
  });
});

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.08 }
);

document.querySelectorAll(".reveal").forEach((section) => revealObserver.observe(section));

document.querySelector("#current-year").textContent = new Date().getFullYear();
