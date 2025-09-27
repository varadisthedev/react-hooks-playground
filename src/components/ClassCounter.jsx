import React, { Component } from 'react'
import styles from './classCounter.module.css'

 class ClassCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    incrementCount=()=>{
        this.setState({
            count:this.state.count+1
        })
    }


  render() {
    return (
      <div className={styles.main}>
        <button onClick={this.incrementCount} className={styles.btn}>count is: {this.state.count}</button>
      </div>
    )
  }
}

export default ClassCounter