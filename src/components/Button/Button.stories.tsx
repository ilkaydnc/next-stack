import React from 'react'
import Button from '.'

export default {
  title: 'Button',
  component: Button,
}

export const Primary = () => {
  return (
    <div className="story-row">
      <Button>Primary Button</Button>
    </div>
  )
}
