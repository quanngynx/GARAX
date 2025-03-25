// import { FC } from "react";
import { Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { TablePagination } from "./Pagination/tablePagination";
import { LineFullWidth } from "../line";
// import { expandedRowRender } from "./expandableColumn";
// import { DoubleScrollBar } from "./ScrollTopBottom/doubleScrollTable";
// import { RefObject, useRef } from "react";
// import { handleNavigateToSlug } from "@/utils/navigateToSlug";
// import { PATH_DASHBOARD } from "@/routes/paths";

// type ColumnsType<T extends object> = TableColumnsType<T>["columns"];

type FixedType = 'left' | 'right' | undefined

export interface DataType {
    key: React.Key;
    name: string;
    age: number;
    address: string;
    tags: string[];
    fixed?: FixedType;
    hidden?: boolean;
}

interface TableCustomProps<T> {
    columns: TableColumnsType<T>;
    data: T[];
}

export const TableCustom = <T,>({ 
    columns, 
    data 
}: TableCustomProps<T>) => {

    // #region Selection a object
    const rowSelection: TableProps<T>["rowSelection"] = {
        onChange: (selectedRowKeys: React.Key[], selectedRows: T[]) => {
            console.log(
                `selectedRowKeys: ${selectedRowKeys}`,
                "selectedRows: ",
                selectedRows,
            );
        },
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        getCheckboxProps: (_record: T) => ({
            // disabled: record.name === "Disabled User", // Column configuration not to be checked
            // name: record.name,
        }),
    };

    return (
        <div>
            <TablePagination />
            <LineFullWidth />
            <div className="w-full max-w-[1200px]">
                <Table<T>
                    columns={columns}
                    dataSource={data}
                    expandable={{}}
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
