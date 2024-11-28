import PageHeader from "./components/pageHeader";
import CardProfile from "./components/cardProfile";
import CardNoti from "./components/cardNotifications";
import CardContact from "./components/cardContactInfo";

import MainProfile from "./components/mainProfile";

function ProfilePage() {
    return (
        <div className="w-full">
            <PageHeader />
            <div className="text-[#212121] text-[32px] font-semibold font-['Roboto'] leading-normal mb-4">
                Thông tin chi tiết
            </div>
            <div className="w-full flex mt-6">
                {/* Left */}
                <div className="mr-6">
                    <CardProfile />
                    <CardNoti />
                    <CardContact />
                </div>

                {/* Right */}
                <div className="w-full">
                    <MainProfile />
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;
