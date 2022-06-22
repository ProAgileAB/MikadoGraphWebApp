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
        const label = parseResult[i].text
        const id = parseResult[i].needs
        const node = `   ${id} [label="${label}"]`
        const arrow = `   ${id} -> end [dir=back]`
        notGoal = `${notGoal}
${node}
${arrow}`
    }
    return ""+
`digraph G {
   end [peripheries=2, shape=oval, label=\"${theGoal}\", style=filled, fillcolor=lightblue];
${notGoal}
}`;
}

module.exports = {
    translate
}
