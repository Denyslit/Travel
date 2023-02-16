const hamburger = document.querySelector(".hamburger"),
  navList = document.querySelector(".nav-list");
hamburger.addEventListener("click", () => {
  navList.classList.toggle("open");
});
const video = document.querySelector(".video"),
  button = document.querySelector(".video-control");
function playpausevideo() {
  video.paused
    ? ((button.innerHTML = "<i class='bx bx-pause' ></i>"), video.play())
    : ((button.innerHTML = "<i class='bx bx-play' ></i>"), video.pause());
}
button.addEventListener("click", playpausevideo);
const loader = document.querySelector(".loader");
window.addEventListener("load", () => {
  setTimeout(() => {
    loader.style.display = "none";
  }, 2e3);
});
const navigation = document.querySelector(".navigation"),
  header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  window.pageYOffset > 200
    ? (navigation.classList.add("fix"), (header.style.zIndex = "1000"))
    : navigation.classList.remove("fix");
});
const links = document.querySelectorAll(".nav-link");
Array.from(links).map((e) => {
  e.addEventListener("click", (e) => {
    e.preventDefault();
    const t = e.currentTarget.getAttribute("href").slice(1),
      o = document.getElementById(t),
      n = navigation.getBoundingClientRect().height;
    navigation.classList.contains("fix");
    let l = o.offsetTop - n;
    window.scrollTo({ left: 0, top: l }), navList.classList.remove("open");
  });
});
const scroll = ScrollReveal({ distance: "100px", duration: 2500, reset: !0 });
scroll.reveal(".content h1, .content .btn", { origin: "top", interval: 100 }),
  scroll.reveal(".about .col h1, .about .col p, .about .col .btn", {
    origin: "left",
    interval: 150,
  }),
  scroll.reveal(
    ".about .col:last-child,.contact .location,.more .col:last-child,.newsletter .form",
    { origin: "right" }
  ),
  scroll.reveal(".service img,.contact .title", { origin: "top" }),
  scroll.reveal(".service .col,.trip .row", { origin: "bottom" }),
  scroll.reveal(".trip .title,.more .col:first-child,.newsletter .col", {
    origin: "left",
  });
