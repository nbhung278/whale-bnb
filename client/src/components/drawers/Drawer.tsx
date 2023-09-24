import React from 'react'
import Drawer from '@mui/material/Drawer'

interface DrawerProps {
  anchor?: 'right' | 'left' | 'top' | 'bottom'
  open: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setOpen?: any
}

const DrawerBase: React.FC<DrawerProps> = ({ anchor = 'right', open, content, setOpen }) => {
  return (
    <Drawer anchor={anchor} open={open} onClose={() => setOpen(false)}>
      {content}
    </Drawer>
  )
}

export default DrawerBase
