import React from 'react';
import Form from '../components/Form';
import { Link } from 'react-router-dom';

const AddStore = () => {

    return (
        <>
            <div>
                <div>
                    <h1>Store Finder</h1>
                    <Link to="/stores">go back home</Link>
                </div>
                <p>Add a new store!</p>
            </div>

            <Form method="post" action="/" />
        </>
    )
}

export default AddStore;