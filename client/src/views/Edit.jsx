import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Form from '../components/Form';
import axios from 'axios';

const Edit = (props) => {
    const { id } = useParams();
    const [store, setStore] = useState({ storeName: '', storeNumber: '', storeStatus: '' });
    
    axios.get(`http://localhost:8000/api/stores/${id}`)
    .then( res => setStore(res.data.id))
    .catch( err => console.log(err));
    console.log(id);

    return (
        <>
        <div>
        <div>
        <h1>Store Finder</h1>
        <Link to="/stores">go back home</Link>
        </div>
        <p>Edit this store!</p>
        </div>
        <Form method="put" action={`/${id}`} store={store}/>
        </>
    )
}

export default Edit;