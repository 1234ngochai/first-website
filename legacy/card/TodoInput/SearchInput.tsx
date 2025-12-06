type Props = {
	value: string;
	onChange: (text: string) => void;
}

export default function SearchInput({ value, onChange }: Props) {
	return (
		<input
        className="input"
        placeholder="Add your new todo"
        value={value}
        onChange={(e)=> onChange(e.target.value)}
    />
	)
}
