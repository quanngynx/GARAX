import { useState  } from 'react';

import CardProducts from './cardProduct' 

const cards = [
  {
    image: 'https://plus.unsplash.com/premium_vector-1727937751750-8674dbe0ef87?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Toyota Camry New',
    description: '3.5 D5 PowerPulse Momentum 5dr AWD…',
    range: '20 Miles',
    transmission: 'automation',
    fuel_type: 'Petrol',
    year: 2023,
    cost: 40000
  },
  {
    image: 'https://plus.unsplash.com/premium_vector-1727937751750-8674dbe0ef87?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'T-Cross – 2023',
    description: '4.0 D5 PowerPulse Momentum 5dr AWD…',
    range: '15 Miles',
    transmission: 'automation',
    fuel_type: 'Petrol',
    year: 2023,
    cost: 40000
  },
  {
    image: 'https://plus.unsplash.com/premium_vector-1727937751750-8674dbe0ef87?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'C-Class – 2023',
    description: '4.0 D5 PowerPulse Momentum 5dr AWD…',
    range: '40 Miles',
    transmission: 'automation',
    fuel_type: 'Petrol',
    year: 2023,
    cost: 40000
  },
  {
    image: 'https://plus.unsplash.com/premium_vector-1726096327053-ff2956070898?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'New GLC – 2023',
    description: '4.0 D5 PowerPulse Momentum 5dr AWD…',
    range: '50 Miles',
    transmission: 'automation',
    fuel_type: 'Petrol',
    year: 2023,
    cost: 40000
  },
  // ===========================================================================================
  {
    image: 'https://plus.unsplash.com/premium_vector-1727937751750-8674dbe0ef87?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Card 5',
    description: 'Info which directs to the other page. 7',
    range: '50 Miles',
    transmission: 'automation',
    fuel_type: 'Petrol',
    year: 2023,
    cost: 40000
  },
  {
    image: 'https://plus.unsplash.com/premium_vector-1727937751750-8674dbe0ef87?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Card 6',
    description: 'Info which directs to the other page. 8',
    range: '50 Miles',
    transmission: 'automation',
    fuel_type: 'Petrol',
    year: 2023,
    cost: 40000
  },
  {
    image: 'https://plus.unsplash.com/premium_vector-1727937751750-8674dbe0ef87?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Card 7',
    description: 'Info which directs to the other page. 8',
    range: '50 Miles',
    transmission: 'automation',
    fuel_type: 'Petrol',
    year: 2023,
    cost: 40000
  },
  {
    image: 'https://plus.unsplash.com/premium_vector-1727937751750-8674dbe0ef87?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Card 8',
    description: 'Info which directs to the other page. 1',
    range: '50 Miles',
    transmission: 'automation',
    fuel_type: 'Petrol',
    year: 2023,
    cost: 40000
  },
];

const MultiCardCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    if (currentIndex > cards.length - 4) {
      setCurrentIndex(0);
    }
  
    return (
      <div className="mt-10">
        <div className="w-full">
          <div className="relative flex overflow-hidden  group"> {/* ========= PArent ==========*/}
            <div  
            className="flex justify-center ease-in-out animate-infinite-scroll group-hover:paused rounded-l-lg"
            > {/* ========= Child ==========*/}
              {cards.slice(currentIndex, currentIndex + 4).map((card, index) => (
                <CardProducts card={card} index={index} key={index} />
              ))}
            </div>

            <div 
            className="flex justify-center ease-in-out animate-infinite-scroll group-hover:paused rounded-r-lg"
            aria-hidden="true"
            > {/* ========= Child ==========*/}
              {cards.slice(currentIndex, currentIndex + 4).map((card, index) => (
                <CardProducts card={card} index={index} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
};
  
  export default MultiCardCarousel;