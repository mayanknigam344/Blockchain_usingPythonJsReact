import React , {useState, useEffect} from 'react';
import {MILLISECONDS_PY} from '../config';
import Transaction from './Transaction';
import {Button} from 'react-bootstrap';

function ToggleTransactionDisplay({block}){

    const [displayTransaction, setDisplayTransaction] = useState(false);
    const {data} = block;

    const ToggleTransactionDisplay= () =>{
        setDisplayTransaction(!displayTransaction);
    }

    if(displayTransaction){

        return (
            <div>
            {
                data.map(transaction => (
                      <div key={transaction.id}> 
                          <hr />
                          <Transaction transaction={transaction}/>
                      </div>
                ))
            }
            <br/>
            <Button
                variant="danger"
                size="sm"
                onClick={ToggleTransactionDisplay} 
            >
                Show Less
            </Button>
          </div>
        )
    }

    return(
        <div>
            <br/>
            <button 
                variant="danger"
                size = "sm"
                onClick={ToggleTransactionDisplay}
            >
            Show More</button>
        </div>
    )

}


function Block({ block }){

    const {timestamp,hash,data} = block;
    const hashDisplay = `${hash.substring(0,15)}...`;
    const timestampSDisplay = new Date(timestamp/MILLISECONDS_PY).toLocaleString();

    return(
        <div className="Block"> 
            <div>Hash: {hashDisplay}</div>
            <div>Timestamp: {timestampSDisplay}</div>
            <ToggleTransactionDisplay  block={block}/>
        </div>


    )




}

export default Block;