document.getElementById("right-arrow").addEventListener("click", function() {
    document.getElementById("onboarding").style.transform = "translateX(-100%)";
    document.getElementById("profile").style.transform = "translateX(0)";
});

document.getElementById("left-arrow").addEventListener("click", function() {
    document.getElementById("onboarding").style.transform = "translateX(0)";
    document.getElementById("profile").style.transform = "translateX(100%)";
});

document.addEventListener("DOMContentLoaded", () => {
    const editButton = document.querySelector(".btn");
  
    editButton.addEventListener("click", () => {
      editButton.classList.add("clicked");
  
      
      setTimeout(() => {
        editButton.classList.remove("clicked");
      }, 300);
    });
  });

