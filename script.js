function scrollReceitas(){
  document
  .getElementById("receitas")
  .scrollIntoView({
    behavior:"smooth"
  });
}

document
.getElementById("contactForm")
.addEventListener("submit",function(e){

  e.preventDefault();

  alert("Mensagem enviada com sucesso 🐱✨");

  this.reset();

});