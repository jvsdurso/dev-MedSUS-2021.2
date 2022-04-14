import React from 'react'
import './reference.scss'
import References from '../../../utils/references'


const Ferramentas = props => {
    return (
        <div className="references-conteiner">
            <h1>Ferramentas</h1>
            <ul>
                {
                    References[props.reference].map((ref, idx) => (
                        <li key={idx} >
                            {ref}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Ferramentas;