let chain1 = "test4";
let chain2 = "test4";
let i = 0;
while (chain1[i] && chain2[i]) {
    if (chain1[i] === chain2[i]) {
        i++;
    } else {
        console.log("differentes")
        return;
    }
}
if (chain1[i] == chain2[i]) {
    console.log("egales")
    return;
}
console.log("differentes");
