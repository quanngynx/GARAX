import { Table } from "antd";
import type { TableProps, TableColumnsType } from "antd";
import { createStyles } from 'antd-style';
import { TableAction } from "./ColumnAction/tableAction";
import { TableData } from "./Data/TableData";
import { TablePagination } from "./Pagination/tablePagination";
import { LineFullWidth } from "../line";
// import { DoubleScrollBar } from "./ScrollTopBottom/doubleScrollTable";
import { RefObject, useRef } from "react";
// import { PATH_DASHBOARD } from "@/routes/paths";

// type ColumnsType<T extends object> = TableColumnsType<T>["columns"];

interface DataType {
    key: React.Key;
    name: string;
    age: number;
    address: string;
    tags: string[];
}

const data = Array.from({ length: 100 }).map<DataType>((_, i) => ({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
    tags: ["nice", "developer"],
  }));

const useStyle = createStyles(({ css, token }) => {
  const { antCls } = token;
  return {
    customTable: css`
      ${antCls}-table {
        ${antCls}-table-container {
          ${antCls}-table-body,
          ${antCls}-table-content {
            scrollbar-width: thin;
            scrollbar-color: #eaeaea transparent;
            scrollbar-gutter: stable;
          }
        }
      }
    `,
  };
});

export default function TableCustom() {
    const { styles } = useStyle();
    // const router = useRouter()
    // PATH_DASHBOARD.admin.products.edit
    const handleNavigateToSlug = (name: string) => {
        const slugName = name.toLowerCase().replace(/\s+/g, "-");
        console.log("table name::", slugName);
        // router.push(`/dashboard/products-management/${slugName}`)
    };

    const tableContainerRef: RefObject<HTMLDivElement> =
        useRef<HTMLDivElement>(null);

    // #region Selection aobject
    const rowSelection: TableProps<DataType>["rowSelection"] = {
        onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
            console.log(
                `selectedRowKeys: ${selectedRowKeys}`,
                "selectedRows: ",
                selectedRows,
            );
        },
        getCheckboxProps: (record: DataType) => ({
            disabled: record.name === "Disabled User", // Column configuration not to be checked
            name: record.name,
        }),
    };

    const columns: TableColumnsType<DataType> = [
        {
            title: "Tên sản phẩm",
            dataIndex: "name",
            key: "name",
            render: (text) => <a>{text}</a>,
            width: 200,
        },
        {
            title: "SKU",
            dataIndex: "age",
            key: "age",
            width: 100,
        },
        {
            title: "Số lượng tồn",
            dataIndex: "age",
            key: "age",
            width: 200,
        },
        {
            title: "Mã đối tác",
            dataIndex: "address",
            key: "address",
            width: 200,
        },
        {
            title: "Tên đối tác",
            key: "tags",
            dataIndex: "tags",
            render: (tags: string[]) => <TableData tags={tags} />,
            width: 200,
        },
        {
            title: "Mã nhà phân phối",
            key: "tags",
            dataIndex: "tags",
            width: 200,
        },
        {
            title: "Nhà phân phối",
            key: "tags",
            dataIndex: "tags",
            width: 200,
        },
        {
            title: "Ngày sản xuất",
            key: "tags",
            dataIndex: "tags",
            width: 200,
        },
        {
            title: "Ngày tạo",
            key: "tags",
            dataIndex: "tags",
            width: 200,
        },
        {
            title: "Nhân viên tạo",
            key: "tags",
            dataIndex: "tags",
            width: 200,
        },
        {
            title: "Lịch sử cập nhật",
            key: "tags",
            dataIndex: "tags",
            width: 200,
        },
        {
            title: "Nhân viên cập nhật",
            key: "tags",
            dataIndex: "tags",
            width: 200,
        },
        {
            title: "Action",
            key: "action",
            render: (_, record) => (
                <TableAction
                    handleSetParam={() => handleNavigateToSlug(record.name)}
                />
            ),
            width: 200,
        },
    ];
    return (
        <div>
            <TablePagination />

            <LineFullWidth />

            <div className="w-full max-w-[1200px]">
                <Table<DataType>
                    className={styles.customTable}
                    columns={columns}
                    rowSelection={{ 
                        type: "checkbox", 
                        ...rowSelection 
                    }}
                    pagination={{ 
                        position: ["topRight"],
                        pageSize: 50
                    }}
                    dataSource={data}
                    scroll={{ 
                        x: "max-content",
                        y: 55 * 5
                    }}
                    bordered
                />
            </div>
        </div>
    );
}
