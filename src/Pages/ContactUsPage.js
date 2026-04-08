import React from 'react'
import { ContactUsHeader } from '../Components/ContactUs/ContactUsHeader'
import { ContactCard } from '../Components/ContactUs/ContactCard'
import { ContactForm } from '../Components/ContactUs/ContactForm'

const ContactUsPage = () => {
  return (
    <div>
    <ContactUsHeader />
    <ContactCard />
    <ContactForm />
    </div>
  )
}

export default ContactUsPage