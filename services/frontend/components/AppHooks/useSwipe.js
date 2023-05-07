import { useEffect } from "react"
import { useState } from "react"
import { useRef } from "react"
import { setScrollDisable } from "../../store/tools/setScrollDisable"

export const useSwipe = ({onClose, dist=30, side='bottom', isVertical=true, alt=false, transition=500, workingWidth=600, closeHeight}) => {
    const [touchStart, setTouchStart] = useState(null)
    const [touchEnd, setTouchEnd] = useState(null)

    const minSwipeDistance = dist
    const swipeDirection = isVertical ? 'clientY' : 'clientX'
    const swipeElem = useRef(null)
    const heightToClose = !!closeHeight ? `-${closeHeight}px` : '-100%'

    const onTouchStart = (e) => {

        setScrollDisable(true)

        setTouchEnd(null)
        setTouchStart(e.targetTouches[0][swipeDirection])
    }
    const onTouchMove = (e) => {

        setTouchEnd(e.targetTouches[0][swipeDirection])
    }

    const onTouchEnd = (e) => {
        
        setScrollDisable(false)


        if (!touchStart || !touchEnd) return

        const distance = touchEnd - touchStart
        const isSwipe = !alt ? distance > minSwipeDistance : distance < minSwipeDistance
        if(isSwipe && window.innerWidth < workingWidth) {
            swipeElem.current.style[side] = heightToClose
            setTimeout(onClose, transition)
        }
    }

    useEffect(() => {
        if(swipeElem.current && window.innerWidth < workingWidth) {
            swipeElem.current.style[side] = '0'
            swipeElem.current.style.transition = `${side} ${transition}ms`
            swipeElem.current.style.touchAction = 'none'

            return setScrollDisable(false)
        }
    }, [swipeElem.current])

    const handleClose = () => {
        swipeElem.current.style[side] = heightToClose
        setTimeout(onClose, transition)
        setScrollDisable(false)
    }

    return {
        swipe: {ref: swipeElem, onTouchStart, onTouchMove, onTouchEnd},
        handleClose 
    }

}