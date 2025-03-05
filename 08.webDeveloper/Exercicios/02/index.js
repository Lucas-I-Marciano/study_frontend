window.onload = () => {
  setTimeout(() => {
    const paragraphs = document.querySelectorAll("p");
    paragraphs[1].innerText = "Alterando o parágrafo";
    paragraphs[0].remove();
  }, 1000);
};
