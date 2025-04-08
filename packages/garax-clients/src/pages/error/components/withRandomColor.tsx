/* eslint-disable @typescript-eslint/no-explicit-any */
// import { createStore } from "https://framer.com/m/framer/store.js@^1.0.0";
// import { randomColor } from "https://framer.com/m/framer/utils.js@^0.9.0";


import type { ComponentType } from "react";

// const useStore = createStore({
//     background: "#0099FF",
// })

export function withRandomColor(Component: any): ComponentType {
    return (props: any) => {
        // const [store, setStore] = useStore()

        return (
            <Component
                {...props}
                animate={{
                    background: "#0099FF",
                }}
                onClick={() => {
                    // setStore({ background: "#0099FF" })
                }}
            />
        )
    }
}