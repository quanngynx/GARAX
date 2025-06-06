import type { SVGProps } from "react";

function OptionsOutline(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            {...props}
        >
            <path
                fill="currentColor"
                d="M19 9a3 3 0 0 0-2.82 2H3a1 1 0 0 0 0 2h13.18A3 3 0 1 0 19 9m0 4a1 1 0 1 1 1-1a1 1 0 0 1-1 1M3 7h1.18a3 3 0 0 0 5.64 0H21a1 1 0 0 0 0-2H9.82a3 3 0 0 0-5.64 0H3a1 1 0 0 0 0 2m4-2a1 1 0 1 1-1 1a1 1 0 0 1 1-1m14 12h-7.18a3 3 0 0 0-5.64 0H3a1 1 0 0 0 0 2h5.18a3 3 0 0 0 5.64 0H21a1 1 0 0 0 0-2m-10 2a1 1 0 1 1 1-1a1 1 0 0 1-1 1"
            />
        </svg>
    );
}

export default OptionsOutline;
