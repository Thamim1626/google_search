import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  constructor(props) {
    super(props)
    this.state = {suggestionsList: props.suggestionsList, searchInput: ''}
  }

  delMethod = id => {
    const {suggestionsList} = this.state
    const newSuggestionList = suggestionsList.filter(
      eachItem => eachItem.id !== id,
    )
    this.setState({suggestionsList: newSuggestionList})
  }

  onChange = event => {
    const searchValue = event.target.value
    this.setState({searchInput: searchValue})
  }

  render() {
    const {suggestionsList, searchInput} = this.state
    const searchResults = suggestionsList.filter(eachUser =>
      eachUser.suggestion.includes(searchInput),
    )
    return (
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-logo"
        />

        <div className="suggest-container">
          <div className="input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png "
              alt="search icon"
              className="search-icon"
            />
            <input
              type="search"
              placeholder="Google Search"
              className="search-input"
              onChange={this.onChange}
            />
          </div>
          <ul className="suggest-list">
            {searchResults.map(eachItem => (
              <SuggestionItem
                eachItem={eachItem}
                key={eachItem.id}
                delMethod={this.delMethod}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
