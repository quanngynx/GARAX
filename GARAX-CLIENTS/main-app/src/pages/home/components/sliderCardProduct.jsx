import { useState  } from 'react';

import CardProducts from './cardProduct' 
import { cardProducts } from '../../../data/index'

const MultiCardCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    if (currentIndex > cardProducts.length - 4) {
      setCurrentIndex(0);
    }
  
    return (
      <div className="mt-10">
        <div className="w-full">
          <div className="relative flex overflow-hidden  group"> {/* ========= PArent ==========*/}
            <div  
            className="flex justify-center ease-in-out animate-infinite-scroll group-hover:paused rounded-l-lg"
            > {/* ========= Child ==========*/}
              {cardProducts.slice(currentIndex, currentIndex + 4).map((card, index) => (
                <CardProducts card={card} index={index} key={index} />
              ))}
            </div>

            <div 
            className="flex justify-center ease-in-out animate-infinite-scroll group-hover:paused rounded-r-lg"
            aria-hidden="true"
            > {/* ========= Child ==========*/}
              {cardProducts.slice(currentIndex, currentIndex + 4).map((card, index) => (
                <CardProducts card={card} index={index} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
};
  
  export default MultiCardCarousel;