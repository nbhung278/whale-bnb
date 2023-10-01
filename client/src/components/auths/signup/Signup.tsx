import React, { useState } from 'react'
import BaseDialog from '../../dialogs/BaseDialog'
import { useTranslation } from 'react-i18next'
import { Button, Divider, Grid, TextField, Typography } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useSignupUserMutation } from '../../../services/user.service'

interface SignupFormProps {
  openDialog: boolean
  setOpenDialog?: any
  setOpenLoginDialog?: any
}

interface paramsProps {
  firstName: string
  lastName: string
  userName: string
  email: string
  password: string
  passwordConfirm: string
}

const SignupForm: React.FC<SignupFormProps> = (props) => {
  const { openDialog, setOpenDialog, setOpenLoginDialog } = props
  const { t } = useTranslation()
  const [loading, setLoading] = useState<boolean>(false)
  const formSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required').max(255, 'Password must be less than 255 characters'),
    lastName: Yup.string().required('Last Name is required').max(255, 'Password must be less than 255 characters'),
    userName: Yup.string().required('User Name is required').max(255, 'Password must be less than 255 characters'),
    email: Yup.string().required('Email is required').max(255, 'Password must be less than 255 characters'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at 3 char long')
      .max(32, 'Password must be less than 32 characters'),
    passwordConfirm: Yup.string()
      .required('Password is required')
      .oneOf([Yup.ref('password')], 'Passwords does not match')
  })
  const formOptions = { resolver: yupResolver(formSchema) }
  const [signupUser] = useSignupUserMutation()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm(formOptions)

  // const mutation = useMutation({
  //   mutationFn: signupApi,
  //   onError: (error: any, variables: any, context: any) => {
  //     toast.error(error.response.data.message, { duration: 3000 })
  //   },
  //   onSuccess: async (data: any, variables: any, context: any) => {
  //     setOpenDialog(false)
  //     toast.success(data.data.message, { duration: 3000 })
  //   },
  //   onSettled: (data, error, variables, context) =>
  //     setLoading(false)
  //   }
  // })

  const returnLoginDialog = () => {
    setOpenDialog(false)
    setTimeout(() => {
      setOpenLoginDialog(true)
    }, 550)
  }
  const onSubmit = async (dataReq: paramsProps) => {
    setLoading(true)
    try {
      const result: any = await signupUser(dataReq)
      const message: string = result?.data?.message || result?.error?.data?.message

      if (result?.data?.status === 200) {
        setOpenDialog(false)
        toast.success(message, { duration: 3000 })
        reset()
      } else {
        toast.error(message, { duration: 3000 })
      }
    } catch (error: any) {
      toast.error('loi', { duration: 3000 })
    } finally {
      setLoading(false)
    }
    // setLoading(true)
    // const params = { ...data, type: 'user' }
    // mutation.mutate(params)
  }

  const SignupTitle = () => {
    return <span className='text-[18px] font-semibold text-[#222222]'>{t('Sign up')}</span>
  }

  const SignupContent = () => {
    return (
      <div>
        <Typography variant='h6' component='h6' sx={{ fontWeight: 600 }}>
          {t('Welcome to')}
          {` `}Whalebnb
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} method='post'>
          <div className='mt-7'>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <TextField
                  color='secondary'
                  fullWidth={true}
                  id='firstName'
                  label={t('First Name')}
                  {...register('firstName')}
                  error={Boolean(errors.firstName)}
                  helperText={errors.firstName?.message}
                  variant='outlined'
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  color='secondary'
                  fullWidth={true}
                  id='lastName'
                  label={t('Last Name')}
                  {...register('lastName')}
                  error={Boolean(errors.lastName)}
                  helperText={errors.lastName?.message}
                  variant='outlined'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  color='secondary'
                  fullWidth={true}
                  id='userName'
                  label={t('Username')}
                  {...register('userName')}
                  error={Boolean(errors.userName)}
                  helperText={errors.userName?.message}
                  variant='outlined'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  color='secondary'
                  fullWidth={true}
                  id='email'
                  label='Email'
                  {...register('email')}
                  error={Boolean(errors.email)}
                  helperText={errors.email?.message}
                  type='email'
                  placeholder='example@gmail.com'
                  variant='outlined'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  color='secondary'
                  fullWidth={true}
                  type='password'
                  id='password'
                  label={t('Password')}
                  {...register('password')}
                  error={Boolean(errors.password)}
                  helperText={errors.password?.message}
                  variant='outlined'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  color='secondary'
                  fullWidth={true}
                  type='password'
                  id='passwordConfirm'
                  label={t('passwordConfirm')}
                  {...register('passwordConfirm')}
                  error={Boolean(errors.passwordConfirm)}
                  helperText={errors.passwordConfirm?.message}
                  variant='outlined'
                />
              </Grid>
            </Grid>
            <Typography variant='caption' display='block' sx={{ mt: 1 }}>
              {t(
                "We'll send a verification code to the email address you used to create your account. If you don't verify your address, you won't be able to create an account"
              )}
              <span className='font-semibold underline'>{t('Privacy Policy')}</span>
            </Typography>
            <LoadingButton
              loading={loading}
              loadingPosition='end'
              sx={{ mt: 3 }}
              type='submit'
              variant='contained'
              fullWidth={true}
              color='secondary'
            >
              {t('Continue')}
            </LoadingButton>
            <Divider sx={{ mt: 3, fontSize: '13px' }}>{t('Or if you had an account')}</Divider>
            <div className='mt-5'>
              <Button onClick={returnLoginDialog} variant='contained' fullWidth={true} color='primary'>
                {t('Log in')}
              </Button>
            </div>
          </div>
        </form>
      </div>
    )
  }
  const SignupAction = () => (
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
      title={SignupTitle()}
      content={SignupContent()}
      actions={SignupAction()}
    ></BaseDialog>
  )
}

export default SignupForm
