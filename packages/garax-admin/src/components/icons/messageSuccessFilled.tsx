import type { SVGProps } from "react";

interface IMessageSuccessFilled {
    Fill: string | "#004440"
}
function MessageSuccessFilled(
    props: SVGProps<SVGSVGElement>,
    { Fill } : IMessageSuccessFilled
) {
    return (
        <svg
            width="78"
            height="78"
            viewBox="0 0 78 78"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props} 
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M38.9999 68.64C57.9543 68.64 73.3199 53.2744 73.3199 34.32C73.3199 15.3656 57.9543 0 38.9999 0C20.0455 0 4.67993 15.3656 4.67993 34.32C4.67993 44.9926 9.5515 54.5274 17.1923 60.822C17.2045 60.832 17.1936 60.8515 17.1787 60.8464V60.8464C17.1695 60.8433 17.16 60.8501 17.16 60.8598V71.5042C17.16 74.4834 20.3001 76.4171 22.9605 75.076L34.9719 69.0212C35.6354 68.6867 36.3786 68.5494 37.1205 68.5894C37.7427 68.623 38.3693 68.64 38.9999 68.64Z"
                fill={Fill}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M50.3012 24.3463C51.3603 25.1583 51.5625 26.6744 50.7531 27.7356L38.7427 43.4828C38.3193 44.0381 37.6774 44.3831 36.9817 44.4294C36.2861 44.4757 35.6044 44.2187 35.1114 43.7245L27.4884 36.0814C26.5456 35.1362 26.5456 33.6063 27.4884 32.661V32.661C28.4346 31.7123 29.9715 31.7123 30.9177 32.6611L36.5784 38.3366L46.9033 24.7993C47.7155 23.7343 49.2382 23.5313 50.3012 24.3463V24.3463Z"
                fill="white"
            />
        </svg>
    );
}

export default MessageSuccessFilled;
