import React from 'react'
import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.error(error);
  
  return (
    <div className='flex flex-col justify-center h-screen items-center'>
      <h1 className='font-bold text-3xl py-12'>Oops!</h1>
      <p>Sorry, {error.status} an unexpected error has occurred.</p>
      <p className='py-4'>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}

export default Error