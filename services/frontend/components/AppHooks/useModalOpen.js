import { setScrollDisable } from "../../store/tools/setScrollDisable"
import { useBoolState } from "./useBoolState"

export const useModalOpen = () => {
    const [isOpen, setOpen, switchOpen] = useBoolState()
    
    const switchOpenWithoutScroll = () => {
        setScrollDisable(!isOpen)
        switchOpen()
    }

    return [isOpen, setOpen, switchOpenWithoutScroll]
}