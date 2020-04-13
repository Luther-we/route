import React from 'react'
import { Route, Link, Switch, Redirect, useLocation } from "react-router-dom";
import { Error404 } from '../components/errors';


const RouteWithSubRoutes = ({path, ...route}) => (
  <>
    <Route
      path={path}
      render={props => (
        <route.component
          routes={route.routes}
          {...props}
        />
      )}
    />
  </>
)

export const CreateLinks = ({routes}) => (
  <>
  {
    routes.map((route, i) => (
    
      <Link
        key={i}
        to={route.path}
      >
      {route.name}
    </Link>
    )
)}
  </>
)

export const CreateRoutes =({ routes }) => (
  <>
    <Switch>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </Switch>
  </>
)

export const RedirectTo = ({url}) => {
  console.log('Redirect to reçois ', url)
  return (
    <>
      <Redirect to={url} />
    </>
  )
}

export const RedirectErrorTo = (data) => {
  let location = useLocation()
                  .pathname
                  .split('/')
                  .filter(item => (
                    item !== ''
                    ))

  switch (location[0]) {
    case "about":
      return (
        <>
          <RedirectTo url='/about' />
        </>
      )
    default:
      return (
        <Error404 />
      )
  }
}
