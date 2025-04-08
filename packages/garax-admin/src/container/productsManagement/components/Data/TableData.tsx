// import { IDataTableType } from "@/container/productsManagement/interfaces";
import { TableColumnsType, Tag, Image } from "antd";
import { TableAction } from "@/components/tableCustom/ColumnAction/tableAction";
import { handleNavigateToSlug } from "@/utils/navigateToSlug";
import { PATH_DASHBOARD } from "@/routes/paths";
import { TFixedType } from "@/container/productsManagement/types";
import { ProductModel } from "@/apis/models";
import { transformBigInt_Date } from "@/utils";

type TTags = {
    tags: string[];
};

// export const data = Array.from({ length: 100 }).map<ProductModel>((_, i) => ({
//     key: i,
//     name: `Edward King ${i}`,
//     age: 32,
//     address: `London, Park Lane no. ${i}`,
//     tags: ["nice", "developer"],
// }));

export const columns: TableColumnsType<ProductModel> = [
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
        width: 200,
    },
    {
        title: "Tên sản phẩm",
        dataIndex: "name",
        key: "name",
        render: (text: string) => <a>{text}</a>,
        width: 200,
    },
    {
        title: "Slug",
        dataIndex: "slug",
        key: "slug",
        width: 200,
    },
    {
        title: "Mô tả",
        dataIndex: "desc",
        key: "desc",
        width: 200,
    },
    {
        title: "Ngày sản xuất",
        dataIndex: "manufacturingDate",
        key: "manufacturingDate",
        render: (v: bigint) => <span>{String(transformBigInt_Date(v))}</span>,
        width: 200,
    },
    {
        title: "Giá ước lượng", // minPrice-maxPrie
        dataIndex: "minPrice",
        key: "minPrice",
        // render: (_: string, record: { minPrice: number; maxPrice: number }) => (
        //     <span>{`${record.minPrice} - ${record.maxPrice}`}</span>
        // ),
        width: 200,
    },
    {
        title: "Tỉ lệ đánh giá", // rate
        dataIndex: "rate",
        key: "rate",
        width: 200,
    },
    {
        title: "Tổng lượt đánh giá", 
        dataIndex: "totalRate",
        key: "totalRate",
        width: 200,
    },
    {
        title: "Tổng số lượng đã bán", 
        dataIndex: "totalSold",
        key: "totalSold",
        width: 200,
    },
    {
        title: "Mã danh mục cấp cha", 
        dataIndex: "categoryId",
        key: "categoryId",
        width: 200,
    },
    {
        title: "Mã danh mục con cấp con", 
        dataIndex: "subCategoryId",
        key: "subCategoryId",
        width: 200,
    },
    {
        title: "Mã danh mục con cấp con 2", 
        dataIndex: "sub2CategoryId",
        key: "sub2CategoryId",
        width: 200,
    },
    {
        title: "Mã danh mục con cấp con 3", 
        dataIndex: "sub3CategoryId",
        key: "sub3CategoryId",
        width: 200,
    },
    {
        title: "Mã video", 
        dataIndex: "videoId",
        key: "videoId",
        width: 200,
    },
    {
        title: "Mã thương hiệu", 
        dataIndex: "brandId",
        key: "brandId",
        width: 200,
    },
    {
        title: "Trạng thái sản phẩm", 
        dataIndex: "status",
        key: "status",
        width: 200,
    },
    // {
    //     title: "Tên đối tác",
    //     key: "tags",
    //     dataIndex: "tags",
    //     render: (tags: string[]) => <TableData tags={tags} />,
    //     width: 200,
    // },
    {
        title: "Nhân viên tạo",
        key: "createdBy",
        dataIndex: "createdBy",
        width: 200,
    },
    // {
    //     title: "Lịch sử cập nhật",
    //     key: "tags",
    //     dataIndex: "tags",
    //     width: 200,
    // },
    {
        title: "Nhân viên cập nhật",
        key: "updatedBy",
        dataIndex: "updatedBy",
        width: 200,
    },
    {
        title: "Ngày tạo",
        key: "createdAt",
        dataIndex: "createdAt",
        width: 200,
    },
    {
        title: "Ngày cập nhật",
        key: "updatedAt",
        dataIndex: "updatedAt",
        width: 200,
    },
    {
        title: "Hành động",
        key: "action",
        render: (_: unknown, record: { name: string; }) => (
            <TableAction
                handleSetParam={() => handleNavigateToSlug(PATH_DASHBOARD.admin.products.edit, record.name)}
                handleOpenForm={() => {}}
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
