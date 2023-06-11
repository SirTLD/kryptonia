import React from 'react'

import FeaturesSections1 from './FeaturesSection1'
import FeaturesSections2 from './FeaturesSection2'
import FeaturesSections3 from './FeaturesSection3'

const Features = () => {
  return (
    <section className='pt-12 lg:pt-24 bg-violet'>
      <div className='container mx-auto'>
        <div className='text-center max-w-[758px] mx-auto mb-24'>
          <h2
            className='section-title'
            data-aos='fade-up'
            data-aos-offset='400'
          >
            Market sentiments, portfolio, and run the infrastructure of your
            choice
          </h2>
        </div>
        <FeaturesSections1 />
        <FeaturesSections2 />
        <FeaturesSections3 />
      </div>
    </section>
  )
}

export default Features
