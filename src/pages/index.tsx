import React, { useEffect, useState } from 'react'
import Card from '../../components/Card'
import OverviewCard from '../../components/OverviewCard'
import { data } from '../../public/data'
const Home = ({handleMode}) => {
  const [totalFollowers,setTotalFollowers] = useState(0)
  useEffect(()=>{
    let temp = 0;
    data.forEach(item=>{
      temp+=item.following.number
    })
    setTotalFollowers(temp)
  })
  return (
    <div className={`
    w-full
    min-h-screen
    relative
    flex
    flex-col
    gap-10
    z-10
    px-6
    py-9
    dark:bg-dark-main-bg
    bg-light-main-bg
    transition-colors
    duration-700
    ease-in-out
    lg:px-36
    `}>
      {/* Top */}
      <div className={`
      absolute
      top-0
      left-0
      -z-10
      w-full
      h-[250px]
      rounded-es-xl
      rounded-ee-xl
      dark:bg-dark-top-bg
      bg-light-top-bg
      transition-colors
      duration-700
      ease-in-out
      `}></div>

      {/* Top Section */}
      <div className={`
      flex
      flex-col
      gap-6
      lg:flex-row
      lg:items-center
      lg:justify-between
      `}>
        {/* Text */}
        <div className='
        flex
        flex-col
        gap-1
        '>
          <h1 className='
          text-2xl
          font-bold
          capitalize
          dark:text-dark-text-2
          text-light-text-2
          transition-colors
          duration-700
          ease-in-out
          '>
            Social Media dashboard
          </h1>
          <h3 className='
          text-lg
          font-bold
          capitalize
          dark:text-dark-text-1
          text-light-text-1
          transition-colors
          duration-700
          ease-in-out
          '>
            Total followes : {totalFollowers}
          </h3>
        </div>

        {/* Line and Dark Mode */}
        <div className='
        flex
        flex-col
        gap-3
        '>
          {/* Line */}
          <div className='
          w-full
          h-[1px]
          dark:bg-dark-text-1
          bg-light-text-1
          lg:hidden
          transition-colors
          duration-700
          ease-in-out
          '></div>
          {/* Dark Mode And Toggle */}
          <div className='
          flex
          items-center
          justify-between
          lg:justify-normal
          lg:gap-3
          '>
            <h1 className='
            text-lg
            font-bold
            capitalize
            dark:text-dark-text-1
            text-light-text-1
            transition-colors
            duration-700
            ease-in-out
            '>
              dark Mode
            </h1>
            <div onClick={()=>handleMode()} className='
            w-8
            h-4
            rounded-full
            dark:bg-gradient-to-r
            dark:to-toggle-to
            dark:from-toggle-from
            bg-toggle-light
            relative
            flex
            items-center
            cursor-pointer
            '>
              <div className='
               w-3
               h-3 
               rounded-full 
               bg-dark-text-2 
               absolute 
               dark:left-0 
               right-0 
               dark:bg-dark-card-bg 
               mx-[2px]
               transition-all
               duration-700
               ease-in-out
               '></div>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Container */}
      <div className='
      flex
      flex-col
      gap-6
      lg:flex-row
      '>
        {data.map((item,i)=>{
          return <Card key={i+item.name} following={item.following} username={item.username} name={item.name}/>
        })}
      </div>

      {/* Overview cards */}
      <div className={`

      flex
      flex-col
      gap-4
      `}>
        <h1 className={`
        text-2xl
        capitalize
        font-bold
        dark:text-dark-text-1
        text-light-text-1
        transition-colors
        duration-700
        ease-in-out
        `}>
          Overview - today
        </h1>

        {/* cards containers */}
        <div className={`
        flex
        flex-col
        gap-4
        lg:flex-row
        lg:flex-wrap
        `}>
          
          {data.map((item)=>{
           return <>
           {item.overview.map((ele)=>{
            return (<OverviewCard key={ele.name} name={ele.name} amount={ele.amount} change={ele.change} logo={`icon-${item.name}.svg`}/>)
           })}
           </>
          })}
        </div>
      </div>
      
    </div>
  )
}

export default Home