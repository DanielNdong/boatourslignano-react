export default function FilterReservation({values}){
    const {name, optionValue} = values

    const upperCaseFirstLetter = (name) => {
      const nameInCapitalLetter = name.split('').slice(1, name.length).join('')
      console.log(name[0].toUpperCase()+nameInCapitalLetter);
    }
  return (
    <label htmlFor={name}>
      {upperCaseFirstLetter(name)}
      <select name={name} id={name}>
        <option value={optionValue}>{optionValue}</option>
        <option value={optionValue}>{optionValue}</option>
        <option value={optionValue}>{optionValue}</option>
        <option value={optionValue}>{optionValue}</option>
        <option value={optionValue}>{optionValue}</option>
      </select>
  </label>
  )
}