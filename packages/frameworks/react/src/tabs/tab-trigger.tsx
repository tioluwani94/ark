import { mergeProps } from '@zag-js/react'
import type { TriggerProps } from '@zag-js/tabs'
import { forwardRef } from 'react'
import { createSplitProps } from '../create-split-props'
import { ark, type HTMLArkProps } from '../factory'
import { type Assign } from '../types'
import { useTabsContext } from './tabs-context'

export type TabTriggerProps = Assign<HTMLArkProps<'button'>, TriggerProps>

export const TabTrigger = forwardRef<HTMLButtonElement, TabTriggerProps>((props, ref) => {
  const [tabProps, buttonProps] = createSplitProps<TriggerProps>()(props, ['disabled', 'value'])
  const { getTriggerProps } = useTabsContext()
  const mergedProps = mergeProps(getTriggerProps(tabProps), buttonProps)

  return <ark.button {...mergedProps} ref={ref} />
})

TabTrigger.displayName = 'TabTrigger'