const FormRow = ({type,name,value,handleChange,LabelText}) =>{
    return (
        <div className="form-row">
            <label htmlFor={name} className="formlabel">{name}</label>
            <input type={type} value={value} name={name} onChange={handleChange}  className="form-input" />
        </div>
    )
}

export default FormRow