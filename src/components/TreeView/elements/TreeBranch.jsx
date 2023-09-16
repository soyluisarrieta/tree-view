import React from 'react'
import TreeItem from './TreeItem'

function TreeBranch ({ title, variant = 'solid', children, ...props }) {
  return (
    <li>
      <TreeItem variant={variant} {...props} isBranch>{title}</TreeItem>
      <ul>
        {children}
      </ul>
    </li>
  )
}

export default TreeBranch
