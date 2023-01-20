import React,{Component} from "react";



class Header extends Component{
  state = {
    title:'Keywords are : ',
    keyWords:'',
    count:0
  }
  inputChange = (event) =>{
    // console.log(event.target.value);
    this.setState({ keyWords: event.target.value})
  }

  addOne(){
    this.setState( (state,props)=>({
      count:state.count+1
    }))
  }
  render() {
    return (
      <>
      <header>
        <div className="logo" onClick={()=> console.log('Clicked')}>Logo</div>
        <input className="header-input" onChange={ (e)=> this.inputChange(e) }/>
        <br/>
        <div>{this.state.title}</div>
        <br/>
        <div>{this.state.keyWords}</div>
        <br/>
        <div>{this.state.count}</div>
        <br/>
        <button onClick={()=> this.addOne()}>Add One</button>
        
      </header></>
    );
  }
}

export default Header;
