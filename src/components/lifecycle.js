import React,{Component} from "react";

class Life extends Component{
    constructor(props){
        super(props)
        console.log('1-Constructor');
        this.state = {name:'Badbhush'}
    }

    static getDerivedStateFromProps(props,state){
        console.log('2-getDerivedStateFromProps');
        if(state.name === 'Devil'){
            return {
                name:'Bhushan'
            }
           
        }
        
        return null;
    }
    componentDidMount(){
        console.log('componentDidMount');
    }
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }
    shouldComponentUpdate(nextProps,nextState){
        if(nextState.name === 'devil'){
            return false;
        }
        return true;

    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        let birthDate = '09/01/1997';
        return birthDate
    }
    componentDidUpdate(prevProps, prevState,snapshot){
        // console.log(prevState);
        // console.log(this.state);
        console.log(snapshot);
    }

    render(){
        console.log('render method');
        return(
            <>
            <hr/>
            <div>{this.state.name}</div>
            <button onClick={()=>{ this.setState({name:'Devil'})}}>Change name</button>
            </>
        )
    }
}

export default Life;
