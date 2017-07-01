import React, {Component} from 'react';

class Skill extends Component{

    render(){
        return(
            <div class="item">
                <h3 class="level-title">{this.props.skill.name}</h3>
                <div class="level-bar">
                    <div class="level-bar-inner" data-level="{this.props.skill.percent}">
                    </div>                                      
                </div>                             
            </div>
        );
    }
}
export default Skill;