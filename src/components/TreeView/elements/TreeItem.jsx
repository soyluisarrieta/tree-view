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
        <VariantItem>
          {children}
        </VariantItem>
      </div>
    </Wrapper>
  )
}

export default TreeItem
