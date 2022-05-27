import Container from '@mui/material/Container'
import React, { ReactElement } from 'react'

const LandingPageLayout = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          background: `url('/bg-main.avif') no-repeat center center fixed`,
          backgroundSize: 'cover'
        }}
      >
        {children}
      </Container>
    </>
  )
}

export default LandingPageLayout
