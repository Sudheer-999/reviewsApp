import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {num: 0}

  onRightArrowClick = () => {
    const {num} = this.state
    const {reviewsList} = this.props

    if (num < reviewsList.length - 1) {
      this.setState(prevState => ({num: prevState.num + 1}))
    }
  }

  onLeftArrowClick = () => {
    const {num} = this.state

    if (num > 0) {
      this.setState(prevState => ({num: prevState.num - 1}))
    }
  }

  render() {
    const {num} = this.state
    const {reviewsList} = this.props

    const {imgUrl, username, companyName, description} = reviewsList[num]

    return (
      <div className="bg-container">
        <div className="review-con">
          <h1 className="head">Reviews</h1>
          <div className="sub-con">
            <button
              type="button"
              data-testid="leftArrow"
              onClick={this.onLeftArrowClick}
              className="btn"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
              />
            </button>
            <div className="details-con">
              <img src={imgUrl} alt={username} className="profile" />
              <p className="profile-name">{username}</p>
              <p className="company">{companyName}</p>
              <p className="desc">{description}</p>
            </div>
            <button
              type="button"
              data-testid="rightArrow"
              onClick={this.onRightArrowClick}
              className="btn"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
