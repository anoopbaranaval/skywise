import React, { Component } from 'react'
import AccountHolderService from '../services/AccountHolderService'

class ViewAccountHolder extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            accountHolder: {}
        }
    }

    componentDidMount(){
        AccountHolderService.getAccountholderById(this.state.id).then( res => {
            this.setState({accountHolder: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View AccountHolder Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> AccountHolder First Name: </label>
                            <div> { this.state.accountHolder.firstName }</div>
                        </div>
                        <div className = "row">
                            <label> AccountHolder Last Name: </label>
                            <div> { this.state.accountHolder.lastName }</div>
                        </div>
                        <div className = "row">
                            <label> AccountHolder Email ID: </label>
                            <div> { this.state.accountHolder.emailId }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewAccountHolder