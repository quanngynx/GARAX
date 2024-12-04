
import CardProfile from "./components/cardProfile";
import CardNoti from "./components/cardNotifications";
import CardContact from "./components/cardContactInfo";

import MainProfile from "./components/mainProfile";
import { PageHeaderCustom } from "@/components/pageHeader";

function ProfilePage() {
    return (
        <div className="w-full">
            <PageHeaderCustom namePage="Thông tin cá nhân" />
            
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
