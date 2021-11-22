require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nature tail sign story dash often unable hunt option army gift'; 
let testAccounts = [
"0xfb0c7baabc579badb40f0d73fe15ccc7148c344983d9a1612dff64b88c22ac06",
"0x0299da534c8916fde37122f71ca51b1e3892eeed6d3517eb090a4442b58a0afc",
"0x4a471b7054301f56b0a94ae74fc4862199425e45ebc218d2f502161d9961ee07",
"0x9120821db5698c3d8c3b05ded9b626d9c0eae54af807803f1277640a6c2646cf",
"0x2e917b3fa4a813357142b70c757bb29b58b2b890f7793cde002cb6c3fe0827cb",
"0xcba6215c4a9c0665b6c955b8fe8bfe305d3724e9a4a4353149b1bbf068679be1",
"0xc9a277de996dc9f5f55a72a4bf54d2def8ddc2784ff26a5334f9289fbe2ddeb1",
"0x03478a61825a4e71b89ed369bde504e280e995c9308552e3067e8a0847d34299",
"0x24dfd054fd36a867ca1576d37716e730fd9564ac5765bf795dd604f3aadbd4f9",
"0xc18be9825c154dfab25d9fd445195d477a02d3c3963319e94c6abfe07e62d2ec"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

