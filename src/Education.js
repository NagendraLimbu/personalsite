import React, {Component} from 'react';

class Education extends Component{

    render(){
        return(
            <div className="item">
                <h4 className="degree">{this.props.education.degree}</h4>
                <h5 className="meta">{this.props.education.university}</h5>
                <div className="time">{this.props.education.period}</div>
            </div>

        );
    }
}
export default Education;