document.getElementById('meuFormulario').addEventListener('submit', function(e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const fone = document.getElementById('fone').value.trim();
  const msg = document.getElementById('mensagem');

  msg.textContent = "";
  msg.style.color = "red";

  if (!nome || !email || !fone) {
    msg.textContent = "Por favor, preencha todos os campos.";
    return;
  }

  if (nome.length < 5 || nome.length > 40) {
    msg.textContent = "O nome deve ter entre 5 e 40 caracteres.";
    return;
  }

  if (!email.includes("@")) {
    msg.textContent = 'E-mail inválido. Deve conter "@"';
    return;
  }

  if (fone.length !== 11 || isNaN(fone)) {
    msg.textContent = "O telefone deve conter 11 dígitos numéricos (ex: 11999999999).";
    return;
  }

  msg.style.color = "green";
  msg.textContent = "Formulário enviado com sucesso!";
});