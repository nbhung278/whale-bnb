import Grid from '@mui/material/Grid'
import { Divider } from '@mui/material'
import { ImFacebook2 } from 'react-icons/im'
import { BsInstagram } from 'react-icons/bs'
import { FaTiktok } from 'react-icons/fa'

type ElementProps = {
  id: string | number
  title: string
}

type SettingArrayProp = {
  id: string | number
  title: string
  element: ElementProps[]
}

const SettingFooter = () => {
  const SettingArray: SettingArrayProp[] = [
    {
      id: 'a',
      title: 'Suport',
      element: [
        {
          id: 'a1',
          title: 'Help Center'
        },
        {
          id: 'a2',
          title: 'Get help with a safety issue'
        },
        {
          id: 'a3',
          title: 'WhaleCover'
        },
        {
          id: 'a4',
          title: 'Supporting people with disabilities'
        },
        {
          id: 'a5',
          title: 'Cancellation options'
        },
        {
          id: 'a6',
          title: 'Our COVID-19 Response'
        },
        {
          id: 'a7',
          title: 'Report a neighborhood concern'
        }
      ]
    },
    {
      id: 'b',
      title: 'Community',
      element: [
        {
          id: 'b1',
          title: 'Whalebnb.org: disaster relief housing'
        },
        {
          id: 'b2',
          title: 'Combating discrimination'
        }
      ]
    },
    {
      id: 'c',
      title: 'Hosting',
      element: [
        {
          id: 'c1',
          title: 'Whalebnb your home'
        },
        {
          id: 'c2',
          title: 'WhaleCover for Hosts'
        },
        {
          id: 'c3',
          title: 'Explore hosting resources'
        },
        {
          id: 'c4',
          title: 'Visit our community forum'
        },
        {
          id: 'c5',
          title: 'How to host responsibly'
        },
        {
          id: 'c6',
          title: 'Whalebnb-friendly apartments'
        }
      ]
    },
    {
      id: 'd',
      title: 'Whalebnb',
      element: [
        {
          id: 'd1',
          title: 'Newsroom'
        },
        {
          id: 'd2',
          title: 'Learn about new features'
        },
        {
          id: 'd3',
          title: 'Letter from our founders'
        },
        {
          id: 'd4',
          title: 'Careers'
        },
        {
          id: 'd5',
          title: 'Investors'
        },
        {
          id: 'd6',
          title: 'Gift cards'
        }
      ]
    }
  ]
  return (
    <div className='w-full px-[10%] bg-[#f7f7f7] border-t-[1px]'>
      <div className='mb-8'>
        <Grid container direction='row' justifyContent='space-between' alignItems='flex-start' spacing={3}>
          {SettingArray?.map((el) => (
            <Grid key={el.id} item xs={3}>
              <div className='mt-10'>
                <div>
                  <span className='font-semibold text-gray-900'>{el.title}</span>
                </div>
                <div className='mt-6'>
                  {el.element?.map((item) => (
                    <div key={item.id} className='mt-3'>
                      <span className='text-gray-900 text-[14px] hover:underline hover:cursor-pointer'>
                        {item.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
      <Divider />
      <div className='py-6'>
        <Grid container direction='row' justifyContent='space-between' alignItems='flex-start' spacing={2}>
          <Grid container item spacing={3} xs={6}>
            <Grid item>
              <span className='text-gray-900 text-[14px]'>© 2023 Airbnb, Inc.</span>
            </Grid>
            <Grid item>
              <span className='text-gray-900 text-[14px] hover:cursor-pointer hover:underline'>·Quyền riêng tư</span>
            </Grid>
            <Grid item>
              <span className='text-gray-900 text-[14px] hover:cursor-pointer hover:underline'>.Điều khoản</span>
            </Grid>
            <Grid item>
              <span className='text-gray-900 text-[14px] hover:cursor-pointer hover:underline'>·Hồ sơ trang web</span>
            </Grid>
          </Grid>
          <Grid container item spacing={3} xs={6} justifyContent='flex-end'>
            <Grid item>
              <ImFacebook2 className='hover:cursor-pointer' size='16px' />
            </Grid>
            <Grid item>
              <BsInstagram className='hover:cursor-pointer' size='16px' />
            </Grid>
            <Grid item>
              <FaTiktok className='hover:cursor-pointer' size='16px' />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default SettingFooter
