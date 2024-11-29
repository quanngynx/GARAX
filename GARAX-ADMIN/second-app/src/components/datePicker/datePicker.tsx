import type { DatePickerProps } from "antd";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
};

const dateFormat = "YYYY-MM-DD";

export function DatePickerCustom({ namePlaceholder } : { namePlaceholder: string }) {
    const defaultDate = dayjs();
    return (
        <DatePicker
            onChange={onChange}
            maxDate={dayjs(defaultDate, dateFormat)}
            placeholder={namePlaceholder}
            className="custom-datepicker border-gray-300"
        />
    );
}
