const SuggestionItem = props => {
  const {eachItem, delMethod} = props
  const {suggestion, id} = eachItem
  const delSuggest = () => {
    delMethod(id)
  }

  return (
    <li className="suggest-item">
      <p className="suggest-name">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        className="suggest-icon"
        alt="arrow"
        onClick={delSuggest}
      />
    </li>
  )
}

export default SuggestionItem
