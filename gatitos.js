const catImage = document.getElementById("cat-image");
const generateButton = document.getElementById("btn-generate");

// Função para obter uma imagem aleatória de gato da API cataas
async function getRandomCatImage() {
  try {
    const response = await fetch("https://cataas.com/cat");
    const imageUrl = response.url;
    return imageUrl;
  } catch (error) {
    console.log("Erro ao obter a imagem de gato:", error);
    return "placeholder.jpg"; // Se ocorrer um erro, exibe uma imagem de placeholder
  }
}

// Função para exibir uma imagem aleatória de gato ao clicar no botão
async function showRandomCatImage() {
  const imageUrl = await getRandomCatImage();
  catImage.src = imageUrl;
}

// Adicionar o evento de clique ao botão
generateButton.addEventListener("click", showRandomCatImage);

// Mostrar uma imagem de gato aleatória ao carregar a página
showRandomCatImage();
