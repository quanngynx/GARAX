import { IDataTableType } from "@/container/productsManagement/interfaces";
import { TableColumnsType, Tag, Image } from "antd";
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
        title: "Hình ảnh",
        dataIndex: "name",
        key: "name",
        render: () => (
            <Image
                loading="lazy"
                width={30}
                src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQEF-yiHsf2Q3dobSEPu2DzNbRz7kW1hNQEhhHLxtCzbANR4iuOvTUiesN6zQAawqZusg0XvAIcKTyabJuTLXy49_GjElQ2PlNjq4plT9TVskHG10bis8l53Um0R_A&usqp=CAc"
                alt="product"
            />
        ),
        width: 150,
    },
    {
        title: "Tên sản phẩm",
        dataIndex: "name",
        key: "name",
        render: (text: string) => <a>{text}</a>,
        width: 200,
    },
    {
        title: "Lượt xem",
        dataIndex: "age",
        key: "age",
        width: 200,
    },
    {
        title: "Nhãn",
        key: "tags",
        dataIndex: "tags",
        width: 200,
        render: (tags: string[]) => <TableData tags={tags} />,
    },
    {
        title: "Ngày sản xuất",
        dataIndex: "age",
        key: "age",
        width: 200,
    },
    {
        title: "Giá ước lượng", // minPrice-maxPrie
        dataIndex: "age",
        key: "age",
        width: 200,
    },
    {
        title: "Tỉ lệ đánh giá", // rate
        dataIndex: "age",
        key: "age",
        width: 200,
    },
    {
        title: "Tổng lượt đánh giá", 
        dataIndex: "age",
        key: "age",
        width: 200,
    },
    {
        title: "Tổng số lượng đã bán", 
        dataIndex: "age",
        key: "age",
        width: 200,
    },
    {
        title: "Mã danh mục cấp cha", 
        dataIndex: "age",
        key: "age",
        width: 200,
    },
    {
        title: "Mã danh mục con cấp con", 
        dataIndex: "age",
        key: "age",
        width: 200,
    },
    {
        title: "Mã danh mục con cấp con 2", 
        dataIndex: "age",
        key: "age",
        width: 200,
    },
    {
        title: "Mã danh mục con cấp con 3", 
        dataIndex: "age",
        key: "age",
        width: 200,
    },
    {
        title: "Mã video", 
        dataIndex: "age",
        key: "age",
        width: 200,
    },
    {
        title: "Mã thương hiệu", 
        dataIndex: "age",
        key: "age",
        width: 200,
    },
    {
        title: "Trạng thái sản phẩm", 
        dataIndex: "age",
        key: "age",
        width: 200,
    },
    // {
    //     title: "Số lượng tồn",
    //     dataIndex: "age",
    //     key: "age",
    //     width: 200,
    // },
    // {
    //     title: "Mã đối tác",
    //     dataIndex: "address",
    //     key: "address",
    //     width: 200,
    // },
    // {
    //     title: "Tên đối tác",
    //     key: "tags",
    //     dataIndex: "tags",
    //     render: (tags: string[]) => <TableData tags={tags} />,
    //     width: 200,
    // },
    // {
    //     title: "Mã nhà phân phối",
    //     key: "tags",
    //     dataIndex: "tags",
    //     width: 200,
    // },
    // {
    //     title: "Nhà phân phối",
    //     key: "tags",
    //     dataIndex: "tags",
    //     width: 200,
    // },
    // {
    //     title: "Ngày sản xuất",
    //     key: "tags",
    //     dataIndex: "tags",
    //     width: 200,
    // },
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
        title: "Ngày tạo",
        key: "tags",
        dataIndex: "tags",
        width: 200,
    },
    {
        title: "Ngày cập nhật",
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
