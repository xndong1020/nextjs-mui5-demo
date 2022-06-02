import React, { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import LandingPageLayout from '../layouts/LandingPageLayout'
import Banner from '../components/Banner'

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Another Page</title>
      </Head>
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Typography variant="h2" component="div" color="primary">
          Another Awesome Page
        </Typography>
      </Box>
    </>
  )
}

Home.getLayout = (page: ReactElement) => {
  return <LandingPageLayout>{page}</LandingPageLayout>
}

export default Home
