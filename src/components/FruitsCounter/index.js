// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mangoes: 0, bananas: 0}

  onMangoIncrement = () => {
    this.setState(prevState => ({mangoes: prevState.mangoes + 1}))
  }

  onBananaIncrement = () => {
    this.setState(prevState => ({bananas: prevState.bananas + 1}))
  }

  render() {
    const {mangoes} = this.state
    const {bananas} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">
            Bob ate <span>{mangoes}</span> mangoes <span>{bananas}</span>{' '}
            bananas
          </h1>
          <div className="sub-container">
            <div className="mangoes-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="image"
              />
              <button
                className="button"
                type="button"
                onClick={this.onMangoIncrement}
              >
                Eat Mango
              </button>
            </div>
            <div className="bananas-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="image"
              />
              <button
                type="button"
                className="button"
                onClick={this.onBananaIncrement}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
