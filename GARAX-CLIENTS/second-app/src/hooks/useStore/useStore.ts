import { useState, useEffect } from "react"

/*
from Koen Bok
A hook to simply use state between components
Usage:
	
// A central createStore file:
import { createStore } from "./Store"
export const useStore = createStore({
    activePage: 0,
})
	
// Use the store in a code component:
import { useStore } from "./useStore"
export function Nav(props) {
    const [page, setPage] = useStore()
    const cycleNav = (targetPage: number) => {
        setPage({ activePage: targetPage })
        console.log("TransitionEnd. CurrentPage: " + (targetPage + 1))
    }
    [...]
}
// Use data stored in an override:
import * as React from "react"
import { Override } from "framer"
import { useStore } from "./useStore"
export function ChangePage(): Override {
    const [page, setPage] = useStore()
    const targetPage = page.activePage
    return {
        currentPage: targetPage,
        onChangePage: (current) => {
            if (targetPage !== current) {
                setPage({ activePage: current })
                console.log("TransitionEnd. CurrentPage: " + (current + 1))
            }
        },
    }
}
*/

// actual store function

export function createStore<T>(state: T) {
    let storeState: T = Object.assign({}, state)
    const storeSetters = new Set<(state: T) => void>()

    const setStoreState = (state: Partial<T>) => {
        storeState = Object.assign({}, storeState, state)
        storeSetters.forEach((setter) => setter(storeState))
    }

    function useStore(): [T, typeof setStoreState] {
        const [state, setState] = useState(storeState)
        useEffect(() => {
            // storeSetters.add(setState)
            return () => {
                storeSetters.delete(setState);
            }
        }, [])
        storeSetters.add(setState)
        return [state, setStoreState]
    }

    return useStore
}