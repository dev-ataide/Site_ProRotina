const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayexist = nlwSetup.dayExists(today)
  if (dayexist) {
    alert("Dia já incluso")
    return
  }

  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("ProRotina@Dev.Ataide", JSON.stringify(nlwSetup.data))
}
const data = JSON.parse(localStorage.getItem("ProRotina@Dev.Ataide")) || {} 

nlwSetup.setData(data)
nlwSetup.load()
