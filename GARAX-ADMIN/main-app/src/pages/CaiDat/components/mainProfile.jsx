import ProfilePanel from  './profilePanel'
import AdminPanel from './administrationPanel'
function mainProfile() {
    return ( 
        <div className="w-full px-[42px] py-[41px] bg-[#f5f6f7] rounded-2xl justify-center items-center flex">
          <div className='w-full flex flex-col justify-center items-center'>
          <ProfilePanel />
          <AdminPanel />
          </div>
        </div>
     );
}

export default mainProfile;