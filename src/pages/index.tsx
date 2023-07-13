import React from 'react'
import Card from '../../components/Card'
import OverviewCard from '../../components/OverviewCard'

const Home = () => {
  return (
    <div className={`
    w-full
    min-h-screen
    bg-twitter
    relative
    flex
    flex-col
    gap-10
    z-10
    px-6
    py-9
    `}>
      {/* Top */}
      <div className={`
      absolute
      top-0
      left-0
      -z-10
      w-full
      h-[300px]
      rounded-es-xl
      rounded-ee-xl
      bg-light-top-bg
      `}></div>

      {/* Top Section */}
      <div className={`
      flex
      flex-col
      gap-6
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
          '>
            Social Media dashboard
          </h1>
          <h3 className='
          text-lg
          font-bold
          capitalize
          '>
            Total followes : 23,566
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
          bg-dark-main-bg
          '></div>
          {/* Dark Mode And Toggle */}
          <div className='
          flex
          items-center
          justify-between
          '>
            <h1 className='
            text-lg
            font-bold
            capitalize
            '>
              dark Mode
            </h1>
            <div>Toggle</div>
          </div>
        </div>
      </div>

      {/* Cards Container */}
      <div className='
      flex
      flex-col
      gap-6
      '>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      {/* Overview cards */}
      <div className={`
      w-full
      flex
      flex-col
      gap-4
      `}>
        <h1 className={`
        text-2xl
        capitalize
        font-bold
        `}>
          Overview - today
        </h1>

        {/* cards containers */}
        <div className={`
        flex
        flex-col
        gap-4
        `}>
          <OverviewCard/>
          <OverviewCard/>
          <OverviewCard/>
        </div>
      </div>
    </div>
  )
}

export default Home