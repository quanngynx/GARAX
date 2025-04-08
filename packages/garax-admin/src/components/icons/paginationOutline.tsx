import type { SVGProps } from "react";

function PaginationOutline(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={17}
            height={16}
            viewBox="0 0 25 24"
            {...props}
        >
            <path
                fill="#000"
                d="M2.72 11.47a.75.75 0 0 0 0 1.06l4 4a.75.75 0 0 0 1.06-1.06L4.31 12l3.47-3.47a.75.75 0 1 0-1.06-1.06zm19.56 1.06a.75.75 0 0 0 0-1.06l-4-4a.75.75 0 1 0-1.06 1.06L20.69 12l-3.47 3.47a.75.75 0 1 0 1.06 1.06z"
            ></path>
            <path
                fill="#000"
                d="M8.5 11.1a.9.9 0 1 0 0 1.8a.9.9 0 0 0 0-1.8m3.1.9a.9.9 0 1 1 1.8 0a.9.9 0 0 1-1.8 0m4 0a.9.9 0 1 1 1.8 0a.9.9 0 0 1-1.8 0"
            ></path>
        </svg>
    );
}

export default PaginationOutline;
