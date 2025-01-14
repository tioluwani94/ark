import type { ItemGroupProps } from '@zag-js/menu'
import { mergeProps } from '@zag-js/solid'
import { createSplitProps } from '../create-split-props'
import { ark, type ArkComponent, type HTMLArkProps } from '../factory'
import type { Assign } from '../types'
import { useMenuContext } from './menu-context'

export interface MenuItemGroupProps extends Assign<HTMLArkProps<'div'>, ItemGroupProps> {}

export const MenuItemGroup: ArkComponent<'div', ItemGroupProps> = (props: MenuItemGroupProps) => {
  const menu = useMenuContext()
  const [itemGroupProps, localProps] = createSplitProps<ItemGroupProps>()(props, ['id'])
  const mergedProps = mergeProps(() => menu?.().getItemGroupProps(itemGroupProps), localProps)

  return <ark.div {...mergedProps} />
}
