import React from "react";

class Pure_Component extends React.PureComponent{
    render(){
        console.log('Rendered Pure_Component');
        return (
            <div>{this.props.name}</div>
        );
    };  
}

export default Pure_Component;