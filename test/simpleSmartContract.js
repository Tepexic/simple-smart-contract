// artifacts es provisto por truffle
const SimpleSmartContract = artifacts.require("SimpleSmartContract");

// truffle usa mocha para probar, tenemos acceso a it(), before(), etc.

// contract() crea una instancia del contrato para probar
contract("SimpleSmartContract", () => {
  it("Should deploy smart contract properly", async () => {
    const simpleSmartContract = await SimpleSmartContract.deployed();
    // deployed() no despliega el contrato, simplemente retorna un objecto
    // que apunta a un contrato que ya está desplegado
    console.log(simpleSmartContract.address);
    // Verifiquemos que la direccio'n no esta' vaci'a, una direccio0n vaci'a
    // apunta a un contrato no desplegado
    assert(simpleSmartContract.address !== "");
    // las pruebas se corren con truffle test
  });
});
