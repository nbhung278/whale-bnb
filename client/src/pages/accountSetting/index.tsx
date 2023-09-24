import Cookies from 'universal-cookie'
import Grid from '@mui/material/Grid'
import SettingBox from '../../components/boxes/SettingBox'
import { CiMoneyCheck1, CiUser } from 'react-icons/ci'
import { BsShieldCheck, BsEyeglasses, BsGift } from 'react-icons/bs'
import { AiOutlineNotification, AiOutlineStock, AiOutlineFile } from 'react-icons/ai'
import { BsBriefcase } from 'react-icons/bs'
import { RxSwitch } from 'react-icons/rx'
import SettingFooter from '../../components/layouts/footers/SettingFooter'
import { Link } from 'react-router-dom'

type SettingArrays = {
  id: number
  icon: JSX.Element
  title: string
  content: string
}

const AccountSettings = () => {
  const cookies = new Cookies()
  const userInfo = cookies.get('TOKEN')
  const settingArrays: SettingArrays[] = [
    {
      id: 1,
      icon: <CiUser size='36px' />,
      title: 'Personal info',
      content: 'Provide personal details and how we can reach you'
    },
    {
      id: 2,
      icon: <BsShieldCheck size='36px' />,
      title: 'Login & security',
      content: 'Update your password and secure your account'
    },
    {
      id: 3,
      icon: <CiMoneyCheck1 size='36px' />,
      title: 'Payments & payouts',
      content: 'Review payments, payouts, coupons, and gift cards'
    },
    {
      id: 4,
      icon: <AiOutlineFile size='36px' />,
      title: 'Taxes',
      content: 'Manage taxpayer information and tax documents'
    },
    {
      id: 5,
      icon: <AiOutlineNotification size='36px' />,
      title: 'Notifications',
      content: 'Choose notification preferences and how you want to be contacted'
    },
    {
      id: 6,
      icon: <BsEyeglasses size='36px' />,
      title: 'Privacy & sharing',
      content: 'Manage your personal data, connected services, and data sharing settings'
    },
    {
      id: 7,
      icon: <RxSwitch size='36px' />,
      title: 'Global preferences',
      content: 'Set your default language, currency, and timezone'
    },
    {
      id: 8,
      icon: <BsBriefcase size='36px' />,
      title: 'Travel for work',
      content: 'Add a work email for business trip benefits'
    },
    {
      id: 9,
      icon: <AiOutlineStock size='36px' />,
      title: 'Professional hosting tools',
      content: 'Get professional tools if you manage several properties on Airbnb'
    },
    {
      id: 10,
      icon: <BsGift size='36px' />,
      title: 'Referral credit & coupon',
      content: 'You have $0 referral credits and coupon. Learn more.'
    }
  ]
  return (
    <div className='h-[100vh]'>
      <div className='pt-[90px] px-[15%]'>
        <div className='mt-8'>
          <span className='font-semibold text-gray-900 text-[32px]'>Tài khoản</span>
        </div>
        <div className='mt-2 text-gray-900 text-[18px]'>
          <span className='font-semibold'>{`${userInfo.firstName} ${userInfo.lastName}`}</span>
          <span>{`, ${userInfo.email}`}</span>
          <span>. </span>
          <span className='font-semibold underline cursor-pointer'>
            <Link to={`/users/${userInfo.id}`}>Go to profile</Link>
          </span>
        </div>
        <div className='mt-[64px]'>
          <Grid container direction='row' justifyContent='flex-start' alignItems='flex-start' spacing={2}>
            {settingArrays?.map((el) => (
              <Grid key={el.id} item xs={12} sm={6} md={4}>
                <SettingBox icon={el?.icon} title={el?.title} content={el?.content} />
              </Grid>
            ))}
          </Grid>
        </div>
        <div className='my-10 w-full text-center pb-6'>
          <div>
            <span className=' text-gray-900'>Need to deactivate your account?</span>
          </div>
          <div className='cursor-pointer'>
            <span className='text-[13px] font-semibold underline text-gray-900'>Take care of that now</span>
          </div>
        </div>
      </div>
      <div>
        <SettingFooter />
      </div>
    </div>
  )
}

export default AccountSettings
