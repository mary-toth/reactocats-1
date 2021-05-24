import React, { Component } from 'react'

class OctoCat extends Component {
  render() {
    return (
      <article>
        <a href="https://octodex.github.com//yogitocat/">
          <img
            className="cat"
            src="https://octodex.github.com//images/yogitocat.png"
            width="400"
            height="400"
            alt="Yogitocat"
          />
        </a>
        <ul>
          <li>
            #153:
            <a href="https://octodex.github.com//yogitocat/">
              <strong>{this.props.name}</strong>
            </a>
          </li>
          <li>
            <a href="https://github.com/johncreek">
              <img
                src="https://github.com/johncreek.png"
                width="24px"
                height="24px"
                alt="johncreek"
              />
            </a>
          </li>
        </ul>
      </article>
    )
  }
}

export default OctoCat
