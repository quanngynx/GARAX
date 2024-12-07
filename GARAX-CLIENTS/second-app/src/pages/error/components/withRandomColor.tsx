import { createStore } from "https://framer.com/m/framer/store.js@^1.0.0"
import { randomColor } from "https://framer.com/m/framer/utils.js@^0.9.0"

const useStore = createStore({
    background: "#0099FF",
})

export function withRandomColor(Component) {
    // eslint-disable-next-line react/display-name
    return (props) => {
        const [store, setStore] = useStore()

        return (
            <Component
                {...props}
                animate={{
                    background: store.background,
                }}
                onClick={() => {
                    setStore({ background: randomColor() })
                }}
            />
        )
    }
}