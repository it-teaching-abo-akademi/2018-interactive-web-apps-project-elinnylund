(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{131:function(e,t,a){e.exports=a(348)},136:function(e,t,a){},22:function(e,t,a){},348:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(78),c=a.n(r),s=(a(136),a(79)),i=a(6),l=a(7),u=a(9),p=a(8),d=a(10),h=a(39),f=a(30),m=(a(22),a(139),a(54)),v=a.n(m);function b(e){var t="https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol="+e+"&apikey=RPEAO2U8P0FSYJ75";return v.a.get(t).then(function(e){if(!e.Note)return e.data["Global Quote"];alert(e.data.Note)})}function k(){var e=Math.round,t=Math.random;return"rgba("+e(255*t())+","+e(255*t())+","+e(255*t())+","+t().toFixed(1)+")"}var E=a(130),g=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).checked=function(e){a.props.onSelect(e)},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"getColumns",value:function(){var e=this;return[{Header:"Name",id:"name",accessor:function(e){return e.data["01. symbol"]}},{Header:"Unit value",id:"unitValue",accessor:function(e){return parseFloat(e.data["05. price"]).toFixed(2)}},{Header:"Quantity",accessor:"shares"},{Header:"Total value",id:"totalValue",accessor:function(e){return(e.data["05. price"]*e.shares).toFixed(2)}},{Header:"Select",accessor:"selected",Cell:function(t){var a=t.original;return o.a.createElement("input",{type:"checkbox",className:"checkbox",checked:a.selected,onChange:function(){return e.checked(a)}})}}]}},{key:"render",value:function(){var e=this.getColumns();return o.a.createElement(E.a,{data:this.props.data,columns:e,showPagination:!1,resizable:!1,minRows:3})}}]),t}(n.Component),O=a(28),y=a.n(O),S=(a(70),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).stockInput=o.a.createRef(),e.sharesInput=o.a.createRef(),e.openDialog=function(){e.props.disabled?alert("You have reached the maximum amount of stocks in this portfolio!"):e.setState({isDialogOpen:!0})},e.handleClose=function(){e.setState({isDialogOpen:!1})},e.addStocks=function(t){t.preventDefault(),e.props.action(e.stockInput.current.value,e.sharesInput.current.value)},e.state={isDialogOpen:!1},e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"container"},o.a.createElement("button",{type:"button",onClick:this.openDialog},"Add stocks"),this.state.isDialogOpen&&o.a.createElement(y.a,{title:"Add stocks to "+this.props.name,modal:!0,onClose:this.handleClose,buttons:[{text:"Close",onClick:function(){return e.handleClose()}}]},o.a.createElement("form",{onSubmit:this.addStocks},o.a.createElement("div",{className:"stock-input"},o.a.createElement("label",null,"Stock symbol: "),o.a.createElement("input",{ref:this.stockInput,type:"text",required:!0})),o.a.createElement("div",{className:"stock-input"},o.a.createElement("label",null,"Amount of shares: "),o.a.createElement("input",{type:"number",min:"1",ref:this.sharesInput,required:!0})),o.a.createElement("button",{className:"stock-input",type:"submit"},"Add stocks"))))}}]),t}(n.Component)),C=a(128),D=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).startDate=o.a.createRef(),e.endDate=o.a.createRef(),e.openDialog=function(){e.setState({data:{}}),e.setState({isDialogOpen:!0})},e.handleClose=function(){e.setState({isDialogOpen:!1})},e.updateGraphData=function(){var t,a=e.startDate.current.value,n=e.endDate.current.value,o={datasets:[]},r=[],c=[];e.state.checked.forEach(function(e){var s=[];r=[];var i=function(e){var t="https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol="+e+"&apikey=RPEAO2U8P0FSYJ75";return v.a.get(t).then(function(e){return e})}(e).then(function(c){for(var i in c.data["Time Series (Daily)"]||(t=c.data.Note),c.data["Time Series (Daily)"]){var l=new Date(i),u=new Date(a),p=new Date(n);l>u&&l<p&&(s.push(c.data["Time Series (Daily)"][i]["4. close"]),r.push(i))}o.datasets.push({label:e,data:s,fill:!0,backgroundColor:k()})});c.push(i)}),Promise.all(c).then(function(){t&&(alert(t),o={},t=null),o.labels=Object(f.a)(new Set(r)),e.setState({data:o})})},e.setChecked=function(t,a){var n=Object(f.a)(e.state.checked);a?n.push(t):n=n.filter(function(e){return e!==t}),e.setState({checked:n})},e.state={isDialogOpen:!1,data:{},checked:[]},e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"container"},o.a.createElement("button",{type:"button",onClick:this.openDialog},"Perf graph"),this.state.isDialogOpen&&o.a.createElement(y.a,{title:"Performance graph for "+this.props.name,modal:!0,onClose:this.handleClose,height:this.props.height,width:this.props.width},o.a.createElement("div",{className:"graph-container"},o.a.createElement("div",{className:"symbols-list"},this.props.data.map(function(t){return o.a.createElement("div",{className:"stock-select",key:t.symbol},o.a.createElement("p",null,o.a.createElement("input",{type:"checkBox",onChange:function(a){return e.setChecked(t.symbol,a.target.checked)}}),t.symbol))})),o.a.createElement("div",{className:"chart-container"},o.a.createElement(C.a,{data:this.state.data}))),o.a.createElement("div",{className:"date-selectors"},o.a.createElement("label",null,"Start date: "),o.a.createElement("input",{type:"date",ref:this.startDate}),o.a.createElement("label",null,"End date: "),o.a.createElement("input",{type:"date",ref:this.endDate}),o.a.createElement("button",{onClick:this.updateGraphData},"Update graph"))))}}]),t}(n.Component),j=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={stocks:[]},a.currencySelector=o.a.createRef(),a.addStocks=function(e,t){b(e).then(function(n){if(n["01. symbol"]){var o=!1;a.props.stocks.forEach(function(a){a.data["01. symbol"]===e.toUpperCase()&&(a.shares=parseInt(a.shares)+parseInt(t),o=!0)}),o||a.props.stocks.push({symbol:e,shares:t,data:n,selected:!1}),a.setState({stocks:a.props.stocks})}else alert("No stock with symbol '"+e+"' found!")})},a.removeStocks=function(){a.props.stocks.forEach(function(e,t){e.selected&&a.props.stocks.splice(t,1)}),a.setState({stocks:a.props.stocks})},a.convert=function(){var e=Object(f.a)(a.state.stocks);(function(e){var t="usd";"usd"===e&&(t="eur");var a="https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency="+t+"&to_currency="+e+"&apikey=RPEAO2U8P0FSYJ75";return v.a.get(a).then(function(e){return e.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]})})(a.currencySelector.current.value).then(function(t){var n=function(e,t){return e.forEach(function(e){e.data["05. price"]=parseFloat(e.data["05. price"])*parseFloat(t)}),e}(e,t);a.setState({stocks:n})})},a.onStockSelect=function(e){var t=Object(f.a)(a.state.stocks);e.selected=!e.selected,a.setState({stocks:t})},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"getTotal",value:function(){var e=0;return this.props.stocks.forEach(function(t){e+=parseInt(t.shares)*t.data["05. price"]}),e.toFixed(2)}},{key:"componentDidMount",value:function(){this.setState({stocks:this.props.stocks})}},{key:"componentDidUpdate",value:function(){this.props.onChange()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"Portfolio"},o.a.createElement("div",{className:"portfolio-header"},o.a.createElement("span",{className:"portfolio-name"},this.props.name," "),o.a.createElement("select",{ref:this.currencySelector,onChange:this.convert},o.a.createElement("option",{value:"usd"},"Show values in US dollar $"),o.a.createElement("option",{value:"eur"},"Show values in Euro \u20ac")),o.a.createElement("button",{onClick:function(){return e.props.removePortfolio(e.props.index)}},"Delete")),o.a.createElement(g,{data:this.props.stocks,onSelect:this.onStockSelect}),o.a.createElement("h5",null,"Total value of portfolio: ",this.getTotal()),o.a.createElement("div",{className:"buttons"},o.a.createElement(S,{name:this.props.name,action:this.addStocks,disabled:this.state.stocks.length>49}),o.a.createElement(D,{name:this.props.name,data:this.state.stocks,height:450,width:800}),o.a.createElement("button",{onClick:this.removeStocks},"Remove selected")))}}]),t}(n.Component),w=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).nameInput=o.a.createRef(),e.openDialog=function(){return e.setState({isDialogOpen:!0})},e.createPortfolio=function(){e.props.action(e.nameInput.current.value),e.handleClose()},e.handleClose=function(){e.setState({isDialogOpen:!1})},e.state={isDialogOpen:!1},e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"container"},o.a.createElement("button",{type:"button",onClick:this.openDialog},"Create new portfolio"),this.state.isDialogOpen&&o.a.createElement(y.a,{title:"Create new portfolio",modal:!0,onClose:this.handleClose,buttons:[{text:"Create portfolio",onClick:function(){return e.createPortfolio()}}]},o.a.createElement("label",null,"Portfolio name: "),o.a.createElement("input",{ref:this.nameInput,type:"text"})))}}]),t}(n.Component),N=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).state={dialogIsOpen:!1,portfolios:{}},e.componentDidUpdate=function(){localStorage.setItem("portfolios",JSON.stringify(e.state.portfolios))},e.fetchData=function(e){return Object.keys(e).forEach(function(t){e[t].stocks.forEach(function(e){b(e.symbol).then(function(t){e.data=t})})}),e},e.addPortfolio=function(t){if(Object.keys(e.state.portfolios).length<10){var a=Object(s.a)({},e.state.portfolios);a["".concat(Date.now())]={name:t,stocks:[]},e.setState({portfolios:a})}else alert("You can not have more than 10 portfolios!")},e.removePortfolio=function(t){var a=Object(s.a)({},e.state.portfolios);delete a[t],e.setState({portfolios:a})},e.addPortfolio=e.addPortfolio.bind(Object(h.a)(Object(h.a)(e))),e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("portfolios"));if(e){var t=this.fetchData(e);this.setState({portfolios:t})}}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App"},o.a.createElement(w,{action:this.addPortfolio}),o.a.createElement("div",{className:"portfolio-grid"},Object.keys(this.state.portfolios).map(function(t){return o.a.createElement(j,{key:t,className:"grid-item",name:e.state.portfolios[t].name,stocks:e.state.portfolios[t].stocks,removePortfolio:e.removePortfolio,index:t,onChange:e.componentDidUpdate})})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[131,2,1]]]);
//# sourceMappingURL=main.fb59f394.chunk.js.map