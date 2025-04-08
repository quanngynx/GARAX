/* eslint-disable @typescript-eslint/no-explicit-any */
export function withRotate(Component: any) {
    return (props: any) => {
        return (
            <Component
                {...props}
                animate={{ rotate: 90 }}
                transition={{ duration: 2 }}
            />
        );
    };
}