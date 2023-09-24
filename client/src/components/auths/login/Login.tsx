import React, { useState } from 'react'
import BaseDialog from '../../dialogs/BaseDialog'
import { useTranslation } from 'react-i18next'
import { Button, Divider, Grid, TextField, Typography } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton'
import { FcGoogle } from 'react-icons/fc'
import { ImFacebook2 } from 'react-icons/im'
import { ImAppleinc } from 'react-icons/im'
import { toast } from 'react-hot-toast'
import Cookies from 'universal-cookie'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useLoginUserMutation } from '../../../services/user.service'
import { UserType } from '../../../types/user.type'

interface LoginFormProps {
  openDialog: boolean
  setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>
  isLogin?: boolean
  setIsLogin?: any
}

type ParamsLoginType = {
  email: string
  password: string
}

const LoginForm = (props: LoginFormProps) => {
  const { openDialog, setOpenDialog, setIsLogin } = props
  const { t } = useTranslation()
  const cookies = new Cookies()
  const [loading, setLoading] = useState<boolean>(false)
  const formSchema = Yup.object().shape({
    email: Yup.string().required('Email is required'),
    password: Yup.string().required('Password is required')
  })
  const formOptions = { resolver: yupResolver(formSchema) }
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm(formOptions)

  const [loginUser] = useLoginUserMutation()
  // const mutation = useMutation({
  //   mutationFn: loginApi,
  //   onError: (error: any, variables: any, context: any) => {
  //     toast.error(error.response.data.message, { duration: 3000 })
  //   },
  //   onSuccess: async (data: any, variables: any, context: any) => {
  //     setOpenDialog(false)
  //     setIsLogin(true)

  //     cookies.set('TOKEN', data.data.data, {
  //       path: '/'
  //     })
  //     // window.location.href = "/auth";
  //     toast.success(data.data.message, { duration: 3000 })
  //   },
  //   onSettled: (data, error, variables, context) => {
  //     setLoading(false)
  //   }
  // })
  const onSubmit = async (dataReq: ParamsLoginType) => {
    setLoading(true)
    try {
      const result: any = await loginUser(dataReq)
      const data: UserType = result.data.data
      const message: string = result.data.message
      cookies.set('TOKEN', data, {
        path: '/'
      })
      setOpenDialog(false)
      setIsLogin(true)
      toast.success(message as string, { duration: 3000 })
    } catch (error: any) {
      console.log(error)
      toast.error(error?.response?.data?.message || 'Error', { duration: 3000 })
    } finally {
      setLoading(false)
    }
    // mutation.mutate(dataReq)
  }
  const LoginTitle = () => {
    return <span className='text-[18px] font-semibold text-[#222222]'>{t('Log in')}</span>
  }
  const LoginContent = () => {
    return (
      <div>
        <Typography variant='h6' component='h6' sx={{ fontWeight: 600 }}>
          {t('Welcome to')}
          {` `}Whalebnb
        </Typography>
        <div className='mt-7'>
          <form onSubmit={handleSubmit(onSubmit)} method='post'>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <TextField
                  color='secondary'
                  type='email'
                  fullWidth={true}
                  id='email'
                  label='Email'
                  {...register('email')}
                  error={Boolean(errors.email)}
                  helperText={errors.email?.message}
                  placeholder='example@gmail.com'
                  variant='outlined'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  color='secondary'
                  type='password'
                  fullWidth={true}
                  id='password'
                  label={t('Password')}
                  {...register('password')}
                  error={Boolean(errors.password)}
                  helperText={errors.password?.message}
                  variant='outlined'
                />
              </Grid>
            </Grid>
            <Typography variant='caption' display='block' sx={{ mt: 1 }}>
              {t('Please read the policy carefully before logging in')}
              {`. `}
              <span className='font-semibold underline'>{t('Privacy Policy')}</span>
            </Typography>
            <LoadingButton
              loading={loading}
              loadingPosition='end'
              sx={{ mt: 3 }}
              variant='contained'
              type='submit'
              fullWidth={true}
              color='secondary'
            >
              {t('Continue')}
            </LoadingButton>
          </form>
          <Divider sx={{ mt: 3, fontSize: '13px' }}>{t('Or')}</Divider>
          <div className='mt-5'>
            <Button sx={{ paddingY: '10px' }} variant='outlined' fullWidth={true} color='inherit'>
              <Grid container alignItems='center'>
                <Grid item>
                  <ImFacebook2 color='#3F51B5' size='24px' />
                </Grid>
                <Grid item xs={11}>
                  <span className='normal-case font-semibold'>
                    {t('Continue with')}
                    {` `}Facebook
                  </span>
                </Grid>
              </Grid>
            </Button>
          </div>
          <div className='mt-5'>
            <Button sx={{ paddingY: '10px' }} variant='outlined' fullWidth={true} color='inherit'>
              <Grid container alignItems='center'>
                <Grid item>
                  <FcGoogle size='24px' />
                </Grid>
                <Grid item xs={11}>
                  <span className='normal-case font-semibold'>
                    {t('Continue with')}
                    {` `}Google
                  </span>
                </Grid>
              </Grid>
            </Button>
          </div>
          <div className='mt-5'>
            <Button sx={{ paddingY: '10px' }} variant='outlined' fullWidth={true} color='inherit'>
              <Grid container alignItems='center'>
                <Grid item>
                  <ImAppleinc color='black' size='24px' />
                </Grid>
                <Grid item xs={11}>
                  <span className='normal-case font-semibold'>
                    {t('Continue with')}
                    {` `}Apple
                  </span>
                </Grid>
              </Grid>
            </Button>
          </div>
        </div>
      </div>
    )
  }
  const LoginActions = () => (
    <Button autoFocus onClick={() => setOpenDialog(false)}>
      Save changes
    </Button>
  )
  return (
    <BaseDialog
      open={openDialog}
      setOpen={setOpenDialog}
      maxWidth='sm'
      dialogAction={false}
      dialogTitle={true}
      fullWidth={true}
      title={LoginTitle()}
      content={LoginContent()}
      actions={LoginActions()}
    />
  )
}

export default LoginForm
