import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Form = (props) => {
    const navigate = useNavigate();
    const [ storeName, setStoreName ] = useState(props.store ? props.store.storeName : '');
    const [ storeNumber, setStoreNumber ] = useState(props.store ? props.store.storeNumber : '');
    const [ storeStatus, setStoreStatus ] = useState(props.store ? props.store.storeStatus : false);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        // Handle the form submission.
      
        axios[props.method]('http://localhost:8000/api/stores' + props.action, {
            storeName,
            storeNumber,
            storeStatus
        })
        .then(res => navigate('/stores/' + res.data._id))
        .catch(err => console.log('Error:', err));
    }

    return (
        <>
            <form onSubmit={ onSubmitHandler }>
                <div>
                    <label htmlFor="storeName">Store Name</label>
                    <input type="text" id="storeName" onChange={e => setStoreName(e.target.value)} value={storeName} />
                </div>
                <div>
                    <label htmlFor="storeNumber">Store Number</label>
                    <input type="number" id="storeNumber" onChange={e => setStoreNumber(e.target.value)} value={storeNumber} />
                </div>
                <div>
                    <label htmlFor="storeStatus">Open?</label>
                    <input type="checkbox" id="storeStatus" onChange={e => setStoreStatus(e.target.checked)} checked={storeStatus} />
                </div>
                <button type="submit" >Add a new Store</button>
            </form>
        </>
    )

}

export default Form;