import car1 from '../../../assets/icons/car1.svg';
import car2 from '../../../assets/icons/car2.svg'
function CarServiceSection() {
  return (
    <section className="flex flex-col items-center md:flex-col md:justify-center px-8 py-12 gap-8">
      {/* Image Section */}
      <div className='flex flex-row items-center md:flex-row md:justify-center'>
      <div className="ld:flex hidden space-x-4 items-end">
        <div className="w-48 h-48 bg-gray-200 rounded-lg overflow-hidden">
          {/* Small Image */}
          <img
            src={car1} 
            alt="Car 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-64 h-80 bg-gray-200 rounded-lg overflow-hidden">
          {/* Large Image */}
          <img
            src={car2} 
            alt="Car 2"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="max-w-md text-center md:text-left mt-8 md:mt-0 md:ml-12">
        <h2 className="text-3xl text-black font-semibold mb-4">The Best Thing For Our Car</h2>
        <p className="text-gray-600  mb-6">
          Here are the reasons why you should choose our car repair service:
        </p>
        <ul className="space-y-2 mb-6">
          <li className="text-black flex items-center">
            <span className="text-blue-500  mr-2">✔</span> Quality services
          </li>
          <li className="flex items-center text-black">
            <span className="text-blue-500  mr-2">✔</span> Modern equipment
          </li>
          <li className="flex items-center text-black">
            <span className="text-blue-500 mr-2">✔</span> Quick turnaround time
          </li>
        </ul>
        <button className="px-6 py-2 bg-blue-500 text-white  font-semibold rounded-lg hover:bg-blue-600">
          Get Started
        </button>
      </div>
      </div>

      <div className="hidden sm:flex space-x-12 mt-12 text-black md:mt-0 text-center py-16 gap-16">
        <div>
          <p className="text-2xl text-black font-semibold">836K</p>
          <p className="text-gray-600 ">Orders</p>
        </div>
        <div>
          <p className="text-2xl text-black font-semibold">738M</p>
          <p className="text-gray-600">Dealer Reviews</p>
        </div>
        <div>
          <p className="text-2xl text-black font-semibold">231K</p>
          <p className="text-gray-600">Visitors Per Day</p>
        </div>
        <div>
          <p className="text-2xl text-black font-semibold">2.03M</p>
          <p className="text-gray-600">Good Responds</p>
        </div>
      </div>
    </section>
  );
}

export default CarServiceSection;
