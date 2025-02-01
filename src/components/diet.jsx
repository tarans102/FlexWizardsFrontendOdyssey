import "./diet.css";

function Diet() {
    return (
        <>
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
                    <p>I want to eat <input type="number" className="cal"/> calories</p>
                    <p>In 
                        <select name="meal" className="meal">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>    
                        </select> Meals
                    </p>
                    <button className="Generate">GENERATE</button>
                </div>

                {/* Updated Meal Section */}
                <div className="mealDetails">
                    <h1 className="mealTitle">TODAY'S MEAL</h1>
                    <div className="mealContainer">
                        <div className="mealCard">
                            <h2>BREAKFAST</h2>
                            <p className="calories">600 calories</p>
                            <ul>
                                <li>Oats with Milk</li>
                                <li>Peanut Butter Sandwich</li>
                            </ul>
                        </div>

                        <div className="mealCard">
                            <h2>LUNCH</h2>
                            <p className="calories">900 calories</p>
                            <ul>
                                <li>Paneer Makhani</li>
                                <li>Lassi</li>
                            </ul>
                        </div>

                        <div className="mealCard">
                            <h2>DINNER</h2>
                            <p className="calories">500 calories</p>
                            <ul>
                                <li>Caesar Salad</li>
                                <li>Dosa</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Diet;
