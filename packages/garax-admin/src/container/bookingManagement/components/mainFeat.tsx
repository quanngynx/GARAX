"use client";

import { ButtonPrimary } from "@/components/button";
import { DropdownCustom } from "../../../components/dropdown/dropdown";
import { SettingOutlined } from "@ant-design/icons";
import { AutoCompletePrimary } from "@/components/autoComplete";
import { useRouter } from "next/navigation";
import { PATH_DASHBOARD } from "@/routes/paths";
import {useState} from "react";

function MainFeat() {
    const router = useRouter();
    const [modalOpen, setModalOpen] = useState(false);
    
    const handleNavigateToCreate = () => {
        router.push(PATH_DASHBOARD.admin.products.add);
    };
    return (
        <div className="flex justify-between mb-5">
            <div className="flex border-1 border-black gap-4">
                <ButtonPrimary
                    nameBtn="Tạo lịch hẹn"
                    sizeType="large"
                    type="primary"
                    className="bg-[#00BA9D] border-1 border-solid border-[#01C8A9] shadow-custom"
                    handleFc={handleNavigateToCreate}
                />

                <ButtonPrimary
                    nameBtn="Xuất tệp excel"
                    sizeType="large"
                    type="default"
                    className="border-1 border-solid border-[#01C8A9] shadow-custom"
                />
            </div>

            <div className="flex items-center gap-4">
                <AutoCompletePrimary placeHolder="Lọc theo tên khách hàng..." />

                <DropdownCustom
                    icon={<SettingOutlined />}
                    nameDropdown="Tùy chỉnh cột"
                />
            </div>
        </div>
    );
}

export default MainFeat;
