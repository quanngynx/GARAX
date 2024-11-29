"use client";

import { ButtonPrimary } from "@/components/button";
import { DropdownCustom } from '../../../components/dropdown/dropdown';

function MainFeat() {
    return (
        <div className="flex justify-between mb-5">
            <div className="flex border-1 border-black gap-4">
                <ButtonPrimary
                    nameBtn="Thêm mới sản phẩm"
                    sizeType="large"
                    type="primary"
                    className="bg-[#00BA9D] border-1 border-solid border-[#01C8A9] shadow-custom"
                />
                <ButtonPrimary
                    nameBtn="Xuất tệp excel"
                    sizeType="large"
                    type="default"
                    className="border-1 border-solid border-[#01C8A9] shadow-custom"
                />
            </div>

            <div className="flex items-center">
                <DropdownCustom nameDropdown="Tùy chỉnh cột"/>
            </div>
        </div>
    );
}

export default MainFeat;
