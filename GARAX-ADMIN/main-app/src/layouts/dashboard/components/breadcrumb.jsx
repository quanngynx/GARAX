import { Box, Breadcrumbs, Typography, Link } from '@mui/material'

import uppercaseFirstCharacter, {} from '../../../helpers/uppercaseFirstCharacter'

export default function HeaderCrums() {

  const paths = window.location.pathname.split('/').slice(1)

  const breadcrumbs= []
  paths.map((p, index) => {
    breadcrumbs.push({
      title: `${p}`,
      link: `/${paths.slice(0, index + 1).join('/')}`,
    })
  })

  return (
    <Breadcrumbs aria-label='breadcrumb' sx={{ marginLeft: "4px" }}>
      {breadcrumbs &&
        breadcrumbs.map((b, index) =>
          index !== breadcrumbs.length - 1 ? (
            <Box key={b.title}>
              <Link underline='hover' color='inherit' href={b.link}>
                {uppercaseFirstCharacter(b.title)}
              </Link>
            </Box>
          ) : (
            <Typography key={b.title}  sx={{ color: "text.primary", fontWeight: "bold" }}>
              {uppercaseFirstCharacter(b.title)}
            </Typography>
          ),
        )}
    </Breadcrumbs>
  )
}