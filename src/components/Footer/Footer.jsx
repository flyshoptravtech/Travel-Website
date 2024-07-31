import React from 'react'
import FooterText from './FooterText'
import LoginModal from '../../modals/LoginModal'
import InvoiceModal from '../../modals/InvoiceModal'

const Footer = () => {
  return (
    <>
      <FooterText/>
      <LoginModal/>
      <InvoiceModal/>
    </>
  )
}

export default Footer