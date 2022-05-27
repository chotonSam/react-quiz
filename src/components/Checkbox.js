export default function Checkbox({type, children}) {
  return (
    <label>
      <input type={type} /> <span>{children}</span>
    </label>
  );
}
