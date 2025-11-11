let display = document.querySelector(".display");
let battons = Array.from(document.querySelectorAll(".battons"));

battons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      default:
        if(e.target.innerText === "0")
      display.innerText += e.target.innerText;
    }    
  });
});