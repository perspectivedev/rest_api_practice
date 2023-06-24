import React, { useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const ShowStore = () => {

    const { id } = useParams();
    const [store, setStore] = useState({ storeName: '', storeNumber: '', storeStatus: '' });

    axios.get('http://localhost:8000/api/stores/' + id)
        .then( res => setStore(res.data))
        .catch( err => console.log(err));
    
    return (
        <>
        <div>
        <h1>Store Finder</h1>
        <Link to="/stores">go back home</Link>
        </div>
        <div>
            <p>{store.storeName}</p>
            <p>{store.storeNumber}</p>
            <p>{store.storeStatus === true ? 'Open' : 'Closed'}</p>
        </div>
        <Link to={`/stores/edit/${id}`}>Edit Store Details</Link>
        </>
    )
}

export default ShowStore;