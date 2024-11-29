function StatusProductsFilter() {
    return (
        <div className="flex items-center gap-2 font-semibold mb-5">
            <div>Trạng thái sản phẩm:</div>
            <div className="flex flex-row gap-4 ">
                <button className="hover:text-sky-500">
                    <div className="">Tất cả (00)</div>
                </button>
                <label>|</label>
                <button className="hover:text-sky-500">
                    <div>Đã xuất bản (00)</div>
                </button>
                <label>|</label>
                <button className="hover:text-sky-500">
                    <div>Bản nháp (00)</div>
                </button>
            </div>
        </div>
    );
}

export default StatusProductsFilter;
