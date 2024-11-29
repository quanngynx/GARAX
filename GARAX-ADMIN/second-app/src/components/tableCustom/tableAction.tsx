import { Space } from "antd";
import Link from "next/link";
import { EditOutlined } from '@ant-design/icons';

export function TableAction() {
    return (
        <Space size="middle">
            <Link href={""}>
            <EditOutlined />
            </Link>
            <a>Delete</a>
        </Space>
    );
}
