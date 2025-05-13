import { TableColumnsType, Tag } from "antd";
import { PermissionModel } from "@/apis/models";
type TTags = {
    tags: string[];
};

export const columns: TableColumnsType<PermissionModel> = [
    {
        title: "Danh mục",
        dataIndex: "fullname",
        key: "fullname",
        render: (text: string) => <a>{text}</a>,
        width: 75,
    },
    {
        title: "Xem",
        dataIndex: "phone",
        key: "phone",
        width: 25,
    },
    {
        title: "Thêm",
        dataIndex: "paymentStatus",
        key: "paymentStatus",
        width: 25,
    },
    {
        title: "Sửa",
        dataIndex: "isReceiveAtStore",
        key: "isReceiveAtStore",
        width: 25,
    },
    {
        title: "Xóa",
        dataIndex: "paymentMethod",
        key: "paymentMethod",
        width: 25,
    },
    {
        title: "Nhập",
        dataIndex: "subTotalFromProd",
        key: "subTotalFromProd",
        width: 25,
    },
    {
        title: "Xuất",
        key: "shippingFee",
        dataIndex: "shippingFee",
        width: 50,
    },
];

export const rows = []

