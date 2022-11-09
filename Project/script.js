if (typeof window !== 'undefined') {
  console.log('You are on the browser')
} else {
  console.log('You are on the server')
}

let dark = document.getElementById("darkMode");
let body = document.getElementById("body")
dark.addEventListener("click", () =>{
  body.classList.toggle("dark");
})