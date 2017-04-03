let sourceDeck = [];

let deck;

function resetDeck() {
	deck = JSON.parse(JSON.stringify(sourceDeck));
}

const container = document.querySelectorAll('.deck-list')[0];
const deckLoader = document.querySelectorAll('.deck-loader')[0];


function hide(el) {
	el.style.display = 'none';
}
function show(el) {
	el.style.display = 'block';
}

function pad(num) {
	var str = String(num);
	while (str.length < 3) {
		str = 0 + str;
	}
	return str;
};

function renderDeck() {
	hide(deckLoader);
	show(container);

	let markup = '';
	deck.forEach((card, index) => {
		let landMarkup = '';
		let cardColor = '';

		if (card.costMountain) {
			landMarkup += `<span class="icon icon-land-mountain--cost">${card.costMountain ||''}</span>`;
			cardColor = 'mountain';
		}
		if (card.costDesert) {
			landMarkup += `<span class="icon icon-land-desert--cost">${card.costDesert ||''}</span>`;
			cardColor = 'desert';
		}
		if (card.costLake) {
			landMarkup += `<span class="icon icon-land-lake--cost">${card.costLake ||''}</span>`;
			cardColor = 'lake';
		}
		if (card.costForest) {
			landMarkup += `<span class="icon icon-land-forest--cost">${card.costForest ||''}</span>`;
			cardColor = 'forest';
		}

		markup += `
			<li data-index="${index}" style="background-image: url('https://raw.githubusercontent.com/abrakam/Faeria_Cards/master/CardExport/MiniCards/${pad(card.id)}_minicard.png');">
		`;

		if (!Number(card.copies)) {
	    	markup += `<div class="depleated"></div>`;
	    }

		markup += `
			  <div class="gradiant-bg gradiant--${cardColor}"></div>
			  <span class="faeria-cost">${card.cost || ''}</span>

			  ${landMarkup}

	          <span class="card-name">${card.name}</span>
	          <span class="card-count"> ${card.copies} </span>
	        </li>
		`;
	});
	container.innerHTML = markup;
}

function findDeckCardIndex(el) {
	if (el.dataset.index) {
		return el.dataset.index;
	}
	else if (el.className.indexOf('deck-list') > -1) {
		return null;
	} else {
		return findDeckCardIndex(el.parentNode);
	}
}

container.addEventListener('click', function(e){
	if (e.metaKey === true) {
		return increment(e);
	}
	const index = findDeckCardIndex(e.target);
	if (index === null) {
		return;
	} else if (Number(deck[index].copies) - 1 > -1) {
		deck[index].copies = Number(deck[index].copies) - 1;
		renderDeck();
	}
});

function increment(e) {
	e.preventDefault();
    const index = findDeckCardIndex(e.target);
	if (index === null) {
		return;
	} else {
		deck[index].copies = Number(deck[index].copies) + 1;
		renderDeck();
	}
    return false;
}

container.addEventListener('contextmenu', function(e) {
    increment(e);
}, false);

document.querySelectorAll('[reset-deck]')[0].addEventListener('click', function() {
	resetDeck();
	renderDeck();
});

document.querySelectorAll('[import-deck]')[0].addEventListener('click', function() {
	hide(container);
	show(deckLoader);
});

document.querySelectorAll('[cancel]')[0].addEventListener('click', function() {
	hide(deckLoader);
	show(container);
});

const hubScraper = require('./hub-scraper');
document.querySelectorAll('[load-deck]')[0].addEventListener('click', function() {
	const url = deckLoader.querySelectorAll('input')[0].value;
	hubScraper.scrape(url, function(err, deck){
		console.log(err,deck);

		sourceDeck = deck;
		resetDeck();
		renderDeck();
	});
});


show(deckLoader);
hide(container);
