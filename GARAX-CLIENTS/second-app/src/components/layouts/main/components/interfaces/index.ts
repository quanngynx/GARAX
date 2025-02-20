import React from "react"

export interface drawersPaymentInterfaces {
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export interface drawersCartInterfaces {
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    onProceed: () => void
}