import React from 'react'
import { useSelector } from 'react-redux';


const SelectDonate = (getAll:any) => {
  const showState = useSelector((state:any) => state)

      
  const checkClickedAmount = (e:any) => { 
    const customValueParent = document.querySelector<HTMLElement>('.customAmount')!;


     if(e.target.classList.contains('inputAmount')) {
       customValueParent.classList.add("selected");
       getAll.handleChange(e)
       Array.from( document.querySelectorAll('input[name=amount]:checked'), (input:any) => input.checked = false );
     } else {
      customValueParent.classList.remove("selected");
        
     }
 };

    return (
        <div className="donate">
        {getAll.err.amount && <span className="spanError zoomIn">{getAll.err.amount}</span>}
        <span className="info">Suma, ktorou chcem prispieť</span>
          <div className="donateGroup">
            <label className="radioControl">
              <input  name="amount" type="radio" value="5" onClick={checkClickedAmount} onChange={getAll.handleChange} defaultChecked={showState.data.amount === "5" ? true : false} />
              <div className="radioText">
                5 €
              </div>
            </label>

            <label className="radioControl">
              <input name="amount" type="radio" value="10" onClick={checkClickedAmount} onChange={getAll.handleChange} defaultChecked={showState.data.amount === "10" ? true : false} />
              <div className="radioText">
                10 €
              </div>
            </label>

            <label className="radioControl">
              <input name="amount" type="radio" value="20" onClick={checkClickedAmount} onChange={getAll.handleChange} defaultChecked={showState.data.amount === "20" ? true : false}/>
              <div className="radioText">
                20 €
              </div>
            </label>

            <label className="radioControl">
              <input name="amount" type="radio" value="30" onClick={checkClickedAmount} onChange={getAll.handleChange} defaultChecked={showState.data.amount === "30" ? true : false}/>
              <div className="radioText">
                30 €
              </div>
            </label>

            <label className="radioControl">
              <input name="amount" type="radio" value="50" onClick={checkClickedAmount} onChange={getAll.handleChange} defaultChecked={showState.data.amount === "50" ? true : false}/>
              <div className="radioText">
                50 €
              </div>
            </label>

            <label className="radioControl">
              <input name="amount" type="radio" value="100" onClick={checkClickedAmount} onChange={getAll.handleChange} defaultChecked={showState.data.amount === "100" ? true : false} />
              <div className="radioText">
                100 €
              </div>
            </label>

            <div className={(showState.data.customAmount !== "" && showState.data) ? "customAmount selected" : "customAmount"}>
              <input className="inputAmount" pattern="[0-9]+" type="number"  name="customAmount" placeholder="" onClick={checkClickedAmount}  value={getAll.values.customAmount} onChange={getAll.handleChange}/>
               <span>€</span>
            </div>
          </div>

    </div>
    )
}

export default SelectDonate
