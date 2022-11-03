import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]
// Write your code here
class Capitals extends Component {
  state = {isCapital: countryAndCapitalsList[0].country}

  changeCapital = event => {
    const id = event.target.value

    const filteredList = countryAndCapitalsList.filter(each => each.id === id)

    const {country} = filteredList[0]

    this.setState({isCapital: country})
  }

  render() {
    const {isCapital} = this.state

    return (
      <div className="main-container">
        <div className="content-container">
          <div className="content-box">
            <h1 className="heading">Countries and Capitals</h1>
            <div className="country-container">
              <select className="box" onChange={this.changeCapital}>
                {countryAndCapitalsList.map(each => (
                  <option key={each.id} value={each.id}>
                    {each.capitalDisplayText}
                  </option>
                ))}
              </select>

              <p>is capital of which country?</p>
            </div>

            <div className="capital-box">{isCapital}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Capitals
