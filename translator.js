function translate(parseResult) {
    const theGoal = parseResult[0].goal
    return "digraph G {\n" +
        `   end [peripheries=2, shape=oval, label=\"${theGoal}\", style=filled, fillcolor=lightblue];\n` +
        "}";
}

module.exports = {
    translate
}
