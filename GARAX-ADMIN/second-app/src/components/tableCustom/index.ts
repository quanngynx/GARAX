import dynamic from "next/dynamic";


const TableCustoms = dynamic(() => import('./tableCustom'), { ssr: false });

export default TableCustoms
