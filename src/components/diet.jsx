import "./diet.css"

function Diet() {
    return<> 
     <div className="overall">
     <div className="title"><h1>CREATE YOUR MEAL PLAN HERE</h1></div>
     <div className="wrap">
        
        <h3 className="innertitle">SELECT YOUR PREFERRRED DIET</h3>
        <p>At Least: 90g Protein 40g Fat 100g Carbs</p>
        <div className="dietList">
            <div className="diet1 nameOfDiet">VEG</div>
            <div className="diet2 nameOfDiet">NON-VEG</div>
            <div className="diet3 nameOfDiet">VEGAN</div>
            <div className="diet4 nameOfDiet">ANYTHING</div>
        </div>
        <p>I want to eat <input type="number" className="cal"/>calories</p>
        <p>In 
    <select name="meal" className="meal">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>    
    </select> Meals</p>
    <button className="Generate">GENERATE</button>
     </div>
     <div className="mealDetails">
        <h1>TODAYS MEAL</h1>
        <div className="breakfast">
            <h2>BREAKFAST:</h2>
            <ul>
            <div className="caloriesInMeal">600 calories:</div>
            <div className="item1 item"><li>OATS WITH MILK</li></div>
            <div className="item2 item"><li>PEANUT BUTTER SANDWICH</li></div>
            </ul>        
        </div>
        <div className="lunch">
            <h2>LUNCH:</h2>
            <ul>
            <div className="caloriesInMeal">900 calories:</div>
            <div className="item1 item"><li>PANEER MAKHANI </li></div>
            <div className="item2 item"><li>LASSI</li></div>
            </ul>        
        </div>
        <div className="dinner">
            <h2>DINNER:</h2>
            <ul>
            <div className="caloriesInMeal">500 calories:</div>
            <div className="item1 item"><li>CEASAR SALAD</li></div>
            <div className="item2 item"><li>DOSA</li></div>
            </ul>        
        </div>
     </div>
     </div>
    </>;
}

export default Diet;

