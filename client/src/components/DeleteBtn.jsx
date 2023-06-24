import React from 'react';
import axios from 'axios';
import style from '../components/DeleteBtn.module.css';


const DeleteBtn = (props) => {
    const { id, onSuccess } = props;


    const deleteOneStore = () => {
        axios.delete(`http://localhost:8000/api/stores/${id}`)
            .then(res => {
                onSuccess()
            })
            .catch(err => console.error(err));
    }


    return (
        <button className={style.delBtn} onClick={deleteOneStore} >Delete</button>
    )
}

export default DeleteBtn;