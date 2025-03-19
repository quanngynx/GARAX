import { Table, TableColumnsType } from "antd";
import { DataType } from "../tableCustom";

interface ExpandedDataType {
    key: React.Key;
    date: string;
    name: string;
    upgradeNum: string;
}

interface ExpandedRowRenderProps {
    expandColumns: TableColumnsType<DataType>
    expandDataSource: DataType[];
}

export const expandedRowRender = ({
    expandColumns,
    expandDataSource
} : ExpandedRowRenderProps) => (

    <Table<DataType>
      columns={expandColumns}
      dataSource={expandDataSource}
      pagination={false}
    />
  );