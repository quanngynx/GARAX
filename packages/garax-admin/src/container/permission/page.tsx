import { DropdownCustom } from "@/components/dropdown";
import OptionsOutline from "@/components/icons/optionsOutline";
import { TablePermission } from "./components";

function PermissionPage() {
    return (
        <div className="pt-6">
            <DropdownCustom
                icon={<OptionsOutline />}
                nameDropdown="Tùy chọn bổ sung"
            />

            <TablePermission />
        </div>
    );
}

export default PermissionPage;