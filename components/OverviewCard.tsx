import millify from 'millify'
import React from 'react'

const OverviewCard = ({name,amount,change,logo}) => {
  return (
    <div className={`
    w-full
    h-[130px]
    lg:w-[20%]
    lg:flex-grow
    dark:bg-dark-card-bg
    hover:dark:bg-dark-main-bg
    hover:bg-light-main-bg
    cursor-pointer
    bg-light-card-bg
    transition-colors
    duration-700
    ease-in-out
    rounded-lg
    flex
    flex-col
    justify-between
    p-6
    `}>
        <div className='
        flex
        items-center
        justify-between
        '>
            <h1 className='
            capitalize
            font-bold
            dark:text-dark-text-1
            text-light-text-1
            transition-colors
            duration-700
            ease-in-out
            '>
                {name}
            </h1>
            <img src={logo} width={20} height={20}/>
        </div>
        <div className='
        flex
        items-end
        justify-between
        '>
            <h1 className='
            font-bold
            text-3xl
            dark:text-dark-text-2
            text-light-text-2
            transition-colors
            duration-700
            ease-in-out
            '>
               {millify(amount) }
            </h1>
           <div className='flex items-center gap-1'>
            <img src={change<0?"icon-down.svg":"icon-up.svg"} width={10} height={10}/>
            <span className={change<0?`text-[12px] font-bold text-bright-red`:`text-[12px] font-bold text-lime-green`}>
                {change<0?-change:change}%</span>
           </div>
        </div>
    </div>
  )
}

export default OverviewCard