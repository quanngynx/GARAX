// import { IDataTableType } from "@/container/productsManagement/interfaces";
import { TableColumnsType, Tag } from "antd";
import { TableAction } from "@/components/tableCustom/ColumnAction/tableAction";
import { handleNavigateToSlug } from "@/utils/navigateToSlug";
import { PATH_DASHBOARD } from "@/routes/paths";
import { TFixedType } from "@/container/productsManagement/types";
import { OrderModel } from "@/apis/models";
type TTags = {
    tags: string[];
};

// export const data = Array.from({ length: 100 }).map<IDataTableType>((_, i) => ({
//     key: i,
//     name: `Edward King ${i}`,
//     age: 32,
//     address: `London, Park Lane no. ${i}`,
//     tags: ["nice", "developer"],
// }));

export const columns: TableColumnsType<OrderModel> = [
        {
            title: "Khách hàng",
            dataIndex: "fullname",
            key: "fullname",
            render: (text: string) => <a>{text}</a>,
            width: 200,
        },
        {
            title: "Số điện thoại",
            dataIndex: "phone",
            key: "phone",
            width: 200,
        },
        {
            title: "Nhận tại cửa hàng?",
            dataIndex: "isReceiveAtStore",
            key: "isReceiveAtStore",
            width: 200,
        },
        {
            title: "Phương thức thanh toán",
            dataIndex: "paymentMethod",
            key: "paymentMethod",
            width: 200,
        },
        {
            title: "Trạng thái thanh toán",
            dataIndex: "paymentStatus",
            key: "paymentStatus",
            // render: (tags: string[]) => <TableData tags={tags} />,
            width: 200,
        },
        {
            title: "Tổng tiền từ sản phẩm",
            dataIndex: "subTotalFromProd",
            key: "subTotalFromProd",
            width: 200,
        },
        {
            title: "Phí giao hàng",
            key: "shippingFee",
            dataIndex: "shippingFee",
            width: 200,
        },
        {
            title: "Đã giảm",
            key: "discount",
            dataIndex: "discount",
            width: 200,
        },
        {
            title: "Tổng cộng",
            key: "total",
            dataIndex: "total",
            width: 200,
        },
        {
            title: "Mã người dùng",
            key: "userId",
            dataIndex: "userId",
            width: 200,
        },
        {
            title: "Mã địa chỉ",
            key: "addressId",
            dataIndex: "addressId",
            width: 200,
        },
        {
            title: "Mã giỏ hàng",
            key: "cartId",
            dataIndex: "cartId",
            width: 200,
        },
        {
            title: "Người tạo",
            key: "createdBy",
            dataIndex: "createdBy",
            width: 200,
        },
        {
            title: "Người cập nhật",
            key: "updatedBy",
            dataIndex: "updatedBy",
            width: 200,
        },
        {
            title: "Tạo lúc",
            key: "createdAt",
            dataIndex: "createdAt",
            width: 200,
        },
        {
            title: "Cập nhật lần cuối",
            key: "updatedAt",
            dataIndex: "updatedAt",
            width: 200,
        },
        {
            title: "Hành động",
            key: "action",
            render: (_: unknown, record: { fullname: string; }) => (
                <TableAction
                    handleSetParam={() => handleNavigateToSlug(PATH_DASHBOARD.admin.products.edit, record.fullname)}
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
