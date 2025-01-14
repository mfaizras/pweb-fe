import React from 'react'

export const HeaderComponent = ({height='h-[60vh]',bgImage='/image/img6.jpg',children}) => {
  return (
    <React.Fragment>
    <section id="header" className={`${height} bg-cover bg-gradient-to-t from-black to-gray-900`} style={{backgroundImage: `linear-gradient(
        rgba(4, 19, 31, 0.7),
        rgba(3, 25, 44, 0.7)
      ),
    url("${bgImage}")`}}>

      {children}
     </section>
    </React.Fragment>
  )
}
