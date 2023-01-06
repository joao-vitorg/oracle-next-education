const msg = document.getElementById("msg")
const texto = document.getElementById("texto")
const copiar = document.getElementById("copiar")

const keys = {
  e: "enter",
  i: "imes",
  a: "ai",
  o: "ober",
  u: "ufat",
}

function criptografar() {
  let result = texto.value
  if (!result) return

  for (let key in keys) {
    result = result.replace(key, keys[key])
  }

  msg.innerText = result
  copiar.style.display = "block"
}

function descriptografar() {
  let result = texto.value
  if (!result) return

  for (let key in keys) {
    result = result.replace(keys[key], key)
  }

  msg.innerText = result
  copiar.style.display = "block"
}

function copiarTexto() {
  navigator.clipboard.writeText(msg.innerText)
}
