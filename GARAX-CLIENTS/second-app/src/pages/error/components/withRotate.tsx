export function withRotate(Component) {
    // eslint-disable-next-line react/display-name
    return (props) => {
        return (
            <Component
                {...props}
                animate={{ rotate: 90 }}
                transition={{ duration: 2 }}
            />
        );
    };
}