import React, {Component} from 'react';

class Language extends Component{

    render(){
        return(
            <div>
                <span>{this.props.language.name}</span> <span className="lang-desc">({this.props.language.details})</span>
            </div>
        );
    }
}
export default Language;