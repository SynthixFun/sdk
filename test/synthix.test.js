const { expect } = require("chai");

describe("Synthix", function () {

  it("Should deploy token", async function () {

    const Token = await ethers.getContractFactory("SynthixToken");
    const token = await Token.deploy();

    expect(await token.name()).to.equal("Synthix Token");

  });

});
