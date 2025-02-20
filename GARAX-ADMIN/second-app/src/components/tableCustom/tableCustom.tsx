/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react";
import { Table } from "antd";
import type { TableProps, TableColumnsType } from "antd";
import { createStyles, CssUtil, FullToken } from 'antd-style';
// import { TableAction } from "./ColumnAction/tableAction";
// import { TableData } from "./Data/TableData";
import { TablePagination } from "./Pagination/tablePagination";
import { LineFullWidth } from "../line";
// import { DoubleScrollBar } from "./ScrollTopBottom/doubleScrollTable";
// import { RefObject, useRef } from "react";
// import { handleNavigateToSlug } from "@/utils/navigateToSlug";
// import { PATH_DASHBOARD } from "@/routes/paths";

// type ColumnsType<T extends object> = TableColumnsType<T>["columns"];
type FixedType = 'left' | 'right' | undefined

interface DataType {
    key: React.Key;
    name: string;
    age: number;
    address: string;
    tags: string[];
    fixed?: FixedType;
    hidden?: boolean;
}
//     key: i,
//     name: `Edward King ${i}`,
//     age: 32,
//     address: `London, Park Lane no. ${i}`,
//     tags: ["nice", "developer"],
//   }));

// type StyleProps = { css: CssUtil; token: FullToken }

const useStyle = createStyles(({ css, token }) => {
  const { componentCls }: string = token;
console.log("Token::", token);
  return {
    customTable: css`
      ${antCls}-table {
        ${antCls}-table-container {
          ${antCls}-table-body,
          ${antCls}-table-content {
            scrollbar-width: thin;
            scrollbar-color: #e2e8f0 transparent;
            scrollbar-gutter: stable;
            scrollbar-border: 1px solid #f6f7ed;
          }
        }
      }
    `,
  };
});

interface TableCustomProps {
    columns: TableColumnsType<any>;
    data: any[];
}

export const TableCustom: FC<TableCustomProps> = ({
    columns,
    data,
}) => {
    const { styles } = useStyle();
    
    // PATH_DASHBOARD.admin.products.edit

    // const tableContainerRef: RefObject<HTMLDivElement> =
    //     useRef<HTMLDivElement>(null);

    // #region Selection a object
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
    //     {
    //         title: "Tên sản phẩm",
    //         dataIndex: "name",
    //         key: "name",
    //         render: (text: string) => <a>{text}</a>,
    //         width: 200,
    //     },
    //     {
    //         title: "SKU",
    //         dataIndex: "age",
    //         key: "age",
    //         width: 200,
    //     },
    //     {
    //         title: "Số lượng tồn",
    //         dataIndex: "age",
    //         key: "age",
    //         width: 200,
    //     },
    //     {
    //         title: "Mã đối tác",
    //         dataIndex: "address",
    //         key: "address",
    //         width: 200,
    //     },
    //     {
    //         title: "Tên đối tác",
    //         key: "tags",
    //         dataIndex: "tags",
    //         render: (tags: string[]) => <TableData tags={tags} />,
    //         width: 200,
    //     },
    //     {
    //         title: "Mã nhà phân phối",
    //         key: "tags",
    //         dataIndex: "tags",
    //         width: 200,
    //     },
    //     {
    //         title: "Nhà phân phối",
    //         key: "tags",
    //         dataIndex: "tags",
    //         width: 200,
    //     },
    //     {
    //         title: "Ngày sản xuất",
    //         key: "tags",
    //         dataIndex: "tags",
    //         width: 200,
    //     },
    //     {
    //         title: "Ngày tạo",
    //         key: "tags",
    //         dataIndex: "tags",
    //         width: 200,
    //     },
    //     {
    //         title: "Nhân viên tạo",
    //         key: "tags",
    //         dataIndex: "tags",
    //         width: 200,
    //     },
    //     {
    //         title: "Lịch sử cập nhật",
    //         key: "tags",
    //         dataIndex: "tags",
    //         width: 200,
    //     },
    //     {
    //         title: "Nhân viên cập nhật",
    //         key: "tags",
    //         dataIndex: "tags",
    //         width: 200,
    //     },
    //     {
    //         title: "Hành động",
    //         key: "action",
    //         render: (_: unknown, record: { name: string; }) => (
    //             <TableAction
    //                 handleSetParam={() => handleNavigateToSlug(PATH_DASHBOARD.admin.products.edit, record.name)}
    //             />
    //         ),
    //         width: 125,
    //         fixed: 'right' as FixedType,
    //         hidden: false
    //     },
    // ].filter(item => !item.hidden);

    return (
        <div>
            <TablePagination />

            <LineFullWidth />

            <div className="w-full max-w-[1200px]">
                <Table<DataType>
                    className={styles.customTable}
                    columns={columns}
                    dataSource={data}
                    rowSelection={{ 
                        type: "checkbox", 
                        ...rowSelection,
                        fixed: true 
                    }}
                    pagination={{ 
                        position: ["topRight"],
                        pageSize: 50
                    }}
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
