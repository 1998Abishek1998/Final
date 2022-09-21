const FormRow = ({type,name,value,handleChange,LabelText, noClass, classFile}) =>{
    return (
        <div className={`${noClass ? 'formRow':'form-row'}`}>
            <label htmlFor={name} className={`${noClass ? 'formLabel': "formlabel"}`}>{name}</label>
            <input type={type} value={value} name={name} onChange={handleChange} required={true}  className={`${noClass ?  classFile ? 'fileInput' :'formInput': "form-input"}`} />
        </div>
    )
}

export default FormRow