import { Space } from "antd";
// import Link from "next/link";
import { EditOutlined } from '@ant-design/icons';
// import { Dispatch, SetStateAction } from "react";

// interface ITableStateAction {
//     param: string
//     setParam: Dispatch<SetStateAction<string>>
// }

interface ITableAction {
    handleSetParam: () => void
    handleOpenForm: () => void
}
export function TableAction({ 
    handleSetParam,
    handleOpenForm 
}: ITableAction) {

    return (
        <Space size="middle">
            <button className="p-2"
                onClick={handleSetParam}>
                <EditOutlined />
            </button>
            <button className="px-2 py-1"
                onClick={handleOpenForm}>
                <a className="underline">Xóa</a>
            </button>
        </Space>
    );
}
