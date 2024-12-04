import { Space } from "antd";
// import Link from "next/link";
import { EditOutlined } from '@ant-design/icons';
import { SetStateAction } from "react";

interface ITableStateAction {
    param: string
    setParam: SetStateAction<string>
}

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
            <a>Delete</a>
        </Space>
    );
}
