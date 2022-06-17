
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
    it("can parse a realistic example", () => {
        const result = parse("Goal\n" +
            "   Reduce duplication of switch logic\n" +
            "Goal needs Calls\n" +
            "   Call getpointName(int) replacing both switches\n" +
            "Calls needs AddFunction\n" +
            "  Add getPointName(int) function based on bottom switch\n" +
            "AddFunction needs AddAll\n" +
            "  Add \"+All\" after top switch\n" +
            "AddAll needs Format\n" +
            "  Format file for readability\n" +
            "AddAll needs DeuceReturn\n" +
            "  Return \"Deuce if score >= before top switch\n" +
            "Format, DeuceReturn needs Gitignore\n" +
            "  Update .gitignore to reduce workspace clutter\n" +
            "Done: AddAll\n" +
            "Done: Format\n")
        expect(result).toMatchSnapshot()
    })
})
