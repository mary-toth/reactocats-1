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

            <OctoCat
              name={'Daftpunktocat-Thomas'}
              imgLink={'https://octodex.github.com//daftpunktocat-thomas/'}
              img={
                'https://octodex.github.com//images/daftpunktocat-thomas.gif'
              }
              numberOfCat={'#100:'}
              designerLink={'https://github.com/jeejkang'}
              designer={'https://github.com/jeejkang.png'}
              alt={'Daftpunktocat-Thomas'}
              designerAlt={'jeejkang'}
            />

            <OctoCat
              name={'Robotocat'}
              imgLink={'https://octodex.github.com//Robotocat/'}
              img={'https://octodex.github.com//images/Robotocat.png'}
              numberOfCat={'#92:'}
              designerLink={'https://github.com/jeejkang'}
              designer={'https://github.com/jeejkang.png'}
              alt={'Daftpunktocat-Thomas'}
              designerAlt={'jeejkang'}
            />

            <OctoCat
              name={'Spocktocat'}
              imgLink={'https://octodex.github.com//spocktocat/'}
              img={'https://octodex.github.com//images/spocktocat.png'}
              numberOfCat={'#21:'}
              designerLink={'https://github.com/cameronmcefee'}
              designer={'https://github.com/cameronmcefee.png'}
              alt={'Spoctocat'}
              designerAlt={'cameronmcfee'}
            />
          </section>
        </main>
      </>
    )
  }
}
