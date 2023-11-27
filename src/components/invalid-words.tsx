import Fuse from 'fuse.js'
import _ from 'lodash'

import validWords from '../basic.json'

const fuse = new Fuse(validWords, {
  threshold: 0.4,
})

const InvalidWord = ({
  word,
  onClick,
}: {
  word: string
  onClick: (newWord: string) => void
}) => {
  const suggestions = fuse.search(word).filter((v, k) => k < 3)
  return (
    <li className="py-2">
      <strong className="rounded bg-amber-400/60 p-1">{word}</strong>
      {suggestions.length > 0 && (
        <>
          <br />
          Did you mean:{' '}
          {suggestions.map(({ item }) => (
            <button
              key={item}
              className="mx-0.5 rounded bg-green-400/60 p-1"
              onClick={() => onClick(item)}
            >
              {item}
            </button>
          ))}
        </>
      )}
    </li>
  )
}

type Props = {
  text: string
  onChange: (callback: (text: string) => string) => void
}

export const InvalidWords = ({ text, onChange }: Props) => {
  const invalid = _.uniq(
    text.split(/\W+/g).map((word) => word.toLowerCase()),
  ).filter(
    (word) =>
      word.length > 0 && /[A-z]/.test(word) && !validWords.includes(word),
  )

  if (invalid.length === 0) {
    return <strong>✅ All good</strong>
  }

  return (
    <>
      <h2 className="text-xl font-bold">Invalid Words</h2>
      <ul>
        {invalid.map((word) => (
          <InvalidWord
            key={word}
            word={word}
            onClick={(replacement: string) =>
              onChange((text) => {
                const regex = new RegExp(word, 'gi')
                return text.replace(regex, replacement)
              })
            }
          />
        ))}
      </ul>
    </>
  )
}
