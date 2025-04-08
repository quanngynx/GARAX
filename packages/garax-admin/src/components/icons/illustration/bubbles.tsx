import type { SVGProps } from "react";

interface IBubblesFilled {
    Fill: string | "#3F62A1"
}

function BubblesFilled(props: SVGProps<SVGSVGElement>, { Fill } : IBubblesFilled ) {
    return (
        <svg
            width="216"
            height="251"
            viewBox="0 0 216 251"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <circle cx="94" cy="40" r="11" fill={Fill} />
            <circle cx="153.391" cy="32.3911" r="8.39107" fill={Fill} />
            <circle cx="136.5" cy="76.5" r="11.5" fill={Fill} />
            <circle cx="121.196" cy="18.1955" r="4.19554" fill={Fill} />
            <circle cx="98.4714" cy="2.09777" r="2.09777" fill={Fill} />
            <circle
                cx="107.523"
                cy="142.523"
                r="76.1453"
                transform="rotate(-48.1512 107.523 142.523)"
                fill={Fill}
            />
        </svg>
    );
}

export default BubblesFilled;
