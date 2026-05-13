function scrollReceitas(){

document
.getElementById('receitas')
.scrollIntoView({
behavior:'smooth'
});

}

function favorite(button){

if(button.innerHTML === '♡'){
button.innerHTML = '♥';
button.style.background = '#ffcad4';
}
else{
button.innerHTML = '♡';
button.style.background = '#f1e0a8';
}

}

function toggleFavorites(){
alert('✨ Área de favoritos em desenvolvimento');
}

function openModal(){
document.getElementById('aboutModal').style.display = 'flex';
}

function closeModal(){
document.getElementById('aboutModal').style.display = 'none';
}

window.onclick = function(e){

const modal = document.getElementById('aboutModal');

if(e.target === modal){
closeModal();
}

}

document
.getElementById('contactForm')
.addEventListener('submit',function(e){

e.preventDefault();

alert('Mensagem enviada com sucesso 🐱✨');

this.reset();

});

const searchInput = document.getElementById('searchInput');

const cards = document.querySelectorAll('.receita-card');

searchInput.addEventListener('keyup',()=>{

const value = searchInput.value.toLowerCase();

cards.forEach(card=>{

const text = card.innerText.toLowerCase();

card.style.display = text.includes(value)
? 'block'
: 'none';

});

});