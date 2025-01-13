import React from 'react'

const CardComponent = (props) => {
  return (
<div class="w-full lg:max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow mt-5 hover:border-gray-300">
    <h3 className='text-3xl'>
        <i className={props?.icon}></i>
    </h3>
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{props?.header}</h5>
    <p class="mb-3 font-normal text-gray-700">{props?.description}</p>
</div>

  )
}

export default CardComponent