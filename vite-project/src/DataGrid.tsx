import React from 'react'
import Tour from './Tour'

const DataGrid = ({tours}) => {
  return (
    <section>
      
        {
            tours.map((tour) => {
              return <Tour key={tour.id} {...tour}></Tour>
            })
          }
      
    </section>
  )
}

export default DataGrid
