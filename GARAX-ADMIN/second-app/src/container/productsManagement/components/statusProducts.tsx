

function StatusProductsFilter() {
    return (
        <div className="flex items-center gap-2 font-semibold mb-5">
            <div>Trạng thái sản phẩm:</div>
            <div className="flex flex-row gap-4 font-semibold text-sm">
                <span className="inline-flex items-center space-x-1.5 rounded-full bg-tremor-background px-2.5 py-1 ring-1 ring-inset ring-tremor-ring dark:bg-dark-tremor-background dark:ring-dark-tremor-ring">
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
                </span>
            </div>
        </div>
    );
}

export default StatusProductsFilter;
