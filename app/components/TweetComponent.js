import React, {Component} from 'react'
import {Link} from 'react-router'
import PropTypes from 'prop-types'
import {List} from 'immutable'

class TweetsComponent extends Component {

  render() {
    const tweet = this.props.tweet
    return (
      <li className={"tweet" + (tweet.active ? ' active' : '')}>
        <img src={tweet.avatar} className="avatar"/>
        <blockquote>
          <cite>
            <a href={"http://www.twitter.com/" + tweet.screenname}>{tweet.author}</a>
            <span className="screen-name">@{tweet.screenname}</span>
          </cite>
          <span className="content">{tweet.body}</span>
        </blockquote>
      </li>

    )
  }
}


TweetsComponent.propTypes = {
  tweet: PropTypes.instanceOf(Object).isRequired
}

export default TweetsComponent
