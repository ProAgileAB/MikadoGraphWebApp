Expression
  = (Goal / Prereq / Done)+

Goal
  = "Goal" text:Text { return { "goal": text } }

Prereq
  = steps:Identifiers " needs " prereq:Identifier text:Text
  { return {
    "steps": steps,
    "needs": prereq,
    "text": text
  }}

Done
  = "Done: " id:Identifier "\n"* { return {"done": id} } 

Identifiers
  = step:Identifier steps:(", " id:Identifier { return id })*
  {
    steps.push(step)
    return steps
  }

Identifier
  = id:([a-zA-Z]+) { return id.join('') }

Text
  = "\n" _ text:([()a-zA-Z \">=.+])+ "\n" { return text.join('') }

_ "whitespace"
  = [ \t\n\r]*
