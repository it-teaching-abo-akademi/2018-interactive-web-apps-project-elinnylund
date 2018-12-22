import React, { Component } from "react";
import "./App.css";
import "react-table/react-table.css";
import { getStockData, getExchangeRate } from "./appService";
import { convert } from "./utils";
import StockTable from "./stockTable";
import StockDialog from "./dialogs/stockDialog";
import GraphDialog from "./dialogs/graphDialog";

class Portfolio extends Component {
	state = {
		stocks: []
	};

	currencySelector = React.createRef();

	addStocks = (symbol, shares) => {
		getStockData(symbol).then(response => {
			if (response["01. symbol"]) {
				var stockExists = false;
				this.props.stocks.forEach(stock => {
					if (stock.data["01. symbol"] === symbol.toUpperCase()) {
						stock.shares = parseInt(stock.shares) + parseInt(shares);
						stockExists = true;
					}
				});
				if (!stockExists) {
					this.props.stocks.push({
						symbol: symbol,
						shares: shares,
						data: response,
						selected: false
					});
				}
				this.setState({
					stocks: this.props.stocks
				});
			} else {
				alert("No stock with symbol '" + symbol + "' found!");
			}
		});
	};

	getTotal() {
		var sum = 0;
		this.props.stocks.forEach(stock => {
			sum += parseInt(stock.shares) * stock.data["05. price"];
		});
		return sum.toFixed(2);
	}
	removeStocks = () => {
		this.props.stocks.forEach((stock, index) => {
			if (stock.selected) {
				this.props.stocks.splice(index, 1);
			}
		});
		this.setState({
			stocks: this.props.stocks
		});
	};

	convert = () => {
		var stocks = [...this.state.stocks];
		getExchangeRate(this.currencySelector.current.value).then(rate => {
			var converted = convert(stocks, rate);
			this.setState({
				stocks: converted
			});
		});
	};

	onStockSelect = stock => {
		var stocks = [...this.state.stocks];
		stock.selected = !stock.selected;
		this.setState({
			stocks: stocks
		});
	};

	componentDidMount() {
		this.setState({
			stocks: this.props.stocks
		});
	}

	componentDidUpdate() {
		this.props.onChange();
	}

	render() {
		return (
			<div className="Portfolio">
				<div className="portfolio-header">
					<span className="portfolio-name">{this.props.name} </span>
					<select ref={this.currencySelector} onChange={this.convert}>
						<option value="usd">Show values in US dollar $</option>
						<option value="eur">Show values in Euro €</option>
					</select>
					<button onClick={() => this.props.removePortfolio(this.props.index)}>
						Delete
					</button>
				</div>
				<StockTable data={this.props.stocks} onSelect={this.onStockSelect} />
				<h5>Total value of portfolio: {this.getTotal()}</h5>
				<div className="buttons">
					<StockDialog
						name={this.props.name}
						action={this.addStocks}
						disabled={this.state.stocks.length > 49}
					/>
					<GraphDialog
						name={this.props.name}
						data={this.state.stocks}
						height={450}
						width={800}
					/>
					<button onClick={this.removeStocks}>Remove selected</button>
				</div>
			</div>
		);
	}
}

export default Portfolio;
