import * as React from 'react'
import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'
import { Devtools } from '@/devtools'
import type { QueryClient } from '@tanstack/react-query'

type RootContext = {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<RootContext>()({
  component: RootComponent
})

function RootComponent() {
  return (
    <React.Fragment>
      <Outlet />
      <Devtools />
    </React.Fragment>
  )
}
