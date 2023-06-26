import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import style from '../components/Form.module.css';

const Form = (props) => {
    const navigate = useNavigate();
    const [ storeName, setStoreName ] = useState(props.store ? props.store.storeName : '');
    const [ storeNumber, setStoreNumber ] = useState(props.store ? props.store.storeNumber : '');
    const [ storeStatus, setStoreStatus ] = useState(props.store ? props.store.storeStatus : false);
    const [ storeNameErr, setStoreNameErr] = useState('');
    const [ storeNumberErr, setStoreNumberErr] = useState('');
    const [ errors, setErrors ] = useState([]);

    // const isDataValidate = (data) => {
    //     return false;
    // }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        // Handle the form submission.
    
        axios[props.method]('http://localhost:8000/api/stores' + props.action, {
            storeName,
            storeNumber,
            storeStatus
        })
        .then(res => navigate( '/stores/' + res.data._id ))
        .catch((err) => {
            const errors = err.response.data.errors;  
            for(let key of Object.keys(errors)){
                console.log(key, '  ->  ', errors[key].message);
            }
            setStoreNameErr(errors['storeName'] ? errors['storeName'].message : '')
            setStoreNumberErr(errors['storeNumber'] ? errors['storeNumber'].message : '')
        });
    }

    return (
        <>
            <form onSubmit={ onSubmitHandler }>
                <div>
                    <label htmlFor="storeName">Store Name</label>
                    <input type="text" id="storeName" onChange={e => setStoreName(e.target.value)} value={storeName} />
                    { storeNameErr.length > 0 ? 
                    <p className={style.errMsg}> {storeNameErr}</p> :
                    <></> }
                </div>
                <div>
                    <label htmlFor="storeNumber">Store Number</label>
                    <input type="number" id="storeNumber" onChange={e => setStoreNumber(e.target.value)} value={storeNumber} />
                    { storeNumberErr.length > 0 ? 
                    <p className={style.errMsg}> {storeNumberErr}</p> :
                    <></> }
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