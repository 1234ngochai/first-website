type Props = {
	onClick: () => void;
}

export default function AddButton({ onClick }: Props) {
	return (
		<button
      className="button"
      onClick={onClick}>
      Add
    </button>
	)
}
