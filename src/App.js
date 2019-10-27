import React, { Component } from 'react';
import './App.css';
import Books from './Component/Books/Books';


class App extends Component {

  constructor(){
    super()
    console.log('App constructor')
  }
  componentDidMount(){
    console.log('App Component DId Mount')
  }

  state = {
    books: [
      {
        id: 1,
        name: 'Javascript',
        Price: 20
      },
      {
        id: 2,
        name: 'React',
        Price: 30
      },
      {
        id: 3,
        name: 'NodeJs',
        Price: 50
      },
      {
        id: 4,
        name: 'CSS',
        Price: 50
      }
    ]
  }

  deleteHandler = (id) => {
    let newBooks = this.state.books.filter(book => book.id != id)
    this.setState({
      books: newBooks
    })
  }

  changeHandler = (name, id)=>{
    let newBooks = this.state.books.map(book => {
      if(id === book.id){
        return{
          ...book,
          name: name
        }
      }
      return book
    })

    this.setState({
      books: newBooks
    })
  }


  render(){
    return(
      <div className="app container mt-3">
        <Books 
              changeHandler={this.changeHandler.bind(this)} 
              deleteHandler={this.deleteHandler.bind(this)} 
              books={this.state.books}/>
      </div>
    )

  }
}

export default App;
