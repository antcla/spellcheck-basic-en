'use client'

import { useState } from 'react'

import { Textarea } from './textarea'

import { InvalidWords } from '@/components/invalid-words'

export const Client = () => {
  const [text, setState] =
    useState(`Basic English (a backronym for British American Scientific International and Commercial English)[1] is a controlled language based on standard English, but with a greatly simplified vocabulary and grammar. It was created by the linguist and philosopher Charles Kay Ogden as an international auxiliary language, and as an aid for teaching English as a second language. It was presented in Ogden's 1930 book Basic English: A General Introduction with Rules and Grammar.

The first work on Basic English was written by two Englishmen, Ivor Richards of Harvard University and Charles Kay Ogden of the University of Cambridge in England. The design of Basic English drew heavily on the semiotic theory put forward by Ogden and Richards in their 1923 book The Meaning of Meaning.[2]

Ogden's Basic, and the concept of a simplified English, gained its greatest publicity just after the Allied victory in World War II as a means for world peace. He was convinced that the world needed to gradually eradicate minority languages and use as much as possible only one: English, in either a simple or complete form.[3]

Although Basic English was not built into a program, similar simplifications have been devised for various international uses. Richards promoted its use in schools in China.[4] It has influenced the creation of Voice of America's Learning English for news broadcasting, and Simplified Technical English, another English-based controlled language designed to write technical manuals.`)
  return (
    <div>
      <Textarea value={text} onChange={setState} />
      <InvalidWords text={text} />
    </div>
  )
}
