import React from 'react'

const Card = () => {
  return (
    <div className={`
    w-full
    flex
    flex-col
    `}>
      <div className='w-full h-2 bg-dark-main-bg rounded-ss-lg rounded-se-lg'>
      </div>
      <div className='
      w-full
      h-[220px]
      bg-light-card-bg
      rounded-es-lg
      rounded-ee-lg
      flex
      flex-col
      justify-between
      items-center
      py-6
      '>
        {/* top */}
        <div className={`
        flex
        items-center
        gap-2
        `}>
          <img src='icon-facebook.svg' width={20} height={20} alt=''/>
          <h1>@peter</h1>
        </div>
        {/* center */}
        <div className='
        flex
        flex-col
        items-center
        gap-[2px]
        '>
          <h1 className='
          text-5xl
          font-bold
          '>
            3545
          </h1>
          <h1 className='
          tracking-[5px]
          uppercase
          font-normal
          text-[12px]
          '>
            followers
          </h1>
        </div>
        {/* Bottom */}
        <div className={`
        flex
        items-center
        gap-1
        `}>
          <img src='icon-up.svg' width={10} height={10} alt=''/>
          <span className='capitalize'>99 today</span>

        </div>
      </div>
    </div>
  )
}

export default Card