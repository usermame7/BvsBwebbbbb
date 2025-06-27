
const ethers = require('ethers');

function generateWalletFromIndex(index) {
    const mnemonic = process.env.MNEMONIC;
    const hdNode = ethers.utils.HDNode.fromMnemonic(mnemonic).derivePath("m/44'/60'/0'/0/" + index);
    return hdNode.address;
}

module.exports = { generateWalletFromIndex };
