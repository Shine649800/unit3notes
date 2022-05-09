const cardList = document.querySelector( '.cardList');
const score = document.querySelector('.score');

buildBoard();

let clicks = 0;

let interval = setInterval(function(){
    addCard("good card") //makes it start at 1 not 0
}, 2000);

let badInterval = setInterval( function(){
    addBadCard("bad card")
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
    } else if (e.target.classList.contains('badActive')){
        e.target.classList.remove('badActive');
        e.target.classList.add('badInActive');
        clicks--;
        score.textContent = clicks;
        return
    }
    else if(e.target.classList.contains('badInActive')){
        clicks--;
        clicks--;
        clicks--;
        clicks--;
        e.target.remove();
        score.textContent = clicks;
        return
    } else if (e.target.classList.contains('goldActive')){
        console.log('You win!');
        console.log(`You had ${clicks} points!`);
        e.target.remove();
        return
    }
    e.target.remove();
    clicks++;
    clicks++;
    score.textContent = clicks;
    let children = cardList.children;
    if (children.length < 1){
        clearInterval(interval);
        clearInterval(badInterval);
    } else if (clicks >= 100){
        clearInterval(interval);
        clearInterval(badInterval);
        addGoldCard( 'The Golden Card!');
    }
});

function addCard(value){
    let card = document.createElement( 'div');
    card.classList.add('card');
    card.classList.add('active');
    card.innerHTML = value;
    cardList.appendChild(card);
}

function addBadCard(value){
    let badCard = document.createElement('div');
    badCard.classList.add('badCard');
    badCard.classList.add('badActive');
    badCard.innerHTML = value;
    cardList.appendChild(badCard);
}

function addGoldCard(value){
    let goldCard = document.createElement('div');
    goldCard.classList.add('goldCard');
    goldCard.classList.add('goldActive');
    goldCard.innerHTML = value;
    cardList.appendChild(goldCard);
}


function buildBoard(){
    for (let i=0; i<12; i++){
        addCard( 'good card');
    }
}