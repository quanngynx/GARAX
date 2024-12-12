import { PlusCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";

type SizeType = "small" | "middle" | "large";
type Type = "default" | "primary" | "dashed" | "link" | "text";

export function ButtonPrimary({
    nameBtn,
    sizeType,
    type,
    className,
    handleFc,
    isLoading
}: {
    nameBtn: string;
    sizeType: SizeType;
    type: Type;
    className: string;
    handleFc?: () => void;
    isLoading?: boolean
}) {
    return (
        <Button
            className={className}
            type={type}
            shape="round"
            icon={<PlusCircleOutlined />}
            size={sizeType}
            onClick={handleFc}
            loading={isLoading}
        >
            {nameBtn}
        </Button>
    );
}
