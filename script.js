// Rolagem suave ao clicar no menu
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = e.target.getAttribute('href').substring(1);
    document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
  });
});
// Função para voltar para a página anterior
