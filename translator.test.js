/* The responsiblity of the translator is to
   translate from the parse result data structure
   to graphviz text format
 */

const { parse } = require('./parser.js')
const { translate, translateElement } = require('./translator.js')

describe("mikado translator", () => {
    it("can translate a single goal", () => {
        expect(translate(parse("Goal\n  The goal\n"))).toMatchSnapshot()
    })
    it("gives a readable error if no goal is defined", () => {
        expect(translate(parse("Done: Goal\n"))).toMatchSnapshot()
    })
    it("handles single prerequisite", () => {
        expect(translate(parse("Goal\n" +
            "   A goal\n" +
            "Goal needs Format\n" +
            "   Format the file for readability\n"))).toMatchSnapshot()
    })
})


describe("element translator", () => {
    it("need element", () => {
        const needElement = {
            text: "the text",
            needs: "Prereq",
            steps: ["Goal"]
        }
        expect(translateElement(needElement)).toEqual([
            `Prereq [label="the text"]`,
            `Prereq -> end [dir=back]`
        ])
    })
})
