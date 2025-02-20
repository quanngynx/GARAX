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
}
export function TableAction({ handleSetParam } : ITableAction) {

    return (
        <Space size="middle">
            <button className="p-2"
            onClick={handleSetParam}>
            <EditOutlined />
            </button>
            <a>Xóa</a>
        </Space>
    );
}
