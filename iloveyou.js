document.getElementById("login-btn").addEventListener("click", function (event) {
  event.preventDefault();
  const username = document.getElementById("username").value.trim(); // Remover espaços em branco
  const password = document.getElementById("password").value;

  if (username === "Sabrina" && password === "01062023") {
    // Redirecionar para a próxima tela
    
    window.location.href = "2-home.html";
  } else {
    // Exibir mensagem de erro
    document.getElementById("error-message").innerText = "Saia daqui sua mocreia imunda🔫";
  }
});
