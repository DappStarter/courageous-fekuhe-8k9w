require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom knife frame security iron response still grant grid clip tail speed'; 
let testAccounts = [
"0x151e95320c1a8281106b67b9a8fe6d3c41ea42d3523190a0847871a484a31fc2",
"0x28e84eac57dfac18cd33c0f9c078c0e48ba064e4ec3b8a7847b0880d0da1aaec",
"0x09a27825b40e23cc1f0ff023f1dbda8b7ba23fac89c4291475029343f832d3a4",
"0x906cb7ef5594c068acbc7e586f3ac78a4f6c388e9070474deb04a915749aa050",
"0xfcef79c665f0d5d6f10998d818711b3c3b086144e28ad3d57b0354df3eb6eda3",
"0x858a3c5d36ae31815f53f85cb542240d6f2790b486138454c00cb47cfd59effc",
"0x38c6c4703e8cdf2a59d64a857079ec207406758b2f9d2e58a336dd2f57d4a1a3",
"0xed9382a652ec3cb579242b7068617b2c1ddc07606338977a5e70a43519f72f2f",
"0x00f4f2684d3557ce336b40d1244e95a6740bc0d402fca20ce70748db43574112",
"0x368325a86cd95bc78d98138e2f3d1839103dcc8acae4ef6916487ee97ad0129e"
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

