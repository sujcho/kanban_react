import React from 'react';

import CheckList from './CheckList.jsx';

export default class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDetails: true,
            //property for a mouse cursor style
            mouseStyle: 'auto'
        };
        
      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);

    }
    
    /*Toggle the value of showDetail on click*/
    handleClick() {
        this.setState(prevState => ({
            showDetails: !prevState.showDetails
        }))
    };
    

    render() {
        return (
            <div className="card">
                <div className="card_title" onClick={this.handleClick}>{this.props.title}</div>
                <div className = { this.state.showDetails ? '' : 'hidden' }>
                    <div>{this.props.description}</div>
                    <CheckList
                        tasks = { this.props.tasks }
                    />
                </div>
            </div>
        )
    }
}