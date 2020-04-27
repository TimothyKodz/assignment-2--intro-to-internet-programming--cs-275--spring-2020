let riceType;
let riceValCup;
let waterValCup;
let oilValTbsp;

function getRecipe() {
    riceType = document.getElementById(`rice-type`).value;
    let display = document.getElementById(`recipe`)

    if (riceType == `c-rice`) {
        display.innerHTML = (
            `<h2>Making Sprouted California Rice</h2>

            <label for="rice-val">Enter amount of rice you would like to cook</label>
            <input type="number" id="rice-val" step="any" oninput="calcRatios()">

            <div class="directions">
            <p>For slightly al dente rice:</p>
            <ol>
                <li>Combine <span id="c-rice-val">0</span> cups of rice with <span id="c-water-val">0</span> cups of water or broth and <span id="c-oil-val">0</span> Tbsp olive oil.</li>
                <li>Bring to a boil and stir once to mix.</li>
                <li>Reduce heat to low, cover with a tight-fitting lid and cook for 25 minutes.</li>
                <li>Remove from heat and let stand for 5 minutes. Fluff with a fork and serve.</li>
            </ol>
            </div>

            <div class="directions">
            <p>For softer rice:</p>
            <p class="extra-d">Increase liquid by 1/2 cup and cook time by 5 minutes.</p>
            </div>`);
    }
    else if (riceType == `w-rice`) {
        display.innerHTML = (
            `<h2>Making White Rice</h2>

            <label for="rice-val">Enter amount of rice you would like to cook</label>
            <input type="number" id="rice-val" step="any" oninput="calcRatios()">

            <div class="directions">
            <ol>
                <li>Combine <span id="w-rice-val">0</span> cup of rice with <span id="w-water-val">0</span> cups of water and <span id="w-oil-val">0</span> Tbsp olive oil.</li>
                <li>Bring to a boil, then reduce heat to the lowest setting.</li>
                <li>Cook for about 18 minutes.</li>
            </ol>
            </div>`);
    }
}

function calcRatios() {
    riceValCup = document.getElementById(`rice-val`).value || 0;

    if (riceType == 'c-rice') {
        waterValCup = (1.6 * riceValCup).toFixed(2);
        oilValTbsp = (0.8 * riceValCup).toFixed(2);

        document.getElementById(`c-rice-val`).innerHTML = riceValCup;
        document.getElementById(`c-water-val`).innerHTML = waterValCup;
        document.getElementById(`c-oil-val`).innerHTML = oilValTbsp;
    }
    else if (riceType == 'w-rice') {
        waterValCup = (2 * riceValCup).toFixed(2);
        oilValTbsp = (1 * riceValCup).toFixed(2);

        document.getElementById(`w-rice-val`).innerHTML = riceValCup;
        document.getElementById(`w-water-val`).innerHTML = waterValCup;
        document.getElementById(`w-oil-val`).innerHTML = oilValTbsp;
    }
}
