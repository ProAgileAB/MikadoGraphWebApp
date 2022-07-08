/* The responsiblity of the translator is to
   translate from the parse result data structure
   to graphviz text format
 */

const { parse } = require("../parser.js")
const { translate, translateElement } = require("../translator.js")

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
    it("handles single done prerequisite", () => {
        expect(translate(parse(`Goal
   A goal
Goal needs Format
   Format the file for readability
Done: Format
`))).toMatchSnapshot()
    })
})


describe("element translator", () => {
    it("points towards end node when Goal needs something", () => {
        const needElement = {
            text: "the text",
            needs: "Prereq",
            steps: ["Goal"]
        }
        expect(translateElement(needElement)).toEqual([
            `Prereq [label="the text"]`,
            `Prereq -> Goal [dir=back]`
        ])
    })
    it("points towards prerequisite node when general node needs something", () => {
        const needElement = {
            text: "This step needs to be done first",
            needs: "NeededPrereq",
            steps: ["PrereqInNeed"]
        }
        expect(translateElement(needElement)).toEqual([
            `NeededPrereq [label="This step needs to be done first"]`,
            `NeededPrereq -> PrereqInNeed [dir=back]`
        ])
    })
    describe("handles done by setting green background", () => {
        it("for goal", () => {
            const doneElement = { "done": "Goal" }
            expect(translateElement(doneElement)).toEqual([
                `Goal [style=filled, fillcolor=green]`
            ])
        });
        it("for non goal step", () => {
            const doneElement = { "done": "Step" }
            expect(translateElement(doneElement)).toEqual([
                `Step [style=filled, fillcolor=green]`
            ])
        });
    });
})
