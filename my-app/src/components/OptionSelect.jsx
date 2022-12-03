export default function OptionSelect({ values, children }) {
  const { value, src, width, alt } = values;

  /* <img src={src} width={width} alt={alt} /> */
  return (
    <>
      <option value={value}>{children}</option>
    </>
  );
}
