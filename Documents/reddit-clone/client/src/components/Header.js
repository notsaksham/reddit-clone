import React, {Component} from 'react';

class Header extends Component{
   
    render(){
        
        return(
            <div className="Header">
                {this.props.value.headertext}
            </div>
        );
    }
}

export default Header;