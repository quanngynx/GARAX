"use client";

import { Dispatch, SetStateAction, useState } from "react";
// import xlsx from 'xlsx-js-style';

import { ButtonPrimary } from "@/components/button";
import { DropdownCustom } from "@/components/dropdown/dropdown";
import { SettingOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { PATH_DASHBOARD } from "@/routes/paths";
// import { TDataListResponse } from "../types";

function MainFeat() {
    const [loading, setLoading]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false); 
    // region handle Navigate
    const router = useRouter()
    const handleNavigateToAddProd = () => {
        router.push(PATH_DASHBOARD.admin.products.add)
    }

    // region Handle export
    const onExport = async () : Promise<void> => {
        setLoading(true)

        try {
            // const dataList : TDataListResponse = getDataProduct()

            // const wb: xlsx.WorkBook = xlsx.utils.book_new();
            // const ws: xlsx.WorkSheet = xlsx.utils.aoa_to_sheet([]);

            // xlsx.utils.sheet_add_aoa(
            //     ws,
            //     [
            //       [
            //         {
            //           v: 'Tình trạng Serial',
            //           t: 's',
            //           s: { font: { name: 'Times New Roman', sz: 13, bold: true } },
            //         },
            //         {
            //           v: 'Sản phẩm',
            //           t: 's',
            //           s: { font: { name: 'Times New Roman', sz: 13, bold: true } },
            //         },
            //         {
            //           v: 'Model',
            //           t: 's',
            //           s: { font: { name: 'Times New Roman', sz: 13, bold: true } },
            //         },
            //         {
            //           v: 'Serial',
            //           t: 's',
            //           s: { font: { name: 'Times New Roman', sz: 13, bold: true } },
            //         },
            //         {
            //           v: 'Mã NPP',
            //           t: 's',
            //           s: { font: { name: 'Times New Roman', sz: 13, bold: true } },
            //         },
            //         {
            //           v: 'Tên NPP',
            //           t: 's',
            //           s: { font: { name: 'Times New Roman', sz: 13, bold: true } },
            //         },
            //         {
            //           v: 'Ngày tạo',
            //           t: 's',
            //           s: { font: { name: 'Times New Roman', sz: 13, bold: true } },
            //         },
            //       ],
            //     ],
            //     { origin: 'A1' },
            //   );

            // xlsx.utils.sheet_add_json(
            //     ws,
            //     activeDataList.map((activeData: ActiveData): unknown[] => [
            //       {
            //         v: getStatusActive(activeData.statusActive),
            //         t: 's',
            //         s: { font: { name: 'Times New Roman', sz: 13 } },
            //       },
            //       {
            //         v: activeData.categoryName ?? '',
            //         t: 's',
            //         s: { font: { name: 'Times New Roman', sz: 13 } },
            //       },
            //       {
            //         v: activeData.modelName ?? '',
            //         t: 's',
            //         s: { font: { name: 'Times New Roman', sz: 13 } },
            //       },
            //       {
            //         v: activeData.serial ?? '',
            //         t: 's',
            //         s: { font: { name: 'Times New Roman', sz: 13 } },
            //       },
            //       {
            //         v: activeData.customerIdActiveData ?? '',
            //         t: 's',
            //         s: { font: { name: 'Times New Roman', sz: 13 } },
            //       },
            //       {
            //         v: activeData.customerNameActiveData ?? '',
            //         t: 's',
            //         s: { font: { name: 'Times New Roman', sz: 13 } },
            //       },
            //       {
            //         v: convertToDateTimeString(activeData.createDate),
            //         t: 's',
            //         s: { font: { name: 'Times New Roman', sz: 13 } },
            //       },
            //     ]),
            //     {
            //       origin: 'A2',
            //       skipHeader: true,
            //     },
            //   );

            // xlsx.utils.book_append_sheet(wb, ws, 'Hàng hóa')

            // xlsx.writeFile(
            //     wb,
            //     `active-data-report-${convertToDateString(new Date().toString())}.xlsx`,
            //   );
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }
    return (
        <div className="flex justify-between mb-5">
            <div className="flex border-1 border-black gap-4">
                <ButtonPrimary
                    nameBtn="Thêm mới sản phẩm"
                    sizeType="large"
                    type="primary"
                    className="bg-[#00BA9D] border-1 border-solid border-[#01C8A9] shadow-custom"
                    handleFc={handleNavigateToAddProd}
                />
                <ButtonPrimary
                    nameBtn="Xuất tệp excel"
                    sizeType="large"
                    type="default"
                    className="border-1 border-solid border-[#01C8A9] shadow-custom"
                    handleFc={onExport}
                    isLoading={loading}
                />
            </div>

            <div className="flex items-center">
                <DropdownCustom
                    icon={<SettingOutlined />}
                    nameDropdown="Tùy chỉnh cột"
                />
            </div>
        </div>
    );
}

export default MainFeat;
