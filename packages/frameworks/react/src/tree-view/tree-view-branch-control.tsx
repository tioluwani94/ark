import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { ark, type HTMLArkProps } from '../factory'
import { useTreeViewBranchContext } from './tree-view-branch-context'
import { useTreeViewContext } from './tree-view-context'

export interface TreeViewBranchControlProps extends HTMLArkProps<'div'> {}

export const TreeViewBranchControl = forwardRef<HTMLDivElement, TreeViewBranchControlProps>(
  (props, ref) => {
    const api = useTreeViewContext()
    const branchProps = useTreeViewBranchContext()
    const mergedProps = mergeProps(api.getBranchControlProps(branchProps), props)

    return <ark.div {...mergedProps} ref={ref} />
  },
)

TreeViewBranchControl.displayName = 'TreeViewBranchControl'
