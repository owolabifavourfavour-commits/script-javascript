import React from 'react'
import HeroService from '../component/servicePageComponent/heroService'
import WhyChoose from '../component/servicePageComponent/whyChoose'
import MoreService from '../component/servicePageComponent/moreService'

const ServicePages = () => {
  return (
    <div>
      <HeroService />
      <WhyChoose />
      <MoreService />
    </div>
  )
}

export default ServicePages