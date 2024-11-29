import React from "react";
import { SettingOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Dropdown } from "antd";

const items: MenuProps["items"] = [
    {
        label: <a href="https://www.antgroup.com">1st menu item</a>,
        key: "0",
    },
    {
        label: <a href="https://www.aliyun.com">2nd menu item</a>,
        key: "1",
    },
    {
        type: "divider",
    },
    {
        label: "Chọn tất cả",
        key: "all",
    },
];

export function DropdownCustom({ nameDropdown }: { nameDropdown: string; }) {
    return (
        <Dropdown
            className="rounded-md focus-within:border-blue-500 hover:border-blue-500 border-gray-300"
            menu={{ items }}
            trigger={["click"]}
            placement="bottomRight"
        >
            <a onClick={(e) => e.preventDefault()}>
                <Button >
                    {nameDropdown}
                    <SettingOutlined />
                </Button>
            </a>
        </Dropdown>
    );
}