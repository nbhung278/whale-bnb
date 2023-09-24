import { Divider } from '@mui/material'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
type TextWithIconItemProps = {
  arrowRightSize?: number | string
  arrowRight?: boolean
  startIcon?: JSX.Element
  content?: string | JSX.Element
  onClick?: any
}
const TextWithIconItem = (props: TextWithIconItemProps) => {
  const { arrowRightSize = '24px', arrowRight, content, startIcon, onClick } = props
  return (
    <div>
      <div
        onClick={onClick}
        className='flex bg-[white] min-w-[100px] justify-between items-center p-5 rounded-md gap-[40px] hover:bg-[#f6f6f6] cursor-pointer'
      >
        <div className='flex items-center justify-between gap-4'>
          {startIcon}
          <div className='text-gray-600'>{content}</div>
        </div>
        {arrowRight && (
          <div>
            <MdOutlineKeyboardArrowRight size={arrowRightSize} />
          </div>
        )}
      </div>
      <Divider variant='middle' />
    </div>
  )
}

export default TextWithIconItem
