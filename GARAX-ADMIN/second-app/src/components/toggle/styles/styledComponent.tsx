import styled from "styled-components";

export const StyledWrapper = styled.div`
    input {
        display: none;
    }
    .switch {
        margin: auto;
    }
    .switch .bg {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
        transition: background 0.3s ease;
    }
    .switch:has(input:checked) .bg {
        background: #1e2130;
    }

    .switch label {
        display: block;
        width: 150px;
        height: 80px;
        position: relative;
        background-color: #dbdeee;
        border-radius: 40px;
        cursor: pointer;
        transition: all 0.2s ease;
    }
    .switch .dot {
        display: block;
        position: absolute;
        width: 64px;
        height: 64px;
        border-radius: 50%;
        background-color: #f4f4fb;
        box-shadow:
            1px 2px 10px -5px #0000006b,
            inset -1px 1px 3px #ffffff3b;
        left: 8px;
        top: 8px;
        transition: all 0.5s ease;
        z-index: 1;
    }
    .switch input:checked + label .dot {
        left: 71px;
        top: 11px;
    }
    .switch input:checked + label {
        background-color: #191e36;
        box-shadow:
            3px 3px 6px -2px #ffffff47,
            1px 1px 44px 0px #ffffff1a;
    }

    .moon {
        position: absolute;
        display: flex;
        width: 64px;
        height: 64px;
        right: 8px;
        top: 8px;
        border-radius: 50%;
        transition: all 0.2s ease;
        z-index: 2;
    }
    .moon svg {
        width: 30px;
        margin: auto;
    }
    .moon path {
        fill: #fff0;
        stroke: #191e36;
        stroke-miterlimit: 10;
        stroke-width: 10px;
        transition: all 0.8s ease;
    }

    .switch input:checked + label .moon {
        background-color: #191e36;
    }
    .switch input:checked + label .moon path {
        fill: #fff;
        stroke: #fff;
        stroke-miterlimit: 0;
        stroke-width: 0px;
    }
    label .glare {
        position: absolute;
        width: 230px;
        transform: rotate(30deg);
        right: -93px;
        top: 16px;
        opacity: 0;
        transition: all 0.1s ease;
    }
    label .glare-1 {
        display: block;
        width: 100%;
        height: 500px;
        border-radius: 50% 50% 0 0;
        position: absolute;
        background: radial-gradient(
            ellipse farthest-side at top,
            #8498e7b8,
            #1e2130
        );
        filter: blur(13px);
        opacity: 1.5;
    }
    label .glare-2 {
        display: block;
        width: 100px;
        height: 180px;
        border-radius: 50% 50% 0 0;
        position: absolute;
        background: radial-gradient(
            ellipse farthest-side at top,
            #d9faff,
            #ffffff00
        );
        filter: blur(20px);
        right: 33px;
        top: 30px;
        z-index: 3;
        transform: rotate(30deg);
        opacity: 0;
        transition: all 0.1s ease;
    }
    label .glare-3 {
        display: block;
        width: 60px;
        height: 80px;
        border-radius: 50%;
        position: absolute;
        background-image: radial-gradient(
            ellipse closest-side at center,
            #d6f7ff,
            #ffffff8f
        );
        filter: blur(14px);
        left: 50%;
        top: 30px;
        margin-left: -30px;
        opacity: 0.5;
    }

    .switch input:checked + label .glare {
        opacity: 1;
        transition: all 0.5s ease;
        transition-delay: 0.05s;
    }

    .switch input:checked + label .glare-2 {
        opacity: 1;
        transition: all 0.2s ease;
        transition-delay: 0.05s;
    }
`;
