import React from 'react'

const TopDoctors = () => {
  return (
    <div>
        <h1>Top Doctors to Book</h1>
        <p>Simply browse through our extensive list of trusted doctors.</p>
        <div>
            {doctors.slice(0,10).map((item, index)=>(
                <div> 
                    
                </div>
            ))}

        </div>
    </div>
  )
}

export default TopDoctors