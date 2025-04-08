/* eslint-disable @typescript-eslint/no-explicit-any */
export function withHover(Component: any) {
    return (props: any) => {
        return <Component {...props} whileHover={{ scale: 1.05 }} />
    }
}