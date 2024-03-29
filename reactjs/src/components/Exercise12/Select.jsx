const Select = ({options, value, setValue, ...props}) => {
  return (
    <>
      <select value={value} onChange={({target}) => setValue(target.value)} {...props}>
        <option value="" disabled>Select</option>

        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    </>
  )
}

export default Select
