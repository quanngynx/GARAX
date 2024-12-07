import ProfilePanel from  './profilePanel'
import AdminPanel from './administrationPanel'
function mainProfile() {
    return ( 
        <div className="w-full px-[24px] pt-6 pb-2 bg-[#e2e8f0] rounded-xl justify-center items-center flex">
          <div className='w-full flex flex-col justify-center items-center'>
          <ProfilePanel />
          <AdminPanel />
          </div>
        </div>
     );
}

export default mainProfile;