const FormInput = ({ type, name, value, handleChange, placeholder }) => {
  return (
    
      <div className="finput">
        <label htmlFor={name} className="linput">
          {name}
        </label>
        <input
          type={type}
          value={value}
          name={name}
          onChange={handleChange}
          placeholder={placeholder}
          className="input-container"
        />
      </div>
    
  );
};

export default FormInput;
