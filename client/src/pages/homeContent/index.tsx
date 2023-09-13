import { Grid } from '@mui/material'
import BaseItem from '../../common/items/BaseItem'

type Images = {
  id: number
  url: string
}
type DataProps = {
  id: number
  address: string
  distance: number
  startDate: string
  endDate: string
  price: number
  stars: number
  images: Images[]
}

const HomeContent = () => {
  const data: DataProps[] = [
    {
      id: 1,
      address: 'Hai ba chung street, Hanoi, VietNam',
      distance: 3443,
      startDate: '06/12/2023',
      endDate: '11/12/2023',
      price: 1200,
      stars: 5,
      images: [
        {
          id: 1,
          url: 'https://tubepthongminhgiare.com/wp-content/uploads/2019/11/thi-cong-noi-that-dep-bien-hoa-dong-nai-5.jpg'
        },
        {
          id: 2,
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1FaD3FuKPKdZSC8Okl2ETYUUmGm-LRna3kw&usqp=CAU'
        },
        {
          id: 3,
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZQdj3pVjYws_uSnhw6rb6C-JW6w0eoY3ir36Ogy_OYHTovGR0XfS6UtcLGdfkPJLXhng&usqp=CAU'
        }
      ]
    },
    {
      id: 2,
      address: 'Nha trang, Viet Nam',
      distance: 3443,
      startDate: '01/12/2023',
      endDate: '02/12/2023',
      price: 190,
      stars: 4.5,
      images: [
        {
          id: 5,
          url: 'https://ik.imagekit.io/tvlk/blog/2022/06/dia-diem-du-lich-nha-trang-1.jpg?tr=dpr-2,w-675'
        },
        {
          id: 6,
          url: 'https://dulichlive.com/nha-trang/wp-content/uploads/sites/3/2019/12/ve-may-bay-thanh-hoa-nha-trang1.jpg'
        },
        {
          id: 7,
          url: 'https://bazantravel.com/cdn/medias/uploads/56/56417-nha-tho-da-nha-trang-1.jpg'
        },
        {
          id: 8,
          url: 'https://ceotravel.com.vn/wp-content/uploads/2020/04/tour-nha-trang.jpg'
        }
      ]
    }
  ]
  return (
    <div className='px-20'>
      <Grid container direction='row' justifyContent='center' alignItems='center' spacing={1}>
        {data?.map((el: any) => {
          return (
            <Grid key={el.id} item sm={6} xs={12} md={4} sx={{ marginTop: '30px' }}>
              <BaseItem data={el} />
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}

export default HomeContent
