import React from 'react'

const OverviewCard = () => {
  return (
    <div className={`
    w-full
    h-[130px]
    bg-light-card-bg
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
            '>
                Page views
            </h1>
            <img src='icon-facebook.svg' width={20} height={20}/>
        </div>
        <div className='
        flex
        items-center
        justify-between
        '>
            <h1 className='
            font-bold
            text-3xl
            '>
              85
            </h1>
           <div className='flex items-center gap-1'>
            <img src='icon-down.svg' width={10} height={10}/>
            <span className='text-[10px] font-bold'>3%</span>
           </div>
        </div>
    </div>
  )
}

export default OverviewCard