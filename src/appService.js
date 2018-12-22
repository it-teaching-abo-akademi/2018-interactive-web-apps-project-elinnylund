import axios from "axios";

export function getExchangeRate(currency) {
	var from = "usd";
	if (currency === "usd") {
		from = "eur";
	}
	var apiKey = "RPEAO2U8P0FSYJ75";
	var url =
		"https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=" +
		from +
		"&to_currency=" +
		currency +
		"&apikey=" +
		apiKey;
	return axios.get(url).then(response => {
		return response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"];
	});
}

export function getStockData(stockSymbol) {
	var apiKey = "RPEAO2U8P0FSYJ75";
	var url =
		"https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" +
		stockSymbol +
		"&apikey=" +
		apiKey;
	return axios.get(url).then(response => {
		if (response.Note) {
			alert(response.data.Note);
		} else {
			return response.data["Global Quote"];
		}
	});
}

export function getHistoricData(stockSymbol) {
	var apiKey = "RPEAO2U8P0FSYJ75";
	var url =
		"https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=" +
		stockSymbol +
		"&apikey=" +
		apiKey;
	return axios.get(url).then(response => {
		return response;
	});
}
