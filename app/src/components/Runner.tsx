
    import React from "react";
    import { RunnerData } from "../utils/type";
  
    const Runner = ( { id_runner, name, odds, silk }: RunnerData ) => {

    let imageSrc = silk ? `/assets/silks/${silk}` : null;
    
    return <div style={{
        padding: '0.5rem 0.25rem',
        textAlign: 'left',
        verticalAlign: 'middle',
        position: 'relative'
        }}>
               <span>
                {imageSrc && <img src={imageSrc} width={20} height={20} style={{ marginRight: '0.5rem'}}/>} 
                <span style={{ position: 'absolute', bottom: '0.8rem'}}>{name}</span>
           </span>
                <span style={{
                    display: 'inline-block',
                    backgroundColor: '#f2c71c',
                    borderRadius: '0.188rem',
                    textAlign: 'center',
                    color: '#444',
                    position:'absolute',
                    right: '0.5rem',
                    minWidth: '2.25rem',
                    padding: '0.125rem 0.25rem',
                    fontWeight: 400,
                }}>
                    {odds}
                </span> 
           </div>;
    }
    export default Runner;

