let show = document.querySelector(".show");
let hide = document.querySelector(".hide");
let passwords = document.querySelector("#password");
let email = document.querySelector("#email");
let span1 = document.querySelector(".email span")
let span2 = document.querySelector(".password span")


passwords.addEventListener("input", ()=>{
  passwords.value.length > 0 ? span2.classList.add("active") : span2.classList.remove("active")
})
email.addEventListener("input", ()=>{
  email.value.length > 0 ? span1.classList.add("active") : span1.classList.remove("active")
})

hide.onclick = () => {
  passwords.setAttribute("type", "text");
  hide.style.display = "none";
  show.style.display = "block";
};

show.onclick = () => {
  passwords.setAttribute("type", "password");
  hide.style.display = "block";
  show.style.display = "none";
};
