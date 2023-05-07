import React from "react"

export const addPropsToReactElement = (element, props) => {
    if (React.isValidElement(element)) {
      return React.cloneElement(element, props)
    }
    return element
}