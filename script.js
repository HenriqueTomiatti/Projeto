function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    // se estiver em light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se estiver sem light mode, manter a imagem normal
    img.setAttribute("src", "assets/avatar.png")
  }

  if (html.classList.contains("light")) {
    img.setAttribute("alt", "Foto de um momento muito feliz.")
  } else {
    img.setAttribute("alt")
  }
}
