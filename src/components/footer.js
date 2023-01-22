import React,{Component} from "react";

class Footer extends Component{

    constructor(props){
        super(props)
        this.state={
            value : 1
        }
    }

    render(){
        return(
            <footer>
                {this.props.footerText}
                {this.state.value}
            </footer>
        )
    }
}

export default Footer;
