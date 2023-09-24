import { Grid, Skeleton } from '@mui/material'

const SkeletonLocation = () => {
  return (
    <>
      <Skeleton variant='rectangular' height={250} sx={{ borderRadius: '10px' }} />
      <Grid container direction='row' justifyContent='space-between' alignItems='center'>
        <Grid item xs={9}>
          <Skeleton />
        </Grid>
        <Grid item xs={2}>
          <Skeleton />
        </Grid>
      </Grid>
      <Skeleton width={170} />
      <Skeleton width={190} />
      <Skeleton width={150} />
    </>
  )
}

export default SkeletonLocation
