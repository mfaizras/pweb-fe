import React, {useState, useEffect} from 'react'
import Layouts from '../layout/Layouts'
import { HeaderComponent } from '../components/HeaderComponent'
import { useParams } from 'react-router'
import axios from 'axios'

const ShowDestinationPage = () => {
    let params = useParams()
    const id = params.id;

    const storageLink = import.meta.env.VITE_API_URL+'storage/';

    const [destinations, setDestinations] = useState([])
    const getDestination = (() => {
        axios.get(import.meta.env.VITE_API_URL+'destination/'+id)
        .then((response) => {
        setDestinations(response.data.data)
        })
    });

    useEffect(() => {
        getDestination();
    },[]);

  return (
    <Layouts>
        <HeaderComponent height='h-[30vh]' bgImage={destinations?.images != null? storageLink+destinations?.images : '/image/defaultDestination.jpeg'}>
        <div className="text-center h-full w-full flex items-center justify-center text-white">
            <h1 className="text-3xl capitalize font-bold my-auto">{destinations.name}</h1>
        </div>
        </HeaderComponent>
        <section className='w-full p-10'>
            <h1 className='text-3xl font-bold capitalize'>{destinations.name}</h1>
            <h2 className='text-lg italic capitalize text-gray-600'>{destinations.duration} {destinations.duration_type} Tour | {destinations.destination}</h2>
            <p>{destinations.description}</p>
        </section>
    </Layouts>
  )
}

export default ShowDestinationPage