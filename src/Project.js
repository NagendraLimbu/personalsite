import React, {Component} from 'react';

class Project extends Component {
    render(){
        return(
            <div>               
                <div className="item">
                    <span className="project-title"><a href="{this.props.project.url}">{this.props.project.name}</a></span> - <span className="project-tagline">{this.props.project.detail}</span>                    
                </div>
            </div>
        );
    }
}
export default Project;