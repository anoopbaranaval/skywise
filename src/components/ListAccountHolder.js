import React, { Component } from 'react'
import AccountHolderService from '../services/AccountHolderService'

class ListAccountHolder extends Component {
    constructor(props) {
        super(props)

        this.state = {
            accountholders: []
        }
        this.addAccountholder = this.addAccountholder.bind(this);
        this.editAccountholder = this.editAccountholder.bind(this);
        this.deleteAccountholder = this.deleteAccountholder.bind(this);
    }

    deleteAccountholder(id){
        AccountHolderService.deleteAccountholder(id).then( res => {
            this.setState({accountholders: this.state.accountholders.filter(accountholder => accountholder.id !== id)});
        });
    }
    viewAccountholder(id){
        this.props.history.push(`/view-accountholder/${id}`);
    }
    editAccountholder(id){
        this.props.history.push(`/add-accountholder/${id}`);
    }

    componentDidMount(){
        AccountHolderService.getAccountholders().then((res) => {
            this.setState({ accountholders: res.data});
        });
    }

    addAccountholder(){
        this.props.history.push('/add-accountholder/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">AccountHolder List</h2>
                 <div className = "row">
                    <button className="btn btn-danger" onClick={this.addAccountholder}> Add AccountHolder</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> AccountHolder First Name</th>
                                    <th> AccountHolder Last Name</th>
                                    <th> AccountHolder Email Id</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.accountholders.map(
                                        accountholder => 
                                        <tr key = {accountholder.id}>
                                             <td> { accountholder.firstName} </td>   
                                             <td> {accountholder.lastName}</td>
                                             <td> {accountholder.emailId}</td>
                                             <td>
                                                 <button onClick={ () => this.editAccountholder(accountholder.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteAccountholder(accountholder.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewAccountholder(accountholder.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListAccountHolder