
const { parse } = require('./parser.js')

describe("parser", () => {
    it("can parse a single Done", () => {
        const result = parse("Done: Goal")
        expect(result).toStrictEqual([{'done': "Goal"}])
    })
    it("can parse a single Goal", () => {
        const result = parse("Goal\n  This is the goal\n")
        expect(result).toStrictEqual([{'goal': "This is the goal"}])
    })
    it("can parse a needs node", () => {
        const result = parse("Goal needs AddCalls\n  Call getScore function in both places\n")
        expect(result).toMatchSnapshot()
    })
})
