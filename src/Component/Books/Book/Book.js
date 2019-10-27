import React, {Component} from 'react'

class Book extends Component {
    state= {
        isEditable: false
    };

    changeKeyHandler = (event) => {
        if(event.key == 'Enter'){
            this.setState({
                isEditable: false
            })
        }
    }
    render(){

        let output = this.state.isEditable ? 
                    <input onKeyPress={ this.changeKeyHandler }
                    onChange ={ e=> this.props.changeHandler(e.target.value, this.props.book.id) } type="text" placeholder="Enter Name" value={this.props.book.name}/> : <p>{this.props.book.name}</p>

        return(
            <li className="list-group-item d-flex">
                {output}
                <span className="ml-auto">{this.props.book.Price}</span>
                <div className="mx-4">
                    <span onClick ={()=> this.setState({isEditable:true})} style={{cursor: 'pointer'}} className="ml-auto">
                        <i className="fa fa-edit"></i>
                    </span>
                </div>
                <div className="mx-2">
                    <span onClick ={ () => this.props.deleteHandler(this.props.book.id)} style={{cursor: 'pointer'}} className="ml-auto">
                        <i className="fa fa-trash"></i>
                    </span>
                </div>
            </li>
        )
    }
}

export default Book