import LoadingButton from '@mui/lab/LoadingButton'
import { Avatar, styled } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'

type PropsType = {
  src: string
  size: number | string
  loading: boolean
  startIcon?: JSX.Element
  endIcon?: JSX.Element
  style?: any
  variant?: 'text' | 'outlined' | 'contained'
  color?: 'inherit' | 'error' | 'secondary' | 'primary' | 'success' | 'info' | 'warning'
  submitForm: any
}
const AvatarUpload = (props: PropsType) => {
  const { src, size, loading, startIcon, submitForm, endIcon, style, variant = 'text', color = 'inherit' } = props
  const { t } = useTranslation()

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1
  })
  return (
    <div>
      <div className='grid relative items-center justify-center'>
        <Avatar alt='Avatar' src={src} sx={{ width: size, height: size }} />
        <LoadingButton
          loading={loading}
          sx={style}
          variant={variant}
          color={color}
          component='label'
          disableRipple
          startIcon={startIcon}
          endIcon={endIcon}
        >
          {t('Edit')}
          <VisuallyHiddenInput onChange={submitForm} type='file' />
        </LoadingButton>
      </div>
    </div>
  )
}

export default AvatarUpload
