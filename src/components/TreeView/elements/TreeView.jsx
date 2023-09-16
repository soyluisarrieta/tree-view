import React from 'react'

function TreeView ({ header, title, className, children, ...props }) {
  return (
    <div className={`tree-view ${className}`} {...props}>
      <ul>
        <li>
          <div className='tree-header'>
            <div className='tree-content'>
              <div className='tree-box'>
                {title}
              </div>
            </div>
          </div>

          <ul className='tree-body'>
            {children}
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default TreeView
