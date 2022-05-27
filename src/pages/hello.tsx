import { NextPage } from 'next'
import Head from 'next/head'
import React, { ReactElement, ReactNode } from 'react'

const Hello: NextPage = () => {
  return (
    <>
      <Head>
        <title>Loading Page</title>
      </Head>
      <div>Hello World!</div>
    </>
  )
}

export default Hello
