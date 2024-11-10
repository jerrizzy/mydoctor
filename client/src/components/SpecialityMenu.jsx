import React from 'react'
import { specialityData } from '../assets/assets'

const SpecialityMenu = () => {


  return (
    <div id="speciality">
        <h1>Find by Speciality</h1>
        <p>Siimply browse through our doctors' list</p>

        <div className='flex flex-col items-center gap-4 py-16 text-gray-800 '>
            {specialityData.map((item, index)=>(
                <Link key={index} to={`/doctors/${item.speciality}`}>
                    <img src={item.image} alt="" />
                    <p>{item.speciality}</p>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default SpecialityMenu