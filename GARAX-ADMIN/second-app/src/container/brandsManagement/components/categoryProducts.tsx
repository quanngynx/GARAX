"use client";

import { ButtonPrimary } from "@/components/button";
// import { DatePickerCustom } from "@/components/datePicker";
import { DropdownCustom } from "@/components/dropdown";
import OptionsOutline from "@/components/icons/optionsOutline";
// import { SettingOutlined, ToolOutlined } from "@ant-design/icons";

function CategoryProductsFilter() {
    return (
        <div className="flex justify-between items-center mb-5">
            <div className="flex flex-row gap-4">
                <div className="flex items-center">
                    <DropdownCustom
                        icon={<OptionsOutline />}
                        nameDropdown="Tùy chọn bổ sung"
                    />
                </div>
            </div>

            <div className="flex border-1 border-black gap-4">
                <ButtonPrimary
                    nameBtn="Áp dụng"
                    sizeType="large"
                    type="primary"
                    className="bg-[#00BA9D] border-1 border-solid border-[#01C8A9] shadow-custom"
                />
                <ButtonPrimary
                    nameBtn="Làm mới"
                    sizeType="large"
                    type="default"
                    className="border-1 border-solid border-[#01C8A9] shadow-custom"
                />
            </div>
        </div>
    );
}

export default CategoryProductsFilter;
