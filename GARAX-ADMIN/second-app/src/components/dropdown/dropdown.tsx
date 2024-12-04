import React, { ReactNode } from "react";
import type { MenuProps } from "antd";
import { Button, Dropdown } from "antd";

const items: MenuProps["items"] = [
    {
        label: <button>Động cơ</button>,
        key: "0",
    },
    {
        label: <button>Điện</button>,
        key: "1",
    },
    {
        label: <button>Nội & Ngoại</button>,
        key: "2",
    },
    {
        type: "divider",
    },
    {
        label: "Chọn tất cả",
        key: "all",
    },
];

interface IDropdownCustom { nameDropdown: string; icon: ReactNode }

export function DropdownCustom({ nameDropdown, icon }: IDropdownCustom ) {
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
                    {icon}
                </Button>
            </a>
        </Dropdown>
    );
}