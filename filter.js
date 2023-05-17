import { names, years, teachers, teacher, nbaStars } from "./app.js";
import { christmasTrees } from "./trees-array.js";

function countTrees() {
    let redTrees = christmasTrees.filter((tree) => tree.colorCode === "blue");
    const sortedByPrice = sortTreesByPrice(christmasTrees);
    console.log(sortedByPrice);

    createTableHeader();
    DisplayTypeOfTree(sortedByPrice);
}

function createTableHeader() {
    const tableHeader = /*html*/ `
        <table>
<tr>
    <th>Color</th>
    <th>Price</th>
    <th>Payment</th>
    <th>Date</th>
    <th>time</th>
</tr>
    `;
    document
        .querySelector("#display-tree-table")
        .insertAdjacentHTML("beforeend", tableHeader);
}

function DisplayTypeOfTree(trees) {
    console.log(trees);
    for (const tree of trees) {
        showTree(tree);
    }
}

function showTree(tree) {
    const html = /*html*/ `

<tr id="tree-table">
    <td>${tree.colorCode}</td>
    <td>${tree.price}</td>
    <td>${tree.payment}</td>
    <td>${tree.date}</td>
    <td>${tree.time}</td>
    
</tr>
    </table>
    `;

    document.querySelector("table").insertAdjacentHTML("beforeend", html);
}

function sortTreesByPrice(christmasTrees) {
    return christmasTrees.sort((tree1, tree2) => tree2.price - tree1.price);
}

export { countTrees };
