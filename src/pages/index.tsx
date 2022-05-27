import React, { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import LandingPageLayout from '../layouts/LandingPageLayout'

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Loading Page</title>
      </Head>
      <Container
        sx={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Typography variant="h2" component="div" color="primary">
          Material UI v5 with Next.js in TypeScript
        </Typography>

        <Typography
          variant="body1"
          component="div"
          color="secondary"
          sx={{ fontWeight: 300, position: 'absolute', bottom: 20 }}
        >
          Boilerplate for building faster.
        </Typography>
      </Container>
    </>
  )
}

Home.getLayout = (page: ReactElement) => {
  return <LandingPageLayout>{page}</LandingPageLayout>
}

export default Home
