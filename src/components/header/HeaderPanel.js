import React from 'react';



const HeaderPanel = ({ onOpenDeleteModal }) => {

    return (
        <header
            className="mt-4 mt-md-5 d-flex justify-content-between align-items-center">
            <h1>Movies Lib</h1>

            <button
                className="btn btn-lg btn-primary"
                onClick={() => onOpenDeleteModal()}
            >Add new</button>
        </header>
    );
};


export default HeaderPanel;
