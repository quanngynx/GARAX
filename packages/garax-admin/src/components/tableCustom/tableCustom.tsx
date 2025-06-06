import { Empty, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { TablePagination } from "./Pagination/tablePagination";
import { LineFullWidth } from "../line";
import { cn } from "@/lib";
import { useSelector } from "react-redux";
import { RootState } from "@/stores";
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

    const isCollapsed = useSelector((state: RootState) => state.sidenav.isCollapsed);
    
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
    /**
     * @ref https://github.com/ant-design/ant-design/issues/8981
     */
    const totalFixedWidth = columns.reduce((result, { width }) => {
        if (typeof width === 'number') {
            return result + width;
          }
          return result;
    }, 0);
    const minResponsiveWidth = 1180;
    return (
        // max-w-[calc(100vw-348px)]
        <div className=""> 
            <TablePagination />
            <LineFullWidth />
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
                    x: totalFixedWidth + minResponsiveWidth,
                    // x: 'max-content',
                    y: 65 * 5
                }}
                className={cn(isCollapsed ? 'w-[1350px]' : 'w-[1180px]')}
                bordered
                locale={{ emptyText: <Empty description="No Data1212123"></Empty> }}
            />
        </div>
    );
}
