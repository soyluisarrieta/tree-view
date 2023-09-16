import React from 'react'
import { TreeItemDefault, TreeItemSolid } from './TreeVariantItems'
import combineClassNames from '../../../utils/combineClassNames'
import Wrapper from '../../commons/Wrapper'

const variantItems = {
  default: TreeItemDefault,
  solid: TreeItemSolid
}

function TreeItem ({ variant = 'default', className, isBranch = false, children, ...props }) {
  const VariantItem = variantItems[variant] || TreeItemDefault
  const classes = combineClassNames('tree-item', className)

  return (
    <Wrapper element={!isBranch && 'li'}>
      <div className={classes} {...props}>
        <svg className='tree-curve' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 41 51.5' width='20px' fill='var(--color-lines)'>
          <path d='M41,51.5H23.6C10.6,51.5,0,40.9,0,27.9L0.4,0h3.1L4,27.9c0,10.8,8.8,19.6,19.6,19.6H41V51.5z' />
        </svg>

        <VariantItem>
          {children}
        </VariantItem>
      </div>
    </Wrapper>
  )
}

export default TreeItem
