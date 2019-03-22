import React, {Component} from 'react';
import './jobs-list-item.scss';

export class JobsListItem extends Component {
    constructor(props){
        super(props);
        this.handleTitleClick = this.handleTitleClick.bind(this);
    }
    
    handleTitleClick(event){
        this.props.onClick(this.props.job_title);
    }

    render(){
        return (
            <div 
                className="jobs-list-item"
                onClick={this.handleTitleClick}
            >
                <div className="jobs-list-item__title">{this.props.job_title}</div>
                <div className="jobs-list-item__organization">{this.props.organization_name}</div>
            </div>
        );
    }
}