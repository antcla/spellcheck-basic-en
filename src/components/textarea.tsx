type Props = {
  value: string
  onChange: (value: string) => void
}

export const Textarea = ({ value, onChange }: Props) => {
  return (
    <textarea
      className="h-96 w-full rounded border-2 border-gray-300 p-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Enter some text..."
    />
  )
}
