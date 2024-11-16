import MediaProduct from './mediaProduct';
import ProfilePanel from  './profilePanel'
function mainProfile() {
    return ( 
        <div className="w-full px-[42px] py-[41px] bg-[#f5f6f7] rounded-2xl justify-center items-center flex">
          <div className='w-full flex flex-row justify-center items-start'>
          <MediaProduct />
          <ProfilePanel />
          </div>
        </div>
     );
}

export default mainProfile;