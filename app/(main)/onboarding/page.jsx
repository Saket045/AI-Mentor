import { industries } from '@/data/industries'
import React from 'react'
import OnboardingPageForm from './_components/onboarding-page-form'
import { getUserOnboardingStatus } from '@/actions/user'
import { redirect } from 'next/navigation'

const OnboardingPage = () => {
  const {onboarded}= getUserOnboardingStatus();

  if(onboarded){
    redirect("/dashboard");
  }

  return (
    <div >
       <OnboardingPageForm industries={industries}/>
    </div>
  )
}

export default OnboardingPage
