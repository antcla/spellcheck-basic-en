'use client'

import { useState } from 'react'

import { Textarea } from './textarea'

export const Client = () => {
  const [state, setState] = useState('')
  return (
    <div>
      <Textarea value={state} onChange={setState} />
    </div>
  )
}
