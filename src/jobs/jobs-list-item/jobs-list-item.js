import React, {Component} from 'react';
import './jobs-list-item.scss';

export class JobsListItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            job_title: props.job_title || '',
            organization_name: props.organization_name || ''
        };
        this.handleTitleClick = this.handleTitleClick.bind(this);
    }
    
    handleTitleClick(event){
        this.props.onClick(this.state.job_title);
    }

    render(){
        return (
            <div 
                className="jobs-list-item"
                onClick={this.handleTitleClick}
            >
                <div className="jobs-list-item__title">{this.state.job_title}</div>
                <div className="jobs-list-item__organization">{this.state.organization_name}</div>
            </div>
        );
    }
}