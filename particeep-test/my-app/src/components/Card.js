import React, { Component } from 'react'

import './Card.css'

class Card extends Component {
  state = {
    like: this.props.count,
    dislike: this.props.countless,
  }

  OnLike = () => {
    this.setState({ like: this.props.count + 1 })
    console.log('yeay')
  }


  OnDislike = () => {
    this.setState({ dislike: this.props.countless + 1 })
  }

  componentDidMount = () => {
    console.log("check2", this.state)
  }

  render() {
    let rating = ( this.state.like / (this.state.like + this.state.dislike) * 100)
    let like = <img className="thumbL" src="https://www.freeiconspng.com/uploads/blue-thumbs-up-icon-2.png" alt="thumb-like" />
    let dislike = <img className="thumbDL" src="http://www.pngmart.com/files/10/Thumbs-Down-Transparent-Background.png" alt="thumb-dislike" />
    let deletemovie = <img className="delete" src="https://cdn.iconscout.com/icon/premium/png-512-thumb/trash-8-71920.png" alt="delete-button" />

    return (
      <>
        <div className="movie-card">
          <p className="movie-title">{this.props.name}</p>
          <p className="category">{this.props.cat} </p>
          <div className="count">
            <p className="like" style={{ height: this.state.like + '%' }}> {this.state.like}</p>
            <progress className="LDLbar" value={rating} min="0" max="100"></progress>
            <p className="dislike" style={{ height: this.state.dislike + '%' }}> {this.state.dislike} </p> 
             
          </div>
          <div className="likes">
            <button className="buttonrating" onClick={this.OnLike}>{like}</button>
            <button className="buttonrating" onClick={this.OnDislike}>{dislike}</button>
          </div>
          <div className="deletemovie">
          <button className="buttondelete" onClick={() => this.props.deleteMovies(this.props.id)}>{deletemovie} </button>
          </div>
        </div>
      </>
    )
  }
}

export default Card