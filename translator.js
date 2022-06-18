function translate(parseResult) {
    const theGoal = parseResult[0].goal
    if (theGoal === undefined ) {
        return ""+
`digraph G {
   end [shape=tripleoctagon, label="Need a Goal node!", style=filled, fillcolor=red];
}
`
    }

    return ""+
`digraph G {
   end [peripheries=2, shape=oval, label=\"${theGoal}\", style=filled, fillcolor=lightblue];
}`;
}

module.exports = {
    translate
}
