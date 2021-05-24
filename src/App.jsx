// @ts-ignore

import React, { Component } from 'react'
import CatHeader from './components/CatHeader'
import OctoCat from './components/OctoCat'

export class App extends Component {
  render() {
    return (
      <>
        <CatHeader />
        <main>
          <section>
            <OctoCat name={'Vinyltocat'} />

            <article>
              <a href="https://octodex.github.com//vinyltocat/">
                <img
                  className="cat"
                  src="https://octodex.github.com//images/vinyltocat.png"
                  width="400"
                  height="400"
                  alt="Vinyltocat"
                />
              </a>
              <ul>
                <li>
                  #136:
                  <a href="https://octodex.github.com//vinyltocat/">
                    <strong>Vinyltocat</strong>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/suziejurado">
                    <img
                      src="https://github.com/suziejurado.png"
                      width="24px"
                      height="24px"
                      alt="suziejurado"
                    />
                  </a>
                </li>
              </ul>
            </article>

            <article>
              <a href="https://octodex.github.com//snowtocat/">
                <img
                  className="cat"
                  src="https://octodex.github.com//images/snowtocat_final.jpg"
                  width="400"
                  height="400"
                  alt="Snowtocat"
                />
              </a>
              <ul>
                <li>
                  #134:
                  <a href="https://octodex.github.com//snowtocat/">
                    <strong>Snowtocat</strong>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/heyhayhay">
                    <img
                      src="https://github.com/heyhayhay.png"
                      width="24px"
                      height="24px"
                      alt="suziejurado"
                    />
                  </a>
                </li>
              </ul>
            </article>

            <article>
              <a href="https://octodex.github.com//mountietocat/">
                <img
                  className="cat"
                  src="https://octodex.github.com//images/mountietocat.png"
                  width="400"
                  height="400"
                  alt="Mountietocat"
                />
              </a>
              <ul>
                <li>
                  #115:
                  <a href="https://octodex.github.com//mountietocat/">
                    <strong>Mountietocat</strong>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/jeejkang">
                    <img
                      src="https://github.com/jeejkang.png"
                      width="24px"
                      height="24px"
                      alt="jeejkang"
                    />
                  </a>
                </li>
              </ul>
            </article>
            <article>
              <a href="https://octodex.github.com//daftpunktocat-thomas/">
                <img
                  className="cat"
                  src="https://octodex.github.com//images/daftpunktocat-thomas.gif"
                  width="400"
                  height="400"
                  alt="Mountietocat"
                />
              </a>
              <ul>
                <li>
                  #100:
                  <a href="https://octodex.github.com//daftpunktocat-thomas/">
                    <strong>Daftpunktocat-Thomas</strong>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/jeejkang">
                    <img
                      src="https://github.com/jeejkang.png"
                      width="24px"
                      height="24px"
                      alt="jeejkang"
                    />
                  </a>
                </li>
              </ul>
            </article>
            <article>
              <a href="https://octodex.github.com//Robotocat/">
                <img
                  className="cat"
                  src="https://octodex.github.com//images/Robotocat.png"
                  width="400"
                  height="400"
                  alt="Robotocat"
                />
              </a>
              <ul>
                <li>
                  #92:
                  <a href="https://octodex.github.com//Robotocat/">
                    <strong>Robotocat</strong>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/jeejkang">
                    <img
                      src="https://github.com/jeejkang.png"
                      width="24px"
                      height="24px"
                      alt="Octonaut"
                    />
                  </a>
                </li>
              </ul>
            </article>

            <article>
              <a href="https://octodex.github.com//spocktocat/">
                <img
                  className="cat"
                  src="https://octodex.github.com//images/spocktocat.png"
                  width="400"
                  height="400"
                  alt="Spoctocat"
                />
              </a>
              <ul>
                <li>
                  #21:
                  <a href="https://octodex.github.com//spocktocat/">
                    <strong>Spoctocat</strong>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/cameronmcefee">
                    <img
                      src="https://github.com/cameronmcefee.png"
                      width="24px"
                      height="24px"
                      alt="cameronmcefee"
                    />
                  </a>
                </li>
              </ul>
            </article>
          </section>
        </main>
      </>
    )
  }
}
