/* The responsiblity of the translator is to
   translate from the parse result data structure
   to graphviz text format
 */

const { parse } = require('./parser.js')
const { translate } = require('./translator.js')

describe("translator", () => {
    it("can translate a single goal", () => {
        expect(translate(parse("Goal\n  The goal\n"))).toMatchSnapshot()
    })
    it("gives a readable error if no goal is defined", () => {
        expect(translate(parse("Done: Goal\n"))).toMatchSnapshot()
    })
})
