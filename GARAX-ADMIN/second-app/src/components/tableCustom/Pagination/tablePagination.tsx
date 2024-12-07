import { DropdownCustom } from "../../dropdown";
import { PaginationOutline } from "../../icons";
import { InputNumberCustom } from "../../inputNumber";

export function TablePagination() {
    return (
        <div className="w-full flex justify-between items-center my-6">
            <DropdownCustom
                nameDropdown="Số bản ghi/trang"
                icon={<PaginationOutline />}
            />
            <div className="flex flex-row gap-4 items-center">
                <div className="text-[14px] font-normal font-sans">
                    Đi đến trang:
                </div>
                <InputNumberCustom />
            </div>
        </div>
    );
}
