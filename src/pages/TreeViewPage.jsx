import React from 'react'
import { TreeBranch, TreeItem, TreeView } from '../components/TreeView'

function TreeViewPage () {
  return (
    <TreeView title='Soy el titulo principal' className='w-96'>
      <TreeItem>Item 1</TreeItem>
      <TreeBranch title='Item 2'>
        <TreeItem>Item 2.1</TreeItem>
        <TreeBranch title='Item 2.2'>
          <TreeItem>Item 2.2.1</TreeItem>
        </TreeBranch>
        <TreeItem>Item 2.3</TreeItem>
        <TreeItem>Item 2.4</TreeItem>
        <TreeBranch title='Item 2.5'>
          <TreeItem>Item 2.5.1</TreeItem>
          <TreeItem>Item 2.5.2</TreeItem>
          <TreeItem>Item 2.5.3</TreeItem>
        </TreeBranch>
      </TreeBranch>
      <TreeItem variant='solids'>Item 3</TreeItem>
      <TreeItem>Item 4</TreeItem>
      <TreeBranch title='Item 5' />
    </TreeView>
  )
}

export default TreeViewPage
