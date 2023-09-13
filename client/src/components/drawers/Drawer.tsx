import React, { Children, useState } from 'react'
import Drawer from '@mui/material/Drawer'

interface DrawerProps {
  anchor?: 'right' | 'left' | 'top' | 'bottom'
  open: boolean
  children: any
  content: any
  setOpen?: any
}

const DrawerBase: React.FC<DrawerProps> = ({ anchor = 'right', open, content, setOpen }) => {
  return (
    <Drawer anchor={anchor} open={open} setOpen={setOpen} onClose={() => setOpen(false)}>
      {content}
    </Drawer>
  )
}

export default DrawerBase
