import React, {useState, useEffect} from "react";
import Layouts from "./../layout/Layouts";
import './style/HomePage.css'
import CardComponent from "../components/CardComponent";
import axios from "axios";
import DestinationCardComponent from "../components/DestinationCardComponent";
import { HeaderComponent } from "../components/HeaderComponent";

const DestinationPage = () => {
    const [destinations, setDestinations] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [nextPageUrl, setNextPageUrl] = useState(import.meta.env.VITE_API_URL + 'destination');
    const [hasMore, setHasMore] = useState(true);

    const getDestinations = async () => {
        if (!nextPageUrl || isLoading) return;

        try {
        setIsLoading(true);
        const response = await axios.get(nextPageUrl);
        const { data } = response.data;

        setDestinations(destinations.concat(data.data));
        setNextPageUrl(data.next_page_url);
        setHasMore(data.next_page_url !== null);
        } catch (error) {
        console.error('Error fetching destinations:', error);
        } finally {
        setIsLoading(false);
        }
    };

    useEffect(() => {
        getDestinations();
      }, []);
    
  return (
    <Layouts>
     <HeaderComponent>
     <div className="text-center h-full w-full flex items-center justify-center text-white">
        <h1 className="text-5xl capitalize font-bold my-auto">Destination</h1>
      </div>
     </HeaderComponent>

     <section id="features" className="px-12 py-10 text-center">
      <h1 className="text-center text-3xl font-bold">Our Destination</h1>
      <h2 className="text-lg  text-gray-500">We offer various conveniences such as:</h2>
      <div className="grid lg:grid-cols-4 gap-3 justify-center">
        {destinations.map((destination) => (
            <DestinationCardComponent data={destination} />
        ))}
      </div>

      <div className="text-center mt-8">
          {hasMore ? (
            <button
              onClick={getDestinations}
              disabled={isLoading}
              className="border border-blue-400 hover:bg-blue-400 text-blue-400 hover:text-white rounded-full font-semibold py-3 px-8 transition-colors duration-200 disabled:opacity-50"
            >
              {isLoading ? 'Loading...' : 'Show More'}
            </button>
          ) : (
            <p className="text-gray-600">No more destinations to load.</p>
          )}
        </div>

     </section>

    </Layouts>
  );
};

export default DestinationPage;
