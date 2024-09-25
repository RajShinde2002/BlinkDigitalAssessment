import React from 'react'
import Tab from './Tab'
import { useSelector } from 'react-redux'
import Banner from './Banner'

const Main = () => {
  let tabs = useSelector((state)=>state.pricing.topLevelKeys)
  tabs = [...tabs].reverse()
  return (
    <>
    <Banner />
    <main className='main'>
        <Tab tabs={tabs}/>
    </main>
    </>
  )
}

export default Main