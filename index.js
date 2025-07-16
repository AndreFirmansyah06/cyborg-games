function toggleMenu() {
  const nav = document.getElementById("responsive-navbar");
  if (nav.classList.contains("max-h-0")) {
    nav.classList.remove("max-h-0");
    nav.classList.add("max-h-[400px]");
    nav.classList.remove("opacity-0");
    nav.classList.add("opacity-100");
  } else {
    nav.classList.remove("max-h-[400px]");
    nav.classList.add("max-h-0");
    nav.classList.remove("opacity-100");
    nav.classList.add("opacity-0");
  }
}

function hideMenu() {
  const nav = document.getElementById("responsive-navbar");
  nav.classList.remove("show");
}

function toggleSearch() {
  const nav = document.getElementById("responsiveSearch");
  if (nav.classList.contains("w-0")) {
    nav.classList.remove("w-0");
    nav.classList.add("w-full");
    nav.classList.remove("opacity-0");
    nav.classList.add("opacity-100");
  } else {
    nav.classList.remove("w-full");
    nav.classList.add("max-w-0");
    nav.classList.remove("opacity-100");
    nav.classList.add("opacity-0");
  }
}

function toggleChevron(el) {
  const list = el.closest(".list");
  const nav = list.nextElementSibling;

  if (nav.classList.contains("max-h-0")) {
    nav.classList.remove("max-h-0");
    nav.classList.add("max-h-[500px]");
    nav.classList.remove("opacity-0");
    nav.classList.add("opacity-100");
    nav.classList.add("p-10");
  } else {
    nav.classList.remove("p-10");
    nav.classList.remove("max-h-[500px]");
    nav.classList.add("max-h-0");
    nav.classList.remove("opacity-100");
    nav.classList.add("opacity-0");
  }

  const chev = el.closest(".chevron");
  chev.classList.toggle("rotate-180");

  const image = list.querySelector(".imageConditional");
  image.classList.toggle("translate-x-[50%]");
  image.classList.toggle("md:translate-x-[80%]");
}

function showKotak() {
  const show = document.getElementById("kotak");

  if (show.classList.contains("w-15")) {
    show.classList.remove("w-15");
    show.classList.add("w-40","sm:w-80");
  } else {
    show.classList.add("w-15");
    show.classList.remove("w-40", "sm:w-80");
  }

  const form = document.getElementById("searchBar");

  if (form.classList.contains("opacity-0")) {
    form.classList.remove("opacity-0");
    form.classList.add("opacity-100");
  } else {
    form.classList.add("opacity-0");
    form.classList.remove("opacity-100");
  }

  const btnX = document.getElementById("btnX")
  btnX.classList.toggle("hidden")
}

function clearBtn() {
  document.getElementById("searchBar").value = "";
}
