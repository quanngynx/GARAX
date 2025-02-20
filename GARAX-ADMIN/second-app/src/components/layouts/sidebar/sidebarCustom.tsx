"use client";

import { useRouter } from "next/navigation";

import type { MenuProps } from "antd";
import { Menu } from "antd";

import {
    SettingOutlined,
    ShoppingCartOutlined,
    ProductOutlined,
    TransactionOutlined
} from "@ant-design/icons";
import { LogoBrandIcon } from "@/components/icons";
import { NameBrandIcon } from "@/components/icons";
import { HeroiconsOutlineUserGroup } from "@/components/icons/userGroup";
import { HeroiconsOutlineTerminal } from "@/components/icons/terminalOutline";
import { CatppuccinFolderThemes } from "@/components/icons/themeOutline";
import { FluentMdl2BIDashboard } from "@/components/icons/chartOutline";
import { CarbonReview } from "@/components/icons/reviewOutline";
import { PATH_DASHBOARD } from "@/routes/paths";
import { BookingOutlineIcon } from "@/components/icons/bookingOutline";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
    {
        key: PATH_DASHBOARD.admin.root,
        style: {
            height: 90,
        },
        label: (
            <header className="">
                <div className="flex items-center">
                    <LogoBrandIcon wid="48px" hei="48px" />
                </div>
                <div 
                className="flex items-center"
                // style={}
                >
                    <NameBrandIcon />
                </div>
            </header>
        ),
    },
    {
        key: PATH_DASHBOARD.admin.statictists.root,
        label: "Bảng điều khiển",
        icon: <FluentMdl2BIDashboard width={16} height={16}/>,
        children: [
            { key: PATH_DASHBOARD.admin.statictists.root, label: "Thống kê biểu đồ" },
            { key: PATH_DASHBOARD.admin.statictists.transactions, label: "Giao dịch" },
            { key: PATH_DASHBOARD.admin.statictists.revenue, label: "Doanh thu" },
        ],
    },
    {
        key: PATH_DASHBOARD.admin.products.root,
        label: "Sản phẩm",
        icon: <ProductOutlined />,
        children: [
            { key: PATH_DASHBOARD.admin.products.list, label: "Quản lý sản phẩm" },
            { key: PATH_DASHBOARD.admin.products.brands, label: "Thương hiệu" },
            { key: PATH_DASHBOARD.admin.products.partners, label: "Đối tác" },
            { key: PATH_DASHBOARD.admin.products.top_products, label: "Sản phẩm bán chạy" },
        ],
    },
    {
        key: PATH_DASHBOARD.admin.orders.root,
        label: "Đơn hàng",
        icon: <ShoppingCartOutlined />,
        children: [
            { key: PATH_DASHBOARD.admin.orders.list, label: "Quản lý đơn hàng" },
        ],
    },
    {
        key: PATH_DASHBOARD.admin.booking.root,
        label: "Đặt lịch",
        icon: <BookingOutlineIcon />,
        children: [
            { key: PATH_DASHBOARD.admin.booking.list, label: "Quản lý đặt lịch" },
        ],
    },
    {
        key: PATH_DASHBOARD.admin.reviews.root,
        label: "Đánh giá",
        icon: <CarbonReview width={16} height={16}/>,
        children: [
            { key: PATH_DASHBOARD.admin.reviews.root, label: "Phản hồi từ người dùng" },
        ],
    },
    {
        key: PATH_DASHBOARD.admin.transactions.root,  
        label: "Giao dịch",
        icon: <TransactionOutlined />
    },
    {
        type: "divider", // line
    },
    {
        key: "sub10",
        label: "Phân quyền người dùng",
        icon: <HeroiconsOutlineUserGroup width={16} height={16}/>,
        children: [
            { key: PATH_DASHBOARD.admin.users.root, label: "Nhóm người dùng" },
            { key: PATH_DASHBOARD.admin.users.permission, label: "Phân quyền" },
            { key: PATH_DASHBOARD.admin.users.access_management, label: "Quản lý quyền truy cập" },
        ],
    },
    {
        key: "grp1",
        label: "Tiện tích",
        type: "group",
        children: [
            { key: "13", label: "Phím tắt", icon: <HeroiconsOutlineTerminal width={16} height={16} /> },
            { key: "14", label: "Danh sách chủ đề", icon: <CatppuccinFolderThemes width={16} height={16}/> },
        ],
    },
    {
        key: PATH_DASHBOARD.admin.settings.root,  
        label: "Cài đặt",
        icon: <SettingOutlined />,
        children: [
            { key: PATH_DASHBOARD.admin.settings.profile, label: "Hồ sơ cá nhân" },
            { key: PATH_DASHBOARD.admin.settings.theme, label: "Chủ đề" },
            { key: PATH_DASHBOARD.admin.settings.account, label: "Tài khoản" },
            { key: PATH_DASHBOARD.admin.settings.notification, label: "Thông báo" },
            { key: PATH_DASHBOARD.admin.settings.history_access, label: "Lịch sử truy cập" },
        ],
    },
];

interface ISidebarCustom {
    collapsed: boolean
} 

function SidebarCustom({ collapsed }: ISidebarCustom) {
     
    const router = useRouter()
    const onClick: MenuProps["onClick"] = (e) => {
        console.log("click ", e);
        router.push(e.keyPath[0])
    };

    return (
        <Menu
            onClick={onClick}
            style={{
                width: 256,
                borderRadius: 16,
                boxShadow:
                    "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)",
            }}
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            items={items}
            inlineCollapsed={collapsed}
        />
    );
}

export default SidebarCustom;
