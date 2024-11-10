export function withHover(Component) {
    // eslint-disable-next-line react/display-name
    return (props) => {
        return <Component {...props} whileHover={{ scale: 1.05 }} />
    }
}