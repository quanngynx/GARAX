import PageHeader from "./components/pageHeader";
import CardProfile from "./components/cardProfile";
import CardNoti from "./components/cardNotifications";
import CardContact from "./components/cardContactInfo";

import MainProfile from "./components/mainProfile";

function ProfilePage() {
    return (
        <div className="">
            <PageHeader />

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
