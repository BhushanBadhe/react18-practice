import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import NewsList from "./components/news_list";
import Footer from "./components/footer";
import Life from "./components/lifecycle";
import JSON from "./db.json";

import "./styles/styles.css";

class App extends Component {
  state = {
    unmount:true,
    active:false,
    news: JSON,
    filtered:[],
    footer: "Copyright By Bhushan Badhe",
  };

  getKeywords = (event) => {
    console.log(event.target.value);
    let keywords = event.target.value;
    let filtered = this.state.news.filter( (item) =>{
      return item.title.indexOf(keywords) > -1
    } )
    console.log(filtered);
    this.setState({filtered})
  }

  changeColor = (event) => {
    this.setState({
      active: this.state.active ? false : true,
    });
  }
  render() {
    const {news,filtered,active} = this.state;

    console.log(this.state);
    return (
      <div className="hey">
        <Header 
            active={active}
            keyword={this.getKeywords}
            changeColor={this.changeColor}
        />
        <NewsList 
        news={this.state.filtered.length === 0 ? news : filtered } 
        />
        {this.state.unmount ? <Life/> :null}
        <button 
        onClick={()=> { this.setState({unmount:!this.state.unmount })}}
        >Click to remove</button>
        <Footer footerText={this.state.footer} />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
