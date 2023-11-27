type Props = {
  value: string
  onChange: (value: string) => void
}

export const Textarea = ({ value, onChange }: Props) => {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Enter some text..."
    />
  )
}
