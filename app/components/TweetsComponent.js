import React, {Component} from 'react'
import {Link} from 'react-router'
import PropTypes from 'prop-types'
import TweetComponent from 'components/TweetComponent'

class TweetsComponent extends Component {

  render() {
    const content = this.props.tweets.map(function (tweet) {
      return (
        <TweetComponent key={tweet._id} tweet={tweet}/>
      )
    });

    return (
      <div>
        <h2>List of tweets</h2>
        <ul className="tweets">{content}</ul>
      </div>
    )
  }

}

TweetsComponent.propTypes = {
  tweets: PropTypes.instanceOf(Array).isRequired
}

export default TweetsComponent
