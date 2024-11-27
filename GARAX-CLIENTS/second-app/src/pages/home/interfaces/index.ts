import { ReactNode } from "react"

export interface IReviewFeedback {
    tit: string
    img: string
    icon: ReactNode
    detail: string
    name: string
    role:string
}

export interface ITabsConfig {
    label: string
    content: string
} 