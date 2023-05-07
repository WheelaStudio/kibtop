import { useEffect, useState } from "react"

export const useClientSideValue = value => {
    const [clientValue, setClientValue] = useState(null)

    useEffect(() => setClientValue(value), [value])

    return clientValue
}