import { Grid } from '@mui/material'
import BaseItem from '../../common/items/BaseItem'
import { useGetLocationsQuery } from '../../services/location.service'
import { Fragment } from 'react'
import SkeletonLocation from '../../components/SkeletonLocation'

const HomeContent = () => {
  const { data, isLoading, isFetching } = useGetLocationsQuery('')
  console.log(data, isLoading, isFetching)

  return (
    <div className='px-20'>
      {isFetching ? (
        <Fragment>
          <Grid container direction='row' justifyContent='start' alignItems='center' spacing={1}>
            <Grid item sm={6} xs={12} md={3} sx={{ marginTop: '30px' }}>
              <SkeletonLocation />
            </Grid>
            <Grid item sm={6} xs={12} md={3} sx={{ marginTop: '30px' }}>
              <SkeletonLocation />
            </Grid>
            <Grid item sm={6} xs={12} md={3} sx={{ marginTop: '30px' }}>
              <SkeletonLocation />
            </Grid>
            <Grid item sm={6} xs={12} md={3} sx={{ marginTop: '30px' }}>
              <SkeletonLocation />
            </Grid>
          </Grid>
        </Fragment>
      ) : (
        <Grid container direction='row' justifyContent='start' alignItems='center' spacing={1}>
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {data?.map((location: any) => {
            return (
              <Grid key={`${location.id}${location.address}`} item sm={6} xs={12} md={3} sx={{ marginTop: '30px' }}>
                <BaseItem data={location} />
              </Grid>
            )
          })}
        </Grid>
      )}
    </div>
  )
}

export default HomeContent
