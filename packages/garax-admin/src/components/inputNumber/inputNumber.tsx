import type { InputNumberProps } from "antd";
import { InputNumber } from "antd";

const onChange: InputNumberProps["onChange"] = (value) => {
    console.log("changed", value);
};

interface IInputNumberCustom {
    Min?: number | 1
    Max?: number | 99
}

export function InputNumberCustom({ Min, Max } : IInputNumberCustom) {
    return (
        <InputNumber
            min={Min}
            max={Max}
            defaultValue={1}
            onChange={onChange}
            changeOnWheel
        />
    );
}
