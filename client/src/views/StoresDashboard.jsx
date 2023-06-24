import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteBtn from '../components/DeleteBtn';


const StoreDashboard = (props) => {
    const [ storeList, setStoreList ] = useState([]);
    
    useEffect( () => {
        axios.get('http://localhost:8000/api/stores') 
            .then( res => {
                setStoreList(res.data);
            })
            .catch( err => console.log(err));
    }, [] );


    return (
        <>
            <div>
                <h1>Store Finder</h1>
                <p>Find stores in your area!</p>
            </div>
            <hr />
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Store Name</th>
                            <th>Store Number</th>
                            <th>Store Status</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                    { storeList.map( store =>
                        <tr key={ store._id }>
                            <td> <Link to={`/stores/${store._id}`}>{ store.storeName }</Link> </td>
                            <td> { store.storeNumber } </td>
                            <td> { store.storeStatus === true ? 'Open' : 'Closed' } </td>
                            <td> <DeleteBtn store={store._id}/> </td>
                        </tr>
                        ) }
                    </tbody>
                </table>
            </div>
            <Link to="/stores/add">Can't find your store?</Link>
        </>
    )
}

export default StoreDashboard;