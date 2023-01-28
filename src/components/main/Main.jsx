import React from 'react'
import style from "./Main.module.css"
import FeaturedSection from './FeaturedSection/FeaturedSection'
import NewSection from './NewSection/NewSection'
import News from './NewsSection/News'

function Main() {
  return (
    <div className={style.main}>
        <FeaturedSection />
        <NewSection />
        <News />
    </div>
  )
}

export default Main