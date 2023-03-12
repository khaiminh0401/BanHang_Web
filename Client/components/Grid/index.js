import React from 'react';
import style from './index.module.scss';
const Grid =({children})=>{
    return ( 
        <div className={style.container}>
            {children}
        </div>
     );
}

export default Grid;