import React from 'react'

// Fn: create multi wrappers
function createWrappers ({ elementArray, props, children }) {
  let wrappedElement = children
  if (elementArray.length > 1) {
    for (let i = elementArray.length - 1; i >= 0; i--) {
      const currentElement = elementArray[i]
      if (currentElement) {
        wrappedElement = React.createElement(currentElement, props, wrappedElement)
      }
    }
  } else {
    wrappedElement = React.createElement(elementArray[0], props, wrappedElement)
  }

  return wrappedElement
}

function Wrapper ({ element, children, ...props }) {
  // Fragment
  if (!element) {
    return <>{children}</>
  }

  // Wrapper
  const elementArray = element.split(' ')
  if (elementArray.length === 1) {
    return React.createElement(elementArray[0], props, children)
  }

  // Multi-Wrappers
  const componentWrapped = createWrappers({ elementArray, props, children })
  return componentWrapped
}

export default Wrapper
