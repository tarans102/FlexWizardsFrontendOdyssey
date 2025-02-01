import "./diet.css"

function Diet() {
    return<> 
     <div className="title"><h1>CREATE YOUR MEAL PLAN HERE</h1></div>
     <div className="wrap">
        <h3 className="innertitle">SELECT YOUR PREFERRRED DIET</h3>
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
    
    </select> Meals</p>
    <button className="Generate">GENERATE</button>
     </div>
    </>;
}

export default Diet;

