import { FiStar } from 'react-icons/fi'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination, Autoplay } from '../../../node_modules/swiper'
import './style.css'
import { AiOutlineHeart } from 'react-icons/ai'
import { useTranslation } from 'react-i18next'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BaseItem = ({ data }: any) => {
  const { t } = useTranslation()
  return (
    <div className=''>
      <div className='w-full h-full rounded-xl overflow-hidden relative'>
        <Swiper
          loop={true}
          // autoplay={{
          // 	delay: 10000,
          // 	disableOnInteraction: false,
          // }}
          pagination={{
            dynamicBullets: true
          }}
          modules={[Pagination, Autoplay]}
          className='mySwiper cursor-pointer h-[280px]'
        >
          {data.images?.map((image: { id: string | number; url: string }) => {
            return (
              <SwiperSlide key={image.id}>
                <img width='100%' className='w-full h-full object-cover object-center' src={image.url} alt='img' />
              </SwiperSlide>
            )
          })}
        </Swiper>
        <div className='absolute z-10 top-3 right-3 cursor-pointer'>
          <AiOutlineHeart size='24px' color='white' />
        </div>
      </div>
      <div className='grid mt-2 grid-cols-5 justify-between font-bold gap-4'>
        <span className='col-span-3 text-ellipsis whitespace-nowrap overflow-hidden cursor-pointer'>
          {data.address}
        </span>
        <span className='col-span-2 cursor-pointer text-right'>
          <FiStar className='inline pb-[2px]' size='20px' /> {data.stars}{' '}
        </span>
      </div>
      <div className='mt-[2px]'>
        <span className='text-gray-600 cursor-pointer'>{`Cách ${data.distance} km`}</span>
      </div>
      <div className='mt-[2px]'>
        <span className='text-gray-600 cursor-pointer'>{`${data.startDate} - ${data.endDate}`}</span>
      </div>
      <div className='underline mt-[2px] cursor-pointer'>
        <span className='font-bold'>{`${data.price}$`}</span>
        <span>{t('Total before tax')}</span>
      </div>
    </div>
  )
}

export default BaseItem
