export default function ReactHeading({ level = 2, children }) {
	const Heading = `h${level}`;
	return (
		<Heading>
			<span style={{ color: `blue` }}>{Heading.toString() + `: `}</span>
			{children}
		</Heading>
	);
}
