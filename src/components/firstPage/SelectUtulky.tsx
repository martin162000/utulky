import axios from 'axios';
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';


const SelectUtulky = (getAll:any)  => {

    const {t} = useTranslation();
    const dispatch = useDispatch();
    const showState = useSelector((state:any) => state)

    useEffect(() => {

        axios.get('https://frontend-assignment-api.goodrequest.com/api/v1/shelters')
            .then(response => { 
                const data:any = response.data.shelters
                
                  dispatch({
                    type: "ADD_UTULKY",
                    data: data
                });

            })
            .catch(error => {
                console.error('Error: ', error);
            });
    
    },[dispatch]);



    return (
        <div className="selectUtulok">
            {getAll.err.utulok && <span className="spanError zoomIn">{getAll.err.utulok}</span>}
            <label>{t('shelterOptionProject')}</label>
            <label className="titileLabel">{t('shelterOptionTitle')}</label>
            <select name="utulok" className={(getAll.err.utulok) ? "optionsUtulky errorOutline" : "optionsUtulky "} value={getAll.values.utulok} onChange={getAll.handleChange} >
                <option value="" disabled>{t('shelterChooseList')}</option>
                {showState.utulky && showState.utulky.map((e:any) => (
                        <option key={e.id} value={e.name}>{e.name} </option>
                        ))}
            </select>
            
        </div>
    )
}

export default SelectUtulky
