import { useState } from 'react'
import { storage } from './../../firebase'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { v4 as uuidv4 } from 'uuid'
import toast from 'react-hot-toast'
import Cookies from 'universal-cookie'
import { useUploadAvatarMutation } from '../../services/user.service'
import Grid from '@mui/material/Grid'
import { Avatar, Button, styled } from '@mui/material'
import CameraAlt from '@mui/icons-material/CameraAlt'
import LoadingButton from '@mui/lab/LoadingButton'
import { useTranslation } from 'react-i18next'
import AvatarUpload from '../../components/avatars/AvatarUpload'
import TextWithIconItem from '../../components/items/TextWithIconItem'
import { BiGlobeAlt } from 'react-icons/bi'
import { BsBalloon, BsBriefcase, BsChatLeftText } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'
import { IoSchoolOutline } from 'react-icons/io5'
import SettingFooter from '../../components/layouts/footers/SettingFooter'
const UserInfoEdit = () => {
  const { t } = useTranslation()
  const [imagesUpload, setImagesUpload] = useState<any>(null)
  const [uploadImageLoading, setUploadImageLoading] = useState<boolean>(false)
  const cookies = new Cookies()
  const userInfo = cookies.get('TOKEN')
  const avatar = cookies.get('AVATAR')
  const [uploadAvatar] = useUploadAvatarMutation()
  const handleSaveAvatar = async (params: { image: string; id: string }) => {
    try {
      const result: any = await uploadAvatar(params)
      const message: string = result?.data?.message
      cookies.set('AVATAR', result?.data?.data?.image, {
        path: '/'
      })
      toast.success(message, { duration: 3000 })
    } catch (error) {
      console.log(error)
      toast.error('Lỗi khi lưu ảnh', { duration: 3000 })
    } finally {
      setUploadImageLoading(false)
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const submitForm = (event: any) => {
    const imagesUpload = event.target.files[0]
    if (!imagesUpload) return
    setUploadImageLoading(true)
    const imageRef = ref(storage, `images/${uuidv4() + imagesUpload.name}`)
    uploadBytes(imageRef, imagesUpload)
      .then((res) => {
        return getDownloadURL(res.ref)
      })
      .then((downloadURL) => {
        handleSaveAvatar({ image: downloadURL, id: userInfo.id })
        console.log(' URL', downloadURL)
      })
      .catch((error) => {
        console.log('that bai', error)
        setUploadImageLoading(false)
      })
  }

  const handleClick = () => {
    console.log('alo')
  }
  return (
    <div className='h-[100vh] mt-8'>
      <div className='pt-[90px] px-[15%]'>
        <Grid container direction='row' spacing={1}>
          <Grid container item xs={0} xl={3} sx={{ marginTop: '15px', position: 'relative' }}>
            <AvatarUpload
              src={avatar || userInfo?.image || ''}
              size={214}
              startIcon={<CameraAlt />}
              variant='text'
              color='inherit'
              style={{
                top: -15,
                left: 30,
                backgroundColor: 'white',
                borderRadius: '30px',
                boxShadow: 'rgba(0, 0, 0, 0.12) 0px 6px 16px',
                textTransform: 'none',
                width: '140px',
                '&:hover': {
                  backgroundColor: 'white'
                }
              }}
              loading={uploadImageLoading}
              submitForm={(event: React.ChangeEvent<HTMLInputElement>): void => submitForm(event)}
            />
          </Grid>
          <Grid container item xs={12} xl={9}>
            <h2 className='text-[32px] font-semibold'>{t('your profile')}</h2>
            <div>
              <span className='text-gray-800'>
                {t(
                  'The information you share will be used across Airbnb to help other guests and Hosts get to know you.'
                )}{' '}
                <span className='underline font-semibold cursor-pointer'>{t('Learn more')}</span>
              </span>
            </div>
            <div className='grid xl:grid-cols-2 md:grid-cols-1 gap-4 mt-6 items-center'>
              <TextWithIconItem
                arrowRightSize={24}
                arrowRight
                startIcon={<BsBalloon size={24} />}
                content={<span>{t('Decade I was born')}: 0</span>}
                onClick={() => {
                  handleClick()
                }}
              />
              <TextWithIconItem
                arrowRightSize={24}
                arrowRight
                startIcon={<AiOutlineHeart size={24} />}
                content={<span>{t("I'm obsessed with")}: Em</span>}
                onClick={() => {
                  handleClick()
                }}
              />
              <TextWithIconItem
                arrowRightSize={24}
                arrowRight
                startIcon={<BiGlobeAlt size={24} />}
                content={<span>{t('Where I live')}: Thuong Dinh, Ha Noi</span>}
                onClick={() => {
                  handleClick()
                }}
              />
              <TextWithIconItem
                startIcon={<IoSchoolOutline size={24} />}
                content={<span>{t('Where I went to school')}: EPU</span>}
                onClick={() => {
                  handleClick()
                }}
              />
              <TextWithIconItem
                startIcon={<BsBriefcase size={24} />}
                content={<span>{t('My work')}: FE</span>}
                onClick={() => {
                  handleClick()
                }}
              />
              <TextWithIconItem
                startIcon={<BsChatLeftText size={24} />}
                content={<span>{t('Languages I speak')}: VietNamese</span>}
                onClick={() => {
                  handleClick()
                }}
              />
            </div>
          </Grid>
        </Grid>
      </div>
      <div className='mt-10'>
        <SettingFooter />
      </div>
    </div>
  )
}

export default UserInfoEdit
