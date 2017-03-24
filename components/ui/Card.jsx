import React from 'react';

import CheckList from './CheckList.jsx';

export default class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDetails: true,
        };
        
        
      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);

    }
    
    /**
     * For tasks
     **/
    handleAddTask(taskName) {
        this.props.addTask(this.props.id, taskName);
    }
    
    handleToggleTask(taskId) {
        this.props.toggleTask(this.props.id, taskId);
    }
    
    handleRemoveTask(taskId) {
        this.props.removeTask(this.props.id, taskId);
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
                <div className="card_edit">
                    <span
                        className = "fa fa-pencil edit-icon"
                        onClick = {
                            (evt) => {
                                this.props.openDraft({
                                    id: this.props.card_id,
                                    title: this.props.title,
                                    description: this.props.description,
                                    status: this.props.status
                                })
                            }
                        }
                    ></span>
                    {"  "}
                    <span
                        className = "fa fa-times remove-icon"
                        onClick = {
                            (evt) => {
                                this.props.removeCard(this.props.card_id)
                            }
                        }
                    ></span>
                </div>
                <div className = { this.state.showDetails ? "card_title_is_open" : "card_title" }
                    onClick = { this.handleClick.bind(this) }
                >
                    {this.props.title}
                </div>
                <div className = { this.state.showDetails ? '' : 'hidden' }>
                    <div>{this.props.description}</div>
                    <CheckList
                        tasks = { this.props.tasks }
                        addTask = {this.handleAddTask.bind(this)}
                        toggleTask = {this.handleToggleTask.bind(this)}
                        removeTask = {this.handleRemoveTask.bind(this)}
                    />
                </div>
            </div>
        )
    }
}