import React, { Component } from 'react'

class OctoCat extends Component {
  render() {
    return (
      <article>
        <a href={this.props.imgLink}>
          <img
            className="cat"
            src={this.props.img}
            width="400"
            height="400"
            alt={this.props.alt}
          />
        </a>
        <ul>
          <li>
            {this.props.numberOfCat}
            <a href={this.props.imgLink}>
              <strong>{this.props.name}</strong>
            </a>
          </li>
          <li>
            <a href={this.props.designerLink}>
              <img
                src={this.props.designer}
                width="24px"
                height="24px"
                alt={this.props.designerAlt}
              />
            </a>
          </li>
        </ul>
      </article>
    )
  }
}

export default OctoCat
