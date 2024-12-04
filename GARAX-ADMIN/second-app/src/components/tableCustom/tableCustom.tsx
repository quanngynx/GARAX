import { Table } from "antd";
import type { TableProps } from "antd";
import { TableAction } from "./tableAction";
import { TableData } from "./TableData";
// import { PATH_DASHBOARD } from "@/routes/paths";

type ColumnsType<T extends object> = TableProps<T>["columns"];

interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
}

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



export default function TableCustom() {
    // const router = useRouter()
// PATH_DASHBOARD.admin.products.edit
    const handleNavigateToSlug = (name: string) => {
        const slugName = name.toLowerCase().replace(/\s+/g, "-");
        console.log("table name::", slugName);
        // router.push(`/dashboard/products-management/${slugName}`)
    };
    const columns: ColumnsType<DataType> = [
        {
            title: "Tên sản phẩm",
            dataIndex: "name",
            key: "name",
            render: (text) => <a>{text}</a>,
        },
        {
            title: "SKU",
            dataIndex: "age",
            key: "age",
        },
        {
            title: "Mã đối tác",
            dataIndex: "address",
            key: "address",
        },
        {
            title: "Tên đối tác",
            key: "tags",
            dataIndex: "tags",
            render: (tags: string[]) => <TableData tags={tags} />,
        },
        {
            title: "Action",
            key: "action",
            render: (_, record) => (
                <TableAction
                    handleSetParam={() => handleNavigateToSlug(record.name)}
                />
            ),
        },
    ];
    return (
        <Table<DataType>
            columns={columns}
            pagination={{ position: ["topRight"] }}
            dataSource={data}
        />
    );
}
