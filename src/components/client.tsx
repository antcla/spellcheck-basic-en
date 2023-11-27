'use client'

import { useState } from 'react'

import { Textarea } from './textarea'

import { InvalidWords } from '@/components/invalid-words'

type Props = {
  validWords: string[]
}

export const Client = ({ validWords }: Props) => {
  const [text, setState] = useState('')
  return (
    <div>
      <Textarea value={text} onChange={setState} />
      <InvalidWords validWords={validWords} text={text} />
    </div>
  )
}
