import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class AddTodo extends Component {
    state = {
        title: ""
    }

    onSubmit = (e) => {
        e.preventDefault(); //Prevents default submission process
        this.props.addTodo(this.state.title);
        this.setState({ title: '' }); //Resets title back to nothing
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value }); /* Or title: e.target.value */

    render() {
        return (
            <div>
                <form   onSubmit={this.onSubmit} 
                        style={{ display: "flex" }}>
                    <input  type="text" 
                            name="title" 
                            style={{ flex: "10", padding: "5px" }}
                            placeholder="Add Todo..." 
                            value={this.state.title}
                            onChange={this.onChange}
                    />
                    <input  type="submit" 
                            value="+" 
                            className="btn"
                            style={{
                                    border: "1px solid grey",
                                    fontSize: "12px",
                                    paddingLeft: "10px",
                                    paddingRight: "10px",
                                    borderRadius: "2px",
                                    margin: "1px 9px 1px 3px",
                                    backgroundColor: "#008000",
                                    color: "#f4f4f4"
                            }}
                    />
                </form>
            </div>
        )
    }
}

//PropTypes
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default AddTodo