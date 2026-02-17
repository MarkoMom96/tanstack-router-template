import { TanStackDevtools } from '@tanstack/react-devtools'
import { ReactQueryDevtoolsPanel } from '@tanstack/react-query-devtools'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'

//* devtools are excluded from production builds
export const Devtools = () => {
  return (
    <TanStackDevtools
      plugins={[
        {
          name: 'TanStack Query',
          render: <ReactQueryDevtoolsPanel />,
          defaultOpen: true
        },
        {
          name: 'TanStack Router',
          render: <TanStackRouterDevtoolsPanel />,
          defaultOpen: false
        }
      ]}
    />
  )
}
