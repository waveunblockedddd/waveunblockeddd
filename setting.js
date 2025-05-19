document.addEventListener("DOMContentLoaded", () => {
  const settingsBtn = document.getElementById("settings-btn");
  const mainContent = document.getElementById("main-content");
  const settingsPanel = document.getElementById("settings-panel");
  const themeSelect = document.getElementById("theme-select");
  const collabCards = document.querySelectorAll(".collab-card");
  const homeBtn = document.querySelector('button[data-link="index.html"]');


  settingsBtn.addEventListener("click", () => {
    mainContent.style.display = "none";
    settingsPanel.classList.add("active");
  });

  themeSelect.addEventListener("change", (e) => {
    document.body.classList.remove("vortex-theme");
    const selected = e.target.value;
    document.body.dataset.theme = selected;
    localStorage.setItem("normal-theme", selected);
    localStorage.removeItem("collab-theme");


    if (selected) {
      themeSelect.classList.add("glowing");
    } else {
      themeSelect.classList.remove("glowing");
    }
  });


  collabCards.forEach(card => {
    card.addEventListener("click", () => {
      document.body.removeAttribute("data-theme");
      document.body.className = '';
      const theme = card.dataset.theme;
      if (theme === "vortex") {
        document.body.classList.add("vortex-theme");
      }
      localStorage.setItem("collab-theme", theme);
      localStorage.removeItem("normal-theme");

 
      themeSelect.classList.remove("glowing");
    });
  });


  homeBtn.addEventListener("click", () => {
    settingsPanel.classList.remove("active");
    mainContent.style.display = "flex";
  });


  const savedCollabTheme = localStorage.getItem("collab-theme");
  const savedNormalTheme = localStorage.getItem("normal-theme");

  if (savedCollabTheme === "vortex") {
    document.body.classList.add("vortex-theme");
    themeSelect.classList.remove("glowing");
  } else if (savedNormalTheme) {
    document.body.dataset.theme = savedNormalTheme;
    themeSelect.value = savedNormalTheme;
    if (savedNormalTheme) {
      themeSelect.classList.add("glowing");
    }
  } else {
    themeSelect.classList.remove("glowing");
  }
});
