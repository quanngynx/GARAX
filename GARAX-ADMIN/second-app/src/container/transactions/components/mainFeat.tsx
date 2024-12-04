"use client";

import { ButtonPrimary } from "@/components/button";
import { DropdownCustom } from "../../../components/dropdown/dropdown";
import { SettingOutlined } from "@ant-design/icons";
import { AutoCompletePrimary } from "@/components/autoComplete";

function MainFeat() {
    return (
        <div className="flex justify-between mb-5">
            <div className="flex border-1 border-black gap-4">
                <ButtonPrimary
                    nameBtn="Xuất tệp excel"
                    sizeType="large"
                    type="default"
                    className="border-1 border-solid border-[#01C8A9] shadow-custom"
                />
            </div>

            <div className="flex items-center gap-4">
                <AutoCompletePrimary placeHolder="Lọc theo người mua..."/>

                <DropdownCustom
                    icon={<SettingOutlined />}
                    nameDropdown="Tùy chỉnh cột"
                />
            </div>
        </div>
    );
}

export default MainFeat;
