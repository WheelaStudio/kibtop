import { useState } from "react"

export const useBoolState = () => {
    const [bool, setBool] = useState(false)
    const switchBool = () => setBool(!bool)

    return [bool, setBool, switchBool]
}