'use strict'

module.exports = {
    cliCodingTest
}


const iconv = require('iconv-lite');

/**
 * hexString to Buffer
 * @param {string} data
 * @returns {ArrayBuffer} 
 */

function cliCodingTest () {
    const hexString = "2b462c30303130313030302c32302f30312f30332030353a34363a34352c2cb5e7d4b4b9cad5cf2c31bac5d6f7bbfab1b8b5e7b9cad5cf0d0a";
    const test = '+F,00101000,20/01/03 05:46:45,,电源故障,1号主机备电故障';
    const gbkBuffer = Buffer.from(hexString, 'hex');
    // console.log('gbkBuffer:', gbkBuffer);
    const gbkString = iconv.decode(gbkBuffer, 'GBK');
    // console.log('gbkString:', gbkString);
    const utfBuffer = iconv.encode(gbkString, 'utf8');
    // console.log('utfBuffer:', utfBuffer);
    const utfString = iconv.decode(utfBuffer, 'utf8');
    console.log('utfString:', utfString);
}
