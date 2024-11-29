import { PlusCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";

type SizeType = "small" | "middle" | "large";
type Type = "default" | "primary" | "dashed" | "link" | "text";

export function ButtonPrimary({
    nameBtn,
    sizeType,
    type,
    className
}: {
    nameBtn: string;
    sizeType: SizeType;
    type: Type;
    className: string;
}) {
    return (
        <Button
            className={className}
            type={type}
            shape="round"
            icon={<PlusCircleOutlined />}
            size={sizeType}
        >
            {nameBtn}
        </Button>
    );
}
