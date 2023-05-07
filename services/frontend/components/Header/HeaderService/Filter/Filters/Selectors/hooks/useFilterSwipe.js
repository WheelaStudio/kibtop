import { useEffect } from "react"
import { useState } from "react"
import { useRef } from "react"
import { setScrollDisable } from "../../../../../../../store/tools/setScrollDisable"

export const useFilterSwipe = ({onClose, dist=30, side='bottom', isVertical=true, alt=false, transition=500, workingWidth=600, elemHeight = '403px'}) => {
    const [touchStart, setTouchStart] = useState(null)
    const [touchEnd, setTouchEnd] = useState(null)

    const minSwipeDistance = dist
    const swipeDirection = isVertical ? 'clientY' : 'clientX'
    const swipeElem = useRef(null)

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
            swipeElem.current.style.top = '100%'

            setTimeout(onClose, transition)
        }
    }

    useEffect(() => {
        if(swipeElem.current && window.innerWidth < workingWidth) {
            swipeElem.current.style.top = `calc(100% - ${elemHeight})`
            swipeElem.current.style.transition = `top ${transition}ms`
            swipeElem.current.style.touchAction = 'none'

        return setScrollDisable(false)
        }
    }, [swipeElem.current])

    const handleClose = () => {
        swipeElem.current.style.top = '100%'
        setScrollDisable(false)
        setTimeout(onClose, transition)
    }

    return {
        swipe: {ref: swipeElem, onTouchStart, onTouchMove, onTouchEnd},
        handleClose 
    }

}