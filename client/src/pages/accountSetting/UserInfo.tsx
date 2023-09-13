import { Avatar, Divider, Grid } from '@mui/material'
import { Link } from 'react-router-dom'
import Cookies from 'universal-cookie'
import { BsCheck2, BsBalloon } from 'react-icons/bs'
import { HiOutlineMap } from 'react-icons/hi'
import SettingFooter from '../../components/layouts/footers/SettingFooter'

const UserInfo = () => {
  const cookies = new Cookies()
  const userInfo = cookies.get('TOKEN')
  return (
    <div className='h-[100vh] mt-8'>
      <div className='py-[90px] px-[15%]'>
        <Grid container direction='row' justifyContent='space-between' alignItems='start' spacing={1}>
          <Grid item xs={4}>
            <div className='shadow-xl border-spacing-1 p-3 rounded-2xl'>
              <Grid container direction='row' justifyContent='center' alignItems='center'>
                <Grid item container xs={6} direction='column' alignItems='center' justifyContent='center'>
                  <Grid item>
                    {' '}
                    <Avatar alt='Avatar' sx={{ width: 100, height: 100 }} src={userInfo?.image} />
                  </Grid>
                  <Grid item>
                    <div className='my-6  font-medium text-gray-900'>
                      <p>{`${userInfo?.firstName} ${userInfo?.lastName}`}</p>
                    </div>
                  </Grid>
                </Grid>
                <Grid item xs={6}>
                  <div>2</div>
                  <div>
                    <span className='text-[12px]'>Tháng hoạt động trên Whale-bnb</span>
                  </div>
                </Grid>
              </Grid>
            </div>
            <div className='border-[1px] border-gray-300 mt-10 p-8 rounded-2xl'>
              <div className='mb-8'>
                <div className='mb-6'>
                  <h2 className='font-medium text-[22px]'>{`Thông tin được xác nhận của ${userInfo?.lastName}`}</h2>
                </div>
                <Grid container spacing={3}>
                  <Grid item>
                    <BsCheck2 size='24px' />
                  </Grid>
                  <Grid item>
                    <span>Địa chỉ email</span>
                  </Grid>
                </Grid>
              </div>
              <Divider />
              <div>
                <div className='my-8'>
                  <h2 className='font-medium text-[22px]'>Xác minh danh tính của bạn</h2>
                </div>
                <div className='my-8'>
                  <p className='text-gray-900'>
                    Bạn cần hoàn tất bước này trước khi đặt phòng/đặt chỗ hoặc đón tiếp khách trên Whalebnb.
                  </p>
                </div>
                <div>
                  <button className='border-[2px] py-3 px-6 border-black rounded-md hover:bg-gray-100 transition-transform active:scale-90'>
                    Xác minh
                  </button>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={7}>
            <div>
              <h2 className='text-[28px] font-semibold'>Thông tin về {userInfo?.firstName}</h2>
            </div>
            <div className='my-8'>
              <Link to={`/users/${userInfo.id}/edit`}>
                <button className='border-[1px] py-[6px] px-3 font-semibold text-gray-900 border-black rounded-lg text-[13px] hover:bg-gray-100 transition-transform active:scale-90'>
                  Chỉnh sửa hồ sơ
                </button>
              </Link>
            </div>
            <div className='mb-8'>
              <Grid container direction='row' alignItems='start' justifyContent='center' spacing={2}>
                <Grid item container direction='column' gap={2} xs={6}>
                  <Grid container item direction='row' alignItems='start' justifyContent='start'>
                    <Grid xs={2} item>
                      <BsBalloon size='24px' />
                    </Grid>
                    <Grid xs={10} item>
                      Ra đời vào những năm 2000
                    </Grid>
                  </Grid>
                  <Grid container direction='row' alignItems='start' justifyContent='start'>
                    <Grid item xs={2}>
                      <HiOutlineMap size='24px' />
                    </Grid>
                    <Grid item xs={10}>
                      Sống tại Thượng Đình, Hà Nội
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6}>
                  <Grid container spacing={2} direction='row' alignItems='center' justifyContent='start'>
                    <Grid item>
                      <BsBalloon size='24px' />
                    </Grid>
                    <Grid item>Thứ mà tôi luôn nghĩ đến: Em</Grid>
                  </Grid>
                </Grid>
              </Grid>
              <div className='mt-6'>
                <span className='text-[13px] text-gray-900'>
                  Một số thông tin đã được dịch tự động.{' '}
                  <Link to=''>
                    <span className='underline font-semibold'>Hiển thị bản gốc</span>
                  </Link>
                </span>
              </div>
            </div>
            <Divider />
          </Grid>
        </Grid>
      </div>
      <div>
        <SettingFooter />
      </div>
    </div>
  )
}

export default UserInfo
