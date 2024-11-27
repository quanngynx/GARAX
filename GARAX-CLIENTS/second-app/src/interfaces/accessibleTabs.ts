import { ReactNode } from "react"
import { ITabsConfig } from "../pages/home/interfaces"

export interface accessibleTabsInterface {
    tabsConfig: ITabsConfig, 
    defaultIndex: ReactNode
}