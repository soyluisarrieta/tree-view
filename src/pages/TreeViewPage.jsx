import React from 'react'
import { TreeBranch, TreeItem, TreeView } from '../components/TreeView'

function TreeViewPage () {
  return (
    <main className='flex justify-center gap-x-7'>
      <div>
        <h2 className='font-semibold text-3xl p-3 text-zinc-400'>Component</h2>
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
      </div>
      <div className='w-full max-w-3xl'>
        <h2 className='font-semibold text-3xl p-3 text-zinc-400'>Reference</h2>
        <img className='w-' src='image_processing20211118-15492-16gegj.webp' alt='Reference' srcset='' />
      </div>
    </main>
  )
}

export default TreeViewPage
