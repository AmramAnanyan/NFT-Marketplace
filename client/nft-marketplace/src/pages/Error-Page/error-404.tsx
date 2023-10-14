import { isRouteErrorResponse, useRouteError } from 'react-router'

const Error404Page = () => {
  const error = useRouteError()

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>{error.status}</h1>
        <h2>{error.statusText}</h2>
      </div>
    )
  }
  return (
    <div>
      <div>
        <h1>Opss</h1>
      </div>
    </div>
  )
}

export default Error404Page
