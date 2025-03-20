import { SignIn } from '@clerk/nextjs'
import React from 'react'

const Page = () => {
  return (
    <div className='flex justify-center pt-10'>
  <SignIn/>
    </div>
  )
}

export default Page
