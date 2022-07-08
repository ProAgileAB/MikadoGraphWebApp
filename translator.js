function translate(parseResult) {
    const theGoal = parseResult[0].goal
    if (theGoal === undefined) {
        return "" +
            `digraph G {
   end [shape=tripleoctagon, label="Need a Goal node!", style=filled, fillcolor=red];
}
`
    }

    let notGoal = ''
    for (let i = 1; i < parseResult.length; i++) {
        const elem = translateElement(parseResult[i]).join('\n')
        notGoal = `${notGoal}${elem}`
    }
    return "" +
        `digraph G {
   end [peripheries=2, shape=oval, label=\"${theGoal}\", style=filled, fillcolor=lightblue];
${notGoal}
}`;
}

function translateElement(element) {
    if (element.done) {
        return [`${element.done} [fillcolor=green]`]
    }
    const node = `${(element.needs)} [label="${(element.text)}"]`
    let from = element.steps[0] === "Goal" ? `end` : element.steps[0];
    const arrow = `${(element.needs)} -> ${from} [dir=back]`
    return [node, arrow]
}

module.exports = {
    translate,
    translateElement
}
