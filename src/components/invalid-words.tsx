import Fuse from 'fuse.js'
import _ from 'lodash'

import validWords from '../basic.json'

type Props = {
  text: string
}
const fuse = new Fuse(validWords, {
  threshold: 0.4,
})

const InvalidWord = ({ word }: { word: string }) => {
  const suggestions = fuse.search(word).filter((v, k) => k < 3)
  return (
    <li className="py-2">
      <strong className="rounded bg-amber-400/60 p-1">{word}</strong>
      {suggestions.length > 0 && (
        <>
          <br />
          Did you mean:{' '}
          {suggestions.map(({ item }) => (
            <span key={item} className="mx-0.5 rounded bg-green-400/60 p-1">
              {item}
            </span>
          ))}
        </>
      )}
    </li>
  )
}

export const InvalidWords = ({ text }: Props) => {
  const invalid = _.uniq(
    text.split(/\W+/g).map((word) => word.toLowerCase()),
  ).filter(
    (word) =>
      word.length > 0 && /[A-z]/.test(word) && !validWords.includes(word),
  )

  return (
    <div>
      <h2 className="text-xl font-bold">Invalid Words</h2>
      <ul>
        {invalid.map((word) => (
          <InvalidWord key={word} word={word} />
        ))}
      </ul>
    </div>
  )
}
