import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';



const SelectUtulky = () => {

    const dispatch = useDispatch();
    const showState = useSelector((state:any) => state)

    useEffect(() => {

        axios.get('https://frontend-assignment-api.goodrequest.com/api/v1/shelters')
            .then(response => { 
                const data:any = response.data.shelters
                
                  dispatch({
                    type: "ADD",
                    data: data
                });

            })
            .catch(error => {
                console.error('Error: ', error);
            });
    
    },[dispatch]);




    return (
        <div className="selectUtulok">
            <span>*Povinné</span>
            <label>O projekte</label>
            <label className="titileLabel">Útulok</label>
            <select className="optionsUtulky" defaultValue={'DEFAULT'}  onChange={(e) => e.currentTarget.classList.add("selectedColor")}>
                <option value="DEFAULT" disabled>Vyberte útulok zo zoznamu</option>
                {showState.utulky && showState.utulky.map((e:any) => (
                        <option key={e.id} value={e.name}>{e.name}</option>
                        ))}
            </select>
            
        </div>
    )
}

export default SelectUtulky
