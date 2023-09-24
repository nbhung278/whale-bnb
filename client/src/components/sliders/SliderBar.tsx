import { useState } from 'react'
import { Button, Divider, FormControlLabel, Grid, InputAdornment, TextField } from '@mui/material'
import NavBaseSlider from '../../common/sliders/NavBaseSlider'
import Tsunami from '../../assets/images/icon-tsunami.png'
import Hotel from '../../assets/images/star-hotel.png'
import SwimmingPool from '../../assets/images/swimming-pool.png'
import Greenhouse from '../../assets/images/greenhouse.png'
import Coffee from '../../assets/images/iced-coffee.png'
import Apartment from '../../assets/images/apartment-.png'
import FoodCart from '../../assets/images/food-cart.png'
import Alps from '../../assets/images/icons8-alps-64.png'
import Campfire from '../../assets/images/icons8-campfire-64.png'
import Snowman from '../../assets/images/icons8-snowman-64.png'
import Park from '../../assets/images/theme-park.png'
import Ship from '../../assets/images/cargo-ship.png'
import Bowling from '../../assets/images/icons8-bowling-64.png'
import Liberty from '../../assets/images/icons8-statue-of-liberty-64.png'
import { useTranslation } from 'react-i18next'
import BaseDialog from '../dialogs/BaseDialog'
import House from '../../assets/images/icons8-house-64.png'
import Room from '../../assets/images/room.png'
import BaseCheckbox from '../../common/checkboxes/BaseCheckbox'
import RangeSlider from '../../common/sliders/RangeSlider'

type ItemsProp = {
  text: string
  image: string
}
type HouseTypeProps = {
  id: number
  name: string
  icon: string
}
type ConvenientProp = {
  id: number
  name: string
}

const SliderBar = () => {
  const { t } = useTranslation()
  const [openDialog, setOpenDialog] = useState<boolean>(false)
  const [value, setValue] = useState<number[]>([1, 100])

  const items: ItemsProp[] = [
    {
      text: 'Beach',
      image: Tsunami
    },
    {
      text: 'Hotel',
      image: Hotel
    },
    {
      text: 'Swimming',
      image: SwimmingPool
    },
    {
      text: 'Greenhouse',
      image: Greenhouse
    },
    {
      text: 'Coffee',
      image: Coffee
    },
    {
      text: 'Apartment',
      image: Apartment
    },
    {
      text: 'FoodCart',
      image: FoodCart
    },
    {
      text: 'Alps',
      image: Alps
    },
    {
      text: 'Campfire',
      image: Campfire
    },
    {
      text: 'Snowman',
      image: Snowman
    },
    {
      text: 'Park',
      image: Park
    },
    {
      text: 'Ship',
      image: Ship
    },
    {
      text: 'Bowling',
      image: Bowling
    },
    {
      text: 'Liberty',
      image: Liberty
    }
  ]

  const houseTypes: HouseTypeProps[] = [
    { id: 1, name: 'House', icon: House },
    { id: 2, name: 'Apartment', icon: Apartment },
    { id: 3, name: 'Room', icon: Room },
    { id: 4, name: 'Hotel', icon: Hotel }
  ]

  const convenient: ConvenientProp[] = [
    { id: 1, name: 'Wi-fi' },
    { id: 2, name: 'Washer' },
    { id: 3, name: 'Air conditioning' },
    { id: 4, name: 'Kitchen' },
    { id: 5, name: 'Dryer' },
    { id: 6, name: 'Heating' },
    { id: 7, name: 'TV' },
    { id: 8, name: 'Iron' },
    { id: 9, name: 'Dedicated workspace' },
    { id: 10, name: 'Hair dryer' }
  ]

  const handleChange = (newValue: number | number[]) => {
    setValue(newValue as number[])
  }

  const LoginTitle = () => {
    return <span className='text-[18px] font-semibold text-[#222222]'>{t('Filter')}</span>
  }
  function valuetext(value: number) {
    return `${value}°C`
  }
  const LoginContent = () => {
    return (
      <div className='min-w-[500px]'>
        <div className='my-8'>
          <span className='text-[24px] font-bold'>Loại nhà / phòng</span>
          <div className='flex justify-between items-center mt-5'>
            {houseTypes?.map((houseType) => (
              <div key={houseType.id} className='w-[200px] cursor-pointer'>
                <input type='checkbox' id={`${houseType.name}-option`} value='' className='hidden peer' required />
                <label
                  htmlFor={`${houseType.name}-option`}
                  className='block px-4 py-3 font-bold bg-white rounded-xl text-black outline-none focus:ring-4 shadow-lg transform border-2 border-gray-300 peer-checked:border-black active:scale-90 transition-transform'
                >
                  <img src={houseType.icon} width='34px' alt='house' />
                  <div className='mt-6'>{t(houseType.name)}</div>
                </label>
              </div>
            ))}
          </div>
        </div>
        <Divider />
        <div className='my-8 w-full'>
          <span className='text-[24px] font-bold'>Khoảng giá</span>
          <div className='flex justify-between items-center mt-5 mx-2'>
            <RangeSlider
              getAriaLabel={() => 'Temperature range'}
              value={value}
              min={1}
              max={1000}
              onChange={handleChange}
              valueLabelDisplay='auto'
              getAriaValueText={valuetext}
              // thumbColor="rgb(255, 255, 255)"
              // trackColor="rgb(255, 255, 255)"
              // railColor=
              // activeColor=
            />
          </div>
        </div>
        <div className='flex justify-between gap-6 items-center w-full'>
          <TextField
            label='Tối thiểu'
            id='outlined-start-adornment'
            sx={{ m: 1, width: '100%' }}
            color='secondary'
            type='number'
            inputProps={{ min: 1, max: 1000 }}
            value={value[0]}
            onChange={(e) => {
              const updateArray: any = [...value]
              updateArray[0] = e.target.value

              setValue(updateArray)
            }}
            InputProps={{
              startAdornment: <InputAdornment position='start'>$</InputAdornment>
            }}
          />
          <span>to</span>
          <TextField
            label='Tối đa'
            id='outlined-start-adornment'
            sx={{ m: 1, width: '100%' }}
            color='secondary'
            type='number'
            inputProps={{ min: 1, max: 1000 }}
            InputProps={{
              startAdornment: <InputAdornment position='start'>$</InputAdornment>
            }}
            value={value[1]}
            onChange={(e) => {
              const updateArray: any = [...value]
              updateArray[1] = e.target.value

              setValue(updateArray)
            }}
          />
        </div>

        <Divider />
        <div className='my-8 w-full'>
          <div className='mb-4'>
            <span className='text-[24px] font-bold'>Tiện nghi</span>
          </div>
          <Grid container spacing={1}>
            {convenient?.map((convenient) => (
              <Grid key={convenient?.id} item xs={6}>
                <FormControlLabel
                  control={
                    <BaseCheckbox
                      name='name'
                      color='#000000'
                      checkedColor='#000000'
                      size={30}
                      // checked={false}
                      // onChange={() => {}}
                    />
                  }
                  label={convenient?.name}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    )
  }
  const LoginActions = () => {
    return (
      <Grid container justifyContent='space-between' alignItems='center' className='px-5 py-2'>
        <Grid item>
          <Button variant='text'>
            <span className='normal-case text-[16px] underline text-black font-bold'>Clear all</span>
          </Button>
        </Grid>
        <Grid item>
          <Button variant='contained' color='secondary'>
            <span className='normal-case text-[16px] font-medium'>Show places </span>
          </Button>
        </Grid>
      </Grid>
    )
  }

  const handleOpenFilter = () => {
    setOpenDialog(true)
  }
  return (
    <div className='mt-[100px] flex px-20 items-center justify-start gap-5'>
      <NavBaseSlider
        items={items}
        classes='top-20 py-5 sm:px-10 w-[90%] bg-white'
        // border border-gray-900 border-2 rounded-xl
      />
      <div
        onClick={handleOpenFilter}
        className='flex justify-center items-center gap-3 border-gray-300 p-2 rounded-md cursor-pointer border-[1.5px]'
      >
        <span className='i3c9txn dir dir-ltr'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 16 16'
            style={{
              display: 'block',
              height: '14px',
              width: '14px',
              fill: 'currentcolor'
            }}
            aria-hidden='true'
            role='presentation'
            focusable='false'
          >
            <path d='M5 8a3 3 0 0 1 2.83 2H14v2H7.83A3 3 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.83 4H2V4h6.17A3 3 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z'></path>
          </svg>
        </span>
        <span className='t1o11edy dir dir-ltr min-w-[50px]'>{t('Filter')}</span>
      </div>
      <BaseDialog
        open={openDialog}
        setOpen={setOpenDialog}
        maxWidth='md'
        dialogAction={true}
        dialogTitle={true}
        fullWidth={true}
        title={LoginTitle()}
        content={LoginContent()}
        actions={LoginActions()}
      />
    </div>
  )
}

export default SliderBar
