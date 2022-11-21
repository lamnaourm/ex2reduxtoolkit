import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { augumenter, diminuer, initialiser } from '../redux/SoldeSlice';

const OperationsSolde = () => {

    const dispatch = useDispatch();
    const [solde, setSolde] =useState(0);

    return (
        <div>
            <input type="number" placeholder='donner votre solde' value={solde} onChange={(e) => setSolde(e.target.value)}  /> <br/>
            <button onClick={() => dispatch(augumenter(solde))}>Incrementer</button>
            <button onClick={() => dispatch(diminuer(solde))}>Decrementer</button>
            <button onClick={() => dispatch(initialiser(solde))}>Initialiser</button>
        </div>
    );
}

export default OperationsSolde;
