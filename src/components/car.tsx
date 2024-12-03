type CarProps = { name: string; model: string; year: string };

export default function Car({ name, model, year }: CarProps) {
  return (
    <li>
      <ul>
        <li>Make: {name}</li>
        <li>Model: {model}</li>
        <li>Year: {year}</li>
      </ul>
    </li>
  );
}
