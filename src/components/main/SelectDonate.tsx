import React from 'react'



const SelectDonate = () => {

      
  const checkClickedAmount = (e:any) => { 
    //const customValue = document.querySelector<HTMLElement>('input[name=customAmount]')!;
    const customValueParent = document.querySelector<HTMLElement>('.customAmount')!;


     // e.target.classList.remove('inputAmount');
     if(e.target.classList.contains('inputAmount')) {
       customValueParent.classList.add("selected");
     //  customValue.setAttribute("checked", "true");
       Array.from( document.querySelectorAll('input[name=amount]:checked'), (input:any) => input.checked = false );
     } else {
      customValueParent.classList.remove("selected");
      //customValue.setAttribute("value", "66666");
     }



 };

    return (
        <div className="donate">
        <span className="info">Suma, ktorou chcem prispieť</span>
          <div className="donateGroup">
            <label className="radioControl">
              <input  name="amount" type="radio" value="5" onClick={checkClickedAmount} />
              <div className="radioText">
                5 €
              </div>
            </label>

            <label className="radioControl">
              <input name="amount" type="radio" value="10" onClick={checkClickedAmount}   />
              <div className="radioText">
                10 €
              </div>
            </label>

            <label className="radioControl">
              <input name="amount" type="radio" value="20" onClick={checkClickedAmount} />
              <div className="radioText">
                20 €
              </div>
            </label>

            <label className="radioControl">
              <input name="amount" type="radio" value="30" onClick={checkClickedAmount} />
              <div className="radioText">
                30 €
              </div>
            </label>

            <label className="radioControl">
              <input name="amount" type="radio" value="50" onClick={checkClickedAmount} />
              <div className="radioText">
                50 €
              </div>
            </label>

            <label className="radioControl">
              <input name="amount" type="radio" value="100" onClick={checkClickedAmount}  />
              <div className="radioText">
                100 €
              </div>
            </label>

            <div className="customAmount">
              <input className="inputAmount" name="customAmount" placeholder="" onClick={checkClickedAmount} />
               <span>€</span>
            </div>
          </div>

    </div>
    )
}

export default SelectDonate
