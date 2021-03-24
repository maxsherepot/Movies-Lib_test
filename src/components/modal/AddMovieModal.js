import React, { useState } from 'react';
import Movie from "../../functions/Movie";
import FormInput from './form/FormInput';



const AddMovieModal = ({ onCloseDeleteModal, onAddMovie, setOpenModal }) => {
    const [form, setForm] = useState({ title: "", imageUrl: "", description: "" });
    const [errors, setErrors] = useState({});


    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };


    const onCreateMovie = () => {
        const movie = new Movie(form);
        onAddMovie(movie);
    };


    const validateForm = () => {
        const errors = {};
        const { title, imageUrl } = form;

        if (!title.trim()) {
            errors.title = "Required";
        } else if (title.trim().length < 2) {
            errors.title = "Title is too short";
        };

        if (!imageUrl) {
            errors.imageUrl = "Required";
        } else if (!/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(imageUrl)) {
            errors.imageUrl = "Invalid image url";
        };

        setErrors(errors);
        if (!Object.keys(errors).length) {
            onCreateMovie();
            setOpenModal(false);
        };
    };


    const submitHandler = event => {
        event.preventDefault();
        validateForm();
    };



    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h4>Add movie</h4>
                    <span className="close"
                        onClick={() => onCloseDeleteModal()}
                    >&times;</span>
                </div>

                <div className="modal-body">
                    <form
                        onSubmit={event => submitHandler(event)}>

                        <FormInput
                            htmlFor="movieTitle"
                            label="Enter a title"
                            value={form.title}
                            changeHandler={changeHandler}
                            id="movieTitle"
                            name="title"
                            errors={errors.title}
                        />

                        <FormInput
                            htmlFor="movieImage"
                            label="Enter image url"
                            value={form.imageUrl}
                            changeHandler={changeHandler}
                            id="movieImage"
                            name="imageUrl"
                            errors={errors.imageUrl}
                        />

                        <FormInput
                            htmlFor="movieDescription"
                            label="Enter a description (optional)"
                            value={form.description}
                            changeHandler={changeHandler}
                            id="movieDescription"
                            name="description"
                        />

                        <div className="modal-footer">
                            <button
                                type="button"
                                onClick={() => onCloseDeleteModal()}
                                className="btn btn-secondary">Cancel</button>

                            <button
                                type="submit"
                                className="btn btn-primary">Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};


export default AddMovieModal;
