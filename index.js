const cardList = document.querySelector( '.cardList');
const score = document.querySelector('.score');

buildBoard();

let clicks = 0;

let interval = setInterval(function(){
    addCard(cardList.children.length + 1) //makes it start at 1 not 0
}, 2000);

cardList.addEventListener('click', function(e){
    console.log(e.target);
    if (e.target.matches('.cardList')){
        return
    }
    if (e.target.classList.contains('active')){
        e.target.classList.remove('active');
        e.target.classList.add('inactive');
        clicks++;
        score.textContent = clicks;
        return
    }
    e.target.remove();
    clicks++;
    clicks++;
    score.textContent = clicks;
    let children = cardList.children;
    if (children.length < 1){
        clearInterval(interval);
    }
});

function addCard(value){
    let card = document.createElement( 'div');
    card.classList.add('card');
    card.classList.add('active');
    card.innerHTML = value;
    cardList.appendChild(card);
}

function buildBoard(){
    for (let i=0; i<12; i++){
        addCard( 'starter');
    }
}