const request = require('request');
const cheerio = require('cheerio');

function scrape(url, cb) {
	request(url, function(error, response, html) {
		if (error) {
			return cb(error, null);
		}
		const $ = cheerio.load(html);

		let deck = [];

		$('.deckList li').each(function(i, el){
			deck.push({
				name: $(el).find('.deckCard__name').text(),
				copies: $(el).find('.deckCard__number').text(),
				cost: $(el).find('.deckCard__faeria-cost').text(),
				costLake: $(el).find('.icon-land-water--cost').text(),
				costDesert: $(el).find('.icon-land-desert--cost').text(),
				costMountain: $(el).find('.icon-land-mountain--cost').text(),
				costForest: $(el).find('.icon-land-forest--cost').text(),
				id: $(el).attr('data-card-preview')
			});
		});
		cb(null, deck);
	});
}

module.exports = {
	scrape: scrape
}
