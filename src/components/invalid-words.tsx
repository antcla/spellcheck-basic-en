import _ from 'lodash'

type Props = {
  validWords: string[]
  text: string
}

export const InvalidWords = ({ text, validWords }: Props) => {
  const textWords = _.uniq(
    text.split(/\W+/g).map((word) => word.toLowerCase()),
  ).filter((word) => !validWords.includes(word))

  return (
    <div>
      <h2>Invalid Words</h2>
      <ul>
        {textWords.map((word) => (
          <li key={word}>{word}</li>
        ))}
      </ul>
    </div>
  )
}
