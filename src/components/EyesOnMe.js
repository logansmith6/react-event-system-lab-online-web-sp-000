// Code EyesOnMe Component Here
import React, { Component } from 'react';

export default class EyesOnMe extends Component {

<<<<<<< HEAD
blur = () => {
    console.log('Hey! Eyes on me!')
}

focus = () => {
    console.log('Good!')
}

  render(){
    return(
      <button onFocus={this.focus} onBlur={this.blur}></button>
=======
  render(){
    return(
      <button onFocus={console.log('Good!')} onBlur={console.log('Hey! Eyes on me!')}></button
>>>>>>> 080d7d663abe275218dab29e812576e6007e397a
    )
  }

}
