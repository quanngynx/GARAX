import { Button } from "antd";
import { Dispatch, SetStateAction } from "react";

export interface ItemStatusProps {
    id: string;
    name: string;
    value: number
}

interface StatusProductsFilterProps extends ItemStatusProps {
    selectStatus: string | null;
    setSelectStatus: Dispatch<SetStateAction<string | null>>;
    btnStatus: ItemStatusProps[];
}

function StatusProductsFilter({
    selectStatus,
    setSelectStatus,
    btnStatus,
}: StatusProductsFilterProps) {

    const handleClickSelectStatus = (id: string) => {
        setSelectStatus((prev => (prev === id ? null : id)));
    };
    return (
        <div className="flex items-center gap-2 font-semibold mb-5">
            <div>Trạng thái sản phẩm:</div>
            <div className="flex flex-row gap-4 font-semibold text-sm">
                {/* <span className="inline-flex items-center space-x-1.5 rounded-full bg-tremor-background px-2.5 py-1 ring-1 ring-inset ring-tremor-ring dark:bg-dark-tremor-background dark:ring-dark-tremor-ring">
                    <span className="text-gray-600 dark:text-dark-tremor-content">
                        Tất cả
                    </span>
                    <span className="text-emerald-700 dark:text-emerald-500">
                        (00)
                    </span>
                </span>
                <span className="inline-flex items-center space-x-1.5 rounded-full bg-tremor-background px-2.5 py-1 ring-1 ring-inset ring-tremor-ring dark:bg-dark-tremor-background dark:ring-dark-tremor-ring">
                    <span className="dark:text-dark-tremor-content">
                        Đã xuất bản
                    </span>
                    <span className="text-red-700 dark:text-red-500">
                        (00)
                    </span>
                </span>
                <span className="inline-flex items-center space-x-1.5 rounded-full bg-tremor-background px-2.5 py-1 ring-1 ring-inset ring-tremor-ring dark:bg-dark-tremor-background dark:ring-dark-tremor-ring">
                    <span className="dark:text-dark-tremor-content">
                        Bản nháp
                    </span>
                    <span className="text-emerald-700 dark:text-emerald-500">
                        (00)
                    </span>
                </span> */}

                {btnStatus.map(({ id, name = '', value = 0 }) => (
                    <Button
                        key={id}
                        onClick={() => handleClickSelectStatus(id)}
                        color={selectStatus === id ? "primary" : "default"}
                        variant={selectStatus === id ? "solid" : "outlined"}
                        style={{
                            minWidth: '7rem',
                            borderRadius: '9999px',
                            fontWeight: 600,
                            textDecorationLine: 'underline'
                        }}
                    >
                        {`${name} (${value})`}
                    </Button>
                ))}
            </div>
        </div>
    );
}

export default StatusProductsFilter;
