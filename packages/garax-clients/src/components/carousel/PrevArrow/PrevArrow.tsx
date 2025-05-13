import { LeftOutlined } from "@ant-design/icons";
import { ArrowsProps } from "../interfaces";
import { customDefault } from "../styles";

export const PrevArrow = (props: ArrowsProps) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          ...customDefault
        }}
        onClick={onClick}
      >
        <LeftOutlined style={{ color: 'black', fontSize: 24, fontWeight: 800 }} />
      </div>
    );
};