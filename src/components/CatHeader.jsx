import React, { Component } from 'react'

class CatHeader extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul className="header-1">
            <li>
              <a href="#">
                <img
                  className="headerimg"
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  width="45"
                  height="45"
                  alt="GithubLogo"
                />
              </a>
            </li>
            <li>
              <a className="octodex" href="#">
                Octodex
              </a>
            </li>
            <li>
              <a className="home" href="#">
                Home
              </a>
            </li>
            <li>
              <a href="https://octodex.github.com/faq/">FAQ</a>
            </li>
          </ul>
        </nav>
        <nav>
          <ul className="header-2">
            <li>
              <a
                className="twitter-link"
                href="https://twitter.com/githubdesign"
              >
                Follow us on Twitter
              </a>
            </li>
            <li>
              <a className="github-link" href="https://github.com/">
                Back to GitHub.com
              </a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default CatHeader
