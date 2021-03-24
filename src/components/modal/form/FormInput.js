import React from 'react';



const FormInput = props => {
    const { htmlFor, label, value, changeHandler, id, name, errors } = props;


    return (
        <div className="form-outline mb-4">
            <label
                className="form-label"
                htmlFor={htmlFor}>{label}</label>
            <input
                value={value}
                name={name}
                onChange={event => changeHandler(event)}
                id={id}
                type="text"
                className="form-control border shadow-3" />
            {errors && <span className="position-absolute text-danger">{errors}</span>}
        </div>
    );
};


export default FormInput;