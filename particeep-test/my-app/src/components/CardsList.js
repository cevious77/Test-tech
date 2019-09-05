import React, { Component } from 'react'
import Card from './Card'
import movies from './movies'

import './Card.css'

class CardList extends Component {
  state = {
    result: movies,
    category : [this.props.cat],
    categoryfilter: null,
  
  }

  handleSearch = (e) => {
    this.setState({categoryfilter: this.state.category.filter((search) => search.category.toLowerCase().includes(e.target.value.toLowerCase()))})
    console.log("search", this.state.category)
  }
   getCategory = () => {
     this.setState({category: this.props.cat})
     console.log (this.state.category)
   }

  getMovies = () => {
    this.setState({ result: movies })
    console.log("check", this.state.result)
  }

  deleteMovies = (id) => {
    const { result } = this.state
    const filterMovies = result.filter(movie => id !== movie.id)
    this.setState({ result: filterMovies })
  }

  
  componentDidMount() {
    this.getMovies()
    this.getCategory() 
  }

  


  render() {
    const { result } = this.state
    return (
      <>
        <div className="Listing">
       

          {result.map(movie => 
            <Card 
                name={movie.title} 
                id={movie.id} 
                cat={movie.category} 
                deleteMovies={this.deleteMovies} 
                count={movie.likes} 
                countless={movie.dislikes} 
            />)}
        </div>
      </>
    )
  }
}

export default CardList  