// Função para pesquisar usuário
function searchUser() {
  // Limpar resultados anteriores
  const imgProfile = document.getElementById("img-profile")
  const followers = document.getElementById("followers")
  const following = document.getElementById("following")
  const repository = document.getElementById("repository")
  const company = document.getElementById("company")
  const locationUser = document.getElementById("locationUser")

  imgProfile.src = ""
  followers.textContent = "Seguidores"
  following.textContent = "Seguindo"
  repository.textContent = "Repositórios"
  company.textContent = "Companhia"
  locationUser.textContent = "Localização"

  // Obter o valor do campo de pesquisa
  const searchInput = document.getElementById("search-input")
  const searchTerm = searchInput.value.toLowerCase()

  // Fazer a solicitação para a API do GitHub
  const url = `https://api.github.com/users/${searchTerm}`
  fetch(url)
    .then((response) => response.json())
    .then((user) => {
      // Exibir resultados
      imgProfile.src = user.avatar_url
      followers.textContent += ` ${user.followers}`
      following.textContent += ` ${user.following}`
      repository.textContent += ` ${user.public_repos}`
      company.textContent += user.company ? ` ${user.company}` : ""
      locationUser.textContent += user.location ? ` ${user.location}` : ""
    })
    .catch((error) => {
      console.log("Erro ao obter dados do usuário", error)
    })
}

// Evento de digitação no campo de pesquisa
const searchInput = document.getElementById("search-input")
searchInput.addEventListener("keyup", searchUser)
