import { IDataTableType } from "@/container/productsManagement/interfaces";
import { TableColumnsType, Tag } from "antd";
import { TableAction } from "@/components/tableCustom/ColumnAction/tableAction";
import { handleNavigateToSlug } from "@/utils/navigateToSlug";
import { PATH_DASHBOARD } from "@/routes/paths";
import { TFixedType } from "@/container/productsManagement/types";
type TTags = {
    tags: string[];
};

export const data = Array.from({ length: 100 }).map<IDataTableType>((_, i) => ({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
    tags: ["nice", "developer"],
}));

export const columns: TableColumnsType<IDataTableType> = [
        {
            title: "Khách hàng",
            dataIndex: "name",
            key: "name",
            render: (text: string) => <a>{text}</a>,
            width: 200,
        },
        {
            title: "Số điện thoại",
            dataIndex: "age",
            key: "age",
            width: 200,
        },
        {
            title: "Nhận tại cửa hàng?",
            dataIndex: "age",
            key: "age",
            width: 200,
        },
        {
            title: "Phương thức thanh toán",
            dataIndex: "age",
            key: "age",
            width: 200,
        },
        {
            title: "Trạng thái thanh toán",
            key: "tags",
            dataIndex: "tags",
            render: (tags: string[]) => <TableData tags={tags} />,
            width: 200,
        },
        {
            title: "Tổng tiền từ sản phẩm",
            dataIndex: "address",
            key: "address",
            width: 200,
        },
        {
            title: "Phí giao hàng",
            key: "tags",
            dataIndex: "tags",
            width: 200,
        },
        {
            title: "Đã giảm",
            key: "tags",
            dataIndex: "tags",
            width: 200,
        },
        {
            title: "Tổng cộng",
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
            title: "Tạo lúc",
            key: "tags",
            dataIndex: "tags",
            width: 200,
        },
        {
            title: "Hành động",
            key: "action",
            render: (_: unknown, record: { name: string; }) => (
                <TableAction
                    handleSetParam={() => handleNavigateToSlug(PATH_DASHBOARD.admin.products.edit, record.name)}
                />
            ),
            width: 125,
            fixed: 'right' as TFixedType, 
            hidden: false
        },
    ].filter(item => !item.hidden);

export function TableData({ tags }: TTags) {
    return (
        <span>
            {tags.map((tag) => {
                let color = tag.length > 5 ? "geekblue" : "green";
                if (tag === "loser") {
                    color = "volcano";
                }
                return (
                    <Tag color={color} key={tag}>
                        {tag.toUpperCase()}
                    </Tag>
                );
            })}
        </span>
    );
}
