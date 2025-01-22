import React from 'react'
import { ComputersCanvas } from '../../components/canvas'

const Test = ({scene}) => {
  return (
    <div className='w-full h-[100vh] lg:mt-36 flex justify-center items-center'>

    <ComputersCanvas scene={scene} />

    </div>
  )
}

export default Test