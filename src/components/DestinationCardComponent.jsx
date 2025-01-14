import React from 'react'

const DestinationCardComponent = (props) => {

    const storageLink = import.meta.env.VITE_API_URL+'storage/';

    const rupiahformat = (value) =>
        new Intl.NumberFormat('id-ID', {
          style: 'currency',
          currency: 'IDR',
          minimumFractionDigits: 0
    }).format(value) + ',-';
      
  return (
    <a href={`/destination/${props?.data.id}`}>
        <div class="w-full h-full bg-white border border-gray-200 rounded-lg shadow mt-5 hover:border-gray-300 text-justify hover:drop-shadow-lg hover:cursor-pointer">
            <img src={props?.data?.images != null? storageLink+props?.data?.images : '/image/defaultDestination.jpeg'} alt="" className='w-full h-52 object-cover rounded-t-lg'/>
            <div className='p-3'>
                <p className='text-sm text-gray-700'>{props?.data?.destination}</p>
                <h5 class="text-xl font-bold tracking-tight text-gray-900 capitalize">{props?.data?.name} | {props?.data?.duration} {props?.data?.duration_type}</h5>
                <p class="mb-3 font-normal text-gray-700">{rupiahformat(props?.data?.price)}</p>
            </div>
        </div>
    </a>
  )
}

export default DestinationCardComponent