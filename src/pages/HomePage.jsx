import React, {useState, useEffect} from "react";
import Layouts from "./../layout/Layouts";
import './style/HomePage.css'
import CardComponent from "../components/CardComponent";
import axios from "axios";
import DestinationCardComponent from "../components/DestinationCardComponent";

const HomePage = () => {
  const [destinations, setDestinations] = useState([])
  const getDestination = (() => {
    axios.get(import.meta.env.VITE_API_URL+'destination')
    .then((response) => {
      setDestinations(response.data.data.data)
    })
  });

  useEffect(() => {
    getDestination();
  },[]);

  return (
    <Layouts>
     <section id="hero" className="header flex items-center text-white px-12 text-center">
      <div>
        <h1 className="text-5xl capitalize font-bold mb-5">Jelajahi Dunia dengan Travelly!</h1>
        <p className="mb-10">Temukan pengalaman perjalanan yang tak terlupakan bersama Travelly! Kami menyediakan layanan tour guide profesional untuk memandu Anda menjelajahi destinasi impian. Mulai dari wisata alam, budaya, hingga petualangan, kami siap memberikan pengalaman terbaik dengan rencana perjalanan yang dipersonalisasi. Mari ciptakan kenangan indah di setiap langkah perjalanan Anda.</p>
        <a href="#features" className="border border-white p-3 rounded-xl hover:bg-white hover:text-black transition ease-in-out mt-5">Jelajahi Sekarang</a>
      </div>
     </section>

     <section id="features" className="px-12 py-10 text-center">
      <h1 className="text-center text-3xl font-bold">Features</h1>
      <h2 className="text-lg text-gray-500">We offer various conveniences such as:</h2>
      <div className="grid lg:grid-cols-3 gap-3 justify-center">
        <CardComponent icon="fas fa-hotel" header="Best Hotel" description="Stay in a renowned hotel with high level service and facilities" />
        <CardComponent icon="fa-solid fa-umbrella-beach" header="Best Tourguide" description="We bring in renowned tour guides with extensive experience and
            knowledge." />
        <CardComponent icon="fa-solid fa-plane" header="Best Destination" description="We will transport you to captivating tourist destinations that will delight your eyes and rejuvenate your spirit." />
      </div>
     </section>

     <section id="features" className="px-12 py-10 text-center bg-slate-200">
      <h1 className="text-center text-3xl font-bold">Our Destination</h1>
      <h2 className="text-lg  text-gray-500">We offer various conveniences such as:</h2>
      <div className="grid lg:grid-cols-4 gap-3 justify-center mb-10">
        {destinations.map((destination) => (
            <DestinationCardComponent data={destination} />
        ))}
      </div>
     </section>

    </Layouts>
  );
};

export default HomePage;
