import { Space, Table } from "antd";
import type { TableProps } from "antd";
import { TableAction } from "./tableAction";
import { TableData } from "./TableData";

type ColumnsType<T extends object> = TableProps<T>["columns"];

interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
}
const columns: ColumnsType<DataType> = [
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
        render: (text) => <a>{text}</a>,
    },
    {
        title: "Age",
        dataIndex: "age",
        key: "age",
    },
    {
        title: "Address",
        dataIndex: "address",
        key: "address",
    },
    {
        title: "Tags",
        key: "tags",
        dataIndex: "tags",
        render: (tags: string[]) => <TableData tags={tags} />
    },
    {
        title: "Action",
        key: "action",
        render: (_) => <TableAction />
    },
];

const data: DataType[] = [
    {
        key: "1",
        name: "John Brown",
        age: 32,
        address: "New York No. 1 Lake Park",
        tags: ["nice", "developer"],
    },
    {
        key: "2",
        name: "Jim Green",
        age: 42,
        address: "London No. 1 Lake Park",
        tags: ["loser"],
    },
    {
        key: "3",
        name: "Joe Black",
        age: 32,
        address: "Sydney No. 1 Lake Park",
        tags: ["cool", "teacher"],
    },
];

export function TableCustom() {
    return (
        <Table<DataType>
            columns={columns}
            pagination={{ position: ["topRight"] }}
            dataSource={data}
        />
    );
}
