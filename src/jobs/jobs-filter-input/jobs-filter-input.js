import React, {Component} from 'react';
import './jobs-filter-input.scss';

export class JobsFilterInput extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event){
        const value = event.target.value;
        this.setState({value});
        this.props.onChange(value);
    }


    render(){
        return (
            <input 
                className="jobs-filter-input"
                value={this.state.value} 
                placeholder="Search"
                onChange={this.handleInputChange}
            />);
    }
}
