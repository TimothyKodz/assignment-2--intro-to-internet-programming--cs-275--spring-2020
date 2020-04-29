let riceType;
let riceAmountOz;
let waterAmountOz;
let oilAmountTbsp;
let waterToAddSoftRice;

const getRecipeCall = document.getElementById(`rice-type`);
getRecipeCall.addEventListener(`change`, (event) => {
    getRecipe();
});

function getRecipe() {
    riceType = document.getElementById(`rice-type`).value;
    let display = document.getElementById(`recipe`)

    if (riceType == `c-rice`) {
        display.innerHTML = (
            `<h2>Making Sprouted California Rice</h2>

            <label for="rice-val">Enter amount of rice you would like to cook (in Ounces)</label>
            <input type="number" id="rice-val" step="any">

            <div class="directions">
            <p>For slightly al dente rice:</p>
            <ol>
                <li>Combine <span id="c-rice-val">0</span> ounces of rice with <span id="c-water-val">0</span> ounces of water or broth and <span id="c-oil-val">0</span> Tbsp olive oil.</li>
                <li>Bring to a boil and stir once to mix.</li>
                <li>Reduce heat to low, cover with a tight-fitting lid and cook for 25 minutes.</li>
                <li>Remove from heat and let stand for 5 minutes. Fluff with a fork and serve.</li>
            </ol>
            </div>

            <div class="directions">
            <p>For softer rice:</p>
            <p class="extra-d">Increase liquid by <span id="c-extra-val">0</span> ounces and cook time by 5 minutes.</p>
            </div>`);
        let getCalcRatiosCall = document.getElementById(`rice-val`);
        getCalcRatiosCall.addEventListener(`input`, (event) => {
            calcRatios();
        });
    }
    else if (riceType == `w-rice`) {
        display.innerHTML = (
            `<h2>Making White Rice</h2>

            <label for="rice-val">Enter amount of rice you would like to cook (in Ounces)</label>
            <input type="number" id="rice-val" step="any">

            <div class="directions">
            <p>To make white rice:</p>
            <ol>
                <li>Combine <span id="w-rice-val">0</span> ounces of rice with <span id="w-water-val">0</span> ounces of water and <span id="w-oil-val">0</span> Tbsp olive oil.</li>
                <li>Bring to a boil, then reduce heat to the lowest setting.</li>
                <li>Cook for about 18 minutes.</li>
            </ol>
            </div>`);
        let getCalcRatiosCall = document.getElementById(`rice-val`);
        getCalcRatiosCall.addEventListener(`input`, (event) => {
            calcRatios();
        });
    }
}

function calcRatios() {
    riceAmountOz = document.getElementById(`rice-val`).value || 0;

    if (riceType == 'c-rice') {
        waterAmountOz = (1.6 * riceAmountOz).toFixed(2);
        oilAmountTbsp = (0.8 * (riceAmountOz / 8)).toFixed(2);
        waterToAddSoftRice = (0.4 * riceAmountOz).toFixed(2);

        document.getElementById(`c-rice-val`).innerHTML = riceAmountOz;
        document.getElementById(`c-water-val`).innerHTML = waterAmountOz;
        document.getElementById(`c-oil-val`).innerHTML = oilAmountTbsp;
        document.getElementById(`c-extra-val`).innerHTML = waterToAddSoftRice;
    }
    else if (riceType == 'w-rice') {
        waterAmountOz = (2 * riceAmountOz).toFixed(2);
        oilAmountTbsp = (1 * riceAmountOz).toFixed(2);

        document.getElementById(`w-rice-val`).innerHTML = riceAmountOz;
        document.getElementById(`w-water-val`).innerHTML = waterAmountOz;
        document.getElementById(`w-oil-val`).innerHTML = oilAmountTbsp;
    }
}
