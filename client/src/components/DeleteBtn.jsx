import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const DeleteBtn = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [stores, setStores] = useState({
        storeName: '',
        storeNumber: '',
        storeStatus: ''
    });
console.log(stores, setStores, navigate('/stores'), );


    const deleteOneStore = () => {
        axios.delete(`http://localhost:8000/api/stores/${id}`)
            .then(res => {
                setStores(stores => stores.filter((item) => item._id !== id));
                navigate('/stores');
            })
            .catch(err => console.error(err))
    }

    return (
        <button className='' onClick={() => deleteOneStore(stores._id)} >Delete</button>
    )
}
console.log(DeleteBtn);
export default DeleteBtn;