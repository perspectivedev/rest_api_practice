import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Form from '../components/Form';
import axios from 'axios';

const Edit = (props) => {
    const { id } = useParams();
    const [store, setStore] = useState('');

    // const [ storeName, setStoreName ] = useState('');
    // const [ storeNumber, setStoreNumber ] = useState('');
    // const [ storeStatus, setStoreStatus ] = useState(true);


    useEffect(() => {
        axios.get(`http://localhost:8000/api/stores/${id}`)
        .then( res => {
            setStore(res.data)
            // setStoreName(res.date)
            // setStoreNumber(res.data)
            // setStoreStatus(res.data)
        })
        .catch((err) => { console.log(err)
            // const errors = err.response.data.errors;  
            // for(let key of Object.keys(errors)){
            //     console.log(key, '  ->  ', errors[key].message);
            // }
            // setStoreNameErr(errors['storeName'] ? errors['storeName'].message : '')
            // setStoreNumberErr(errors['storeNumber'] ? errors['storeNumber'].message : '')
        });
        console.log(id);
    }, [])

    return (
        <>
        <div>
        <div>
        <h1>Store Finder</h1>
        <Link to="/stores">go back home</Link>
        </div>
        <p>Edit this store!</p>
        </div>
        {store && <Form method="put" action={`/${id}`} store={store}/>}
        </>
    )
}

export default Edit;