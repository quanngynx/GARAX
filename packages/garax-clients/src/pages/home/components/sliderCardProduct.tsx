import { useState  } from 'react';

import CardProducts from './cardProduct' 
import { cardProducts } from '@/__mock__/index'
import { Carousel } from 'antd';
import { PrevArrow, NextArrow } from '@/components/carousel';

const MultiCardCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    if (currentIndex > cardProducts.length - 4) {
      setCurrentIndex(0);
    }
  
    return (
      // <div className="mt-10">
      //   <div className="w-full">
      //     <div className="relative flex overflow-hidden  group"> {/* ========= PArent ==========*/}
      //       <div  
      //       className="flex justify-center ease-in-out animate-infinite-scroll group-hover:paused rounded-l-lg"
      //       > {/* ========= Child ==========*/}
      //         {cardProducts.slice(currentIndex, currentIndex + 4).map((card, index) => (
      //           <CardProducts 
      //           card={card} 
      //           index={index} 
      //           key={index} 
      //           />
      //         ))}
      //       </div>

      //       <div 
      //       className="flex justify-center ease-in-out animate-infinite-scroll group-hover:paused rounded-r-lg"
      //       aria-hidden="true"
      //       > {/* ========= Child ==========*/}
      //         {cardProducts.slice(currentIndex, currentIndex + 4).map((card, index) => (
      //           <CardProducts card={card} index={index} key={index} />
      //         ))}
      //       </div>
      //     </div>
      //   </div>
      // </div>
      <Carousel 
          arrows
          autoplay
          prevArrow={<PrevArrow />}
          nextArrow={<NextArrow />}
          slidesToShow={4}    
          slidesToScroll={4} 
          autoplaySpeed={3000}
          swipeToSlide={true}
          lazyLoad="ondemand"
          responsive={[
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ]}
          dots={false}
        >
          {cardProducts.map((card, index) => (
            <CardProducts 
            card={card} 
            index={index} 
            key={index} 
            />
          ))}
        </Carousel>
    );
};
  
  export default MultiCardCarousel;