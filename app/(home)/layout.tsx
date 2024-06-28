import Footer from '@/components/homepage/common/Footer';
import Header from '@/components/homepage/common/Header';
import React from 'react'


type Props = {
    children:React.ReactNode;
}

const HomePagelayout = ({children} : Props) => {
  return (
    <>
     <Header/>
     {children}
     <Footer/> 
    </>
  )
}

export default HomePagelayout
