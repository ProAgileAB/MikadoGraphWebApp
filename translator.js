function translate(parseResult) {
    const theGoal = parseResult[0].goal
    if (theGoal === undefined ) {
        return ""+
`digraph G {
   end [shape=tripleoctagon, label="Need a Goal node!", style=filled, fillcolor=red];
}
`
    }

    let notGoal = ''
    for(let i=1; i < parseResult.length; i++) {
        const elem = translateElement(parseResult[i]).join('\n')
        notGoal = `${notGoal}${elem}`
    }
    return ""+
`digraph G {
   end [peripheries=2, shape=oval, label=\"${theGoal}\", style=filled, fillcolor=lightblue];
${notGoal}
}`;
}

function translateElement(element) {
    const node = `${(element.needs)} [label="${(element.text)}"]`
    const arrow = `${(element.needs)} -> end [dir=back]`
    return [node, arrow]
}

module.exports = {
    translate,
    translateElement
}
