document.addEventListener("DOMContentLoaded", () => {
    const messages = [
      "We're so cool",
      "RAX was here lol",
      "not topping this lil bro",
      "👀",
      "I swear I wasn't snooping in the code",
      "",
      "the other wave is pretty cool I guess but we're better"
    ];
  
    const heading = document.getElementById("random-message");
    if (heading) {
      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      heading.textContent = randomMessage;
    }
  

    document.querySelectorAll(".sidebar li[data-link]").forEach(li => {
      li.addEventListener("click", () => {
        const link = li.getAttribute("data-link");
        if (link) window.location.href = link;
      });
    });
  

    document.querySelectorAll(".btn").forEach(btn => {
      btn.addEventListener("click", () => {
        btn.classList.add("clicked");
        setTimeout(() => btn.classList.remove("clicked"), 300);
      });
    });
  

    document.getElementById("access-unblocker")?.addEventListener("click", () => {

      console.log("Access Unblocker clicked");
    });
  });
  