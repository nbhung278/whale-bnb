import React, { useState } from 'react'
import { storage } from './../../firebase'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { v4 as uuidv4 } from 'uuid'
import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import Cookies from 'universal-cookie'
import { uploadAvatar } from '../../apis/userApis'

const UserInfoEdit = () => {
  const [imagesUpload, setImagesUpload] = useState<any>(null)
  const cookies = new Cookies()
  const userInfo = cookies.get('TOKEN')
  const mutation = useMutation({
    mutationFn: uploadAvatar,
    onError: (error: any, variables: any, context: any) => {
      toast.error(error.response.data.message, { duration: 3000 })
    },
    onSuccess: async (data: any, variables: any, context: any) => {
      cookies.set('AVATAR', data.data.data?.image, {
        path: '/'
      })
      toast.success(data.data.message, { duration: 3000 })
    }
  })
  const submitForm = () => {
    if (!imagesUpload) return
    const imageRef = ref(storage, `images/${uuidv4() + imagesUpload.name}`)
    uploadBytes(imageRef, imagesUpload)
      .then((res) => {
        return getDownloadURL(res.ref)
      })
      .then((downloadURL) => {
        mutation.mutate({ image: downloadURL, id: userInfo.id })
        console.log(' URL', downloadURL)
      })
      .catch((error) => {
        console.log('that bai', error)
      })
  }
  return (
    <div className='h-[100vh]'>
      <div className='pt-[90px] px-[15%]'>
        <div>Edit</div>
        <input type='file' name='' id='filesUpload' onChange={(event) => setImagesUpload(event.target.files[0])} />
        <button type='button' onClick={submitForm}>
          Submit
        </button>
      </div>
    </div>
  )
}

export default UserInfoEdit
