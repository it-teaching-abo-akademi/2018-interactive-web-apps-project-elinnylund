export function convert(stocks, rate) {
	stocks.forEach(stock => {
		stock.data["05. price"] =
			parseFloat(stock.data["05. price"]) * parseFloat(rate);
	});
	return stocks;
}

export function getRandomColor() {
	var o = Math.round, r = Math.random, s = 255;
    var color = 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
	return color;
}