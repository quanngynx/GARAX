import { StyledWrapper } from "./styles/styledComponent";

export function ToggleThemeButton() {
    return (
        <StyledWrapper>
            <div className="switch">
                <div className="bg"></div>
                <input type="checkbox" name="switch" id="switch" />
                <label htmlFor="switch">
                    <span className="dot"></span>
                    <span className="moon">
                        <svg
                            id="Layer_1"
                            data-name="Layer 1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 210 209.17"
                        >
                            <path d="M200.13,118.49c-2.05-.51-4.09,0-5.88,1.28-6.65,5.63-14.32,10.23-22.76,13.3-7.93,3.07-16.62,4.6-25.83,4.6-20.72,0-39.64-8.44-53.19-21.99s-21.99-32.48-21.99-53.19c0-8.7,1.53-17.13,4.09-24.81,2.81-8.18,6.91-15.6,12.28-21.99,2.3-2.81,1.79-6.91-1.02-9.21-1.79-1.28-3.84-1.79-5.88-1.28-21.74,5.88-40.66,18.93-54.22,36.32C12.67,58.65,5,79.87,5,102.89c0,27.88,11.25,53.19,29.67,71.61,18.41,18.41,43.48,29.67,71.61,29.67,23.53,0,45.27-8.18,62.66-21.74,17.65-13.81,30.43-33.5,35.8-56.01,1.02-3.58-1.02-7.16-4.6-7.93Z" />
                        </svg>
                    </span>
                    <span className="glare">
                        <span className="glare-1"></span>
                        <span className="glare-3"></span>
                    </span>
                    <span className="glare-2"></span>
                </label>
            </div>
        </StyledWrapper>
    );
}

