import { AutoComplete } from "antd";

const options = [
    { value: "Burns Bay Road" },
    { value: "Downing Street" },
    { value: "Wall Street" },
];

interface IAutoCompletePrimary {
    placeHolder: string

}

export function AutoCompletePrimary({ placeHolder } : IAutoCompletePrimary) {
    return (
        <AutoComplete
            style={{ width: 200 }}
            options={options}
            placeholder={placeHolder}
            popupClassName="certain-category-search-dropdown"
            filterOption={(inputValue, option) =>
                option!.value
                    .toUpperCase()
                    .indexOf(inputValue.toUpperCase()) !== -1
            }
            onSelect={globalThis.console.log}
            variant="filled"
        />
    );
}
