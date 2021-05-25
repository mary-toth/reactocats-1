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
            <OctoCat
              name={'Yogitocat'}
              imgLink={'https://octodex.github.com//yogitocat/'}
              img={'https://octodex.github.com//images/yogitocat.png'}
              numberOfCat={'#153:'}
              designerLink={'https://github.com/johncreek'}
              designer={'https://github.com/johncreek.png'}
              alt={'Yogitocat'}
              designerAlt={'johncreek'}
            />

            <OctoCat
              name={'Vinyltocat'}
              imgLink={'https://octodex.github.com//vinyltocat/'}
              img={'https://octodex.github.com//images/vinyltocat.png'}
              numberOfCat={'#136:'}
              designerLink={'https://github.com/suziejurado'}
              designer={'https://github.com/suziejurado.png'}
              alt={'Vinyltocat'}
              designerAlt={'suziejurado'}
            />

            <OctoCat
              name={'Snowtocat'}
              imgLink={'https://octodex.github.com//snowtocat/'}
              img={'https://octodex.github.com//images/snowtocat_final.jpg'}
              numberOfCat={'#134:'}
              designerLink={'https://github.com/heyhayhay'}
              designer={'https://github.com/heyhayhay.png'}
              alt={'Snowtocat'}
              designerAlt={'heyhayhay'}
            />

            <OctoCat
              name={'Mountietocat'}
              imgLink={'https://octodex.github.com//mountietocat/'}
              img={'https://octodex.github.com//images/mountietocat.png'}
              numberOfCat={'#115:'}
              designerLink={'https://github.com/jeejkang'}
              designer={'https://github.com/jeejkang.png'}
              alt={'Mountietocat'}
              designerAlt={'jeejkang'}
            />

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
