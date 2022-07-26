import React from 'react';
import { Main } from './style';
import { BsFillSkipBackwardFill, BsFillSkipForwardFill } from "react-icons/bs";

const Paginator = (props) => {
  return (
        <Main>
            <div className="max-container">
                <button active={props.previousLink} onClick={props.previous}><BsFillSkipBackwardFill/> Anterior</button>
                <button active={props.nextLink} onClick={props.next}>Próximo  <BsFillSkipForwardFill/></button>
            </div>
        </Main>
    )
}

export default Paginator;