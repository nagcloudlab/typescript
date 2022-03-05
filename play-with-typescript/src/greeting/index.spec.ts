

import { greet } from './index'

it("should return hello message", () => {
    const actual = greet();
    const expected = "hello";
    expect(expected).toEqual(actual)
});