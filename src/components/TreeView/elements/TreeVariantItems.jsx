import React from 'react'

const TreeItemDefault = ({ children }) => (
  <div className='tree-content'>
    {children}
  </div>
)

const TreeItemSolid = ({ children }) => (
  <div className='tree-box'>
    {children}
  </div>
)

export {
  TreeItemDefault,
  TreeItemSolid
}
