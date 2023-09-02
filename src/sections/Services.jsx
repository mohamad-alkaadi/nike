import React from 'react'
import {services} from '../constants/'
import ServiceCard from '../components/ServiceCard'

const Services = () => {
  return (
    <section className='max-container flex justify-center flex-wrap gap-9'>
      {services.map((service) => (
        <ServiceCard key={service.label} {...service}/>
      ))}
    </section>
  )
}

export default Services

//The ...service syntax is called spread attributes in JSX.
// It means that all the properties of the service object are passed as props to the ServiceCard component.