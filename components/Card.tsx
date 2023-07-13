import React, { FC } from 'react'
import millify from 'millify'
import classNames from 'classnames';
type FollowingTypes = {
  name:string;
  number:number;
  change:number;
}
type PropsTypes={
  name:string;
  username:string;
  following:FollowingTypes;
}
const Card:FC<PropsTypes> = ({name,username,following}) => {
  const myClassName = classNames("w-full h-2 rounded-ss-lg rounded-se-lg",{
    "bg-facebook": name==="facebook",
    "bg-twitter": name==="twitter",
    "bg-gradient-to-r from-instagram-from to-instagram-to": name==="instagram",
    "bg-youtube": name==="youtube",
  })
  return (
    <div className={`
    w-full
    flex
    flex-col
    cursor-pointer
    `}>
      <div className={myClassName}>
      </div>
      <div className='
      w-full
      h-[220px]
      dark:bg-dark-card-bg
      bg-light-card-bg
      transition-colors
      duration-700
      ease-in-out
      rounded-es-lg
      rounded-ee-lg
      flex
      flex-col
      justify-between
      items-center
      py-6
      hover:dark:bg-dark-main-bg
      hover:bg-light-main-bg
      '>
        {/* top */}
        <div className={`
        flex
        items-center
        gap-2
        `}>
          <img src={`icon-${name}.svg`} width={20} height={20} alt=''/>
          <h1 className='
          dark:text-dark-text-1 
          text-light-text-1
          transition-colors
          duration-700
          ease-in-out
          text-sm
          '
          >
            {username}
          </h1>
        </div>
        {/* center */}
        <div className='
        flex
        flex-col
        items-center
        gap-[3px]
        '>
          <h1 className='
          text-5xl
          font-bold
          dark:text-dark-text-2
          text-light-text-2
          transition-colors
          duration-700
          ease-in-out
          '>
            {millify(following.number)}
          </h1>
          <h1 className='
          tracking-[5px]
          uppercase
          font-normal
          text-[12px]
          dark:text-dark-text-1
          text-light-text-1
          transition-colors
          duration-700
          ease-in-out
          '>
            {following.name}
          </h1>
        </div>
        {/* Bottom */}
        <div className={`
        flex
        items-center
        gap-1
        `}>
          <img src={following.change<0?`icon-down.svg`:`icon-up.svg`} width={10} height={10} alt=''/>
          <span className={following.change<0?'capitalize font-bold text-bright-red':"capitalize font-bold text-lime-green"}>
            {following.change<0? -following.change:following.change} today</span>
        </div>
      </div>
    </div>
  )
}

export default Card