import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Bhaskara",
      title:"",
      doc:"",
      isHidden: true
    };
  }

  componentDidMount() {
    fetch("http://www.mocky.io/v2/5bb781f42e00007100683b1a", {
      //mode: "no-cors",
      method: "GET",
      headers: {
        "Accept": "application/json"
                },
              },
            )
      .then(
        (result) => {
          if (result.ok) {
            result.json().then(json => {
              console.log(json);
              this.setState({
                name: "Here we are making progress",
                title: json.title,
                doc: json.msg

              });
            });
          }

          console.log("API Success");
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            name: "Here we are making progress. But this is API failure"
          });
          console.log("API Failure");
        }
      )
  }
  handleClick(){
		this.setState({
			isHidden: !this.state.isHidden
		});
    }

  render() {

const Child = () => (<div className="textContainder" id="myDIV" ><h4 className="legalHeading">{this.state.title?this.state.title: "API failure"}</h4><p className="textAdjustment">{this.state.doc}</p></div>);
    
    return (
      <div className="App">
        <header className="App-header">
          <p>Welcome! {this.state.name}.</p>
          <button onClick={this.handleClick.bind(this)}>{this.state.isHidden? "Show":"Hide"} Legal Document</button>
          {!this.state.isHidden && <Child />}
        </header>
      </div>
    );
  }
}
export default App;
