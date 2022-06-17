
const { parse } = require('./parser.js')

describe("parser", () => {
    it("can parse a single Done", () => {
        const result = parse("Done: Goal")
        expect(result).toStrictEqual([{'done': "Goal"}])
    })
})
