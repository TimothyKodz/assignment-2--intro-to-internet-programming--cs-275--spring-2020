let riceType;

function getRecipe() {
    riceType = document.getElementById(`rice-type`).value;
    let display = document.getElementById(`recipe`)

    if (riceType == `c-rice`) {
        display.innerHTML = (
            `<h2>Making Sprouted California Rice</h2>

            <p>For slightly al dente rice:</p>
            <ol>
                <li>Combine 1 1/4 cups of rice with 2 cups of water or broth and 1 Tbsp olive oil.</li>
                <li>Bring to a boil and stir once to mix.</li>
                <li>Reduce heat to low, cover with a tight-fitting lid and cook for 25 minutes.</li>
                <li>Remove from heat and let stand for 5 minutes. Fluff with a fork and serve.</li>
            </ol>

            <p>For softer rice:</p>
            <p>Increase liquid by 1/2 cup and cook time by 5 minutes.</p>`);
    }
    else if (riceType == `w-rice`) {
        display.innerHTML = (
            `<h2>Making White Rice</h2>

            <ol>
                <li>Combine 1 cup of rice with 2 cups of water and 1 Tbsp olive oil.</li>
                <li>Bring to a boil, then reduce heat to the lowest setting.</li>
                <li>Cook for about 18 minutes.</li>
            </ol>`);
    }
}

function calcRatios() {
    var riceValCup = document.getElementById(`rice-val`).value || 0;

    if (riceType == 'c-rice') {
        var waterValCup = (1.6 * riceValCup);
        var oilValTbsp = (0.8 * riceValCup);

    }
    else if (riceType == 'w-rice') {
        var waterValCup = (2 * riceValCup);
        var oilValTbsp = (1 * riceValCup);
    }
}
