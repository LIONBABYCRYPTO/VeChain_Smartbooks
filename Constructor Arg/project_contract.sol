// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract MyContract {

    uint256 public myValue;
    bool flag;

    constructor(uint256 _initialValue, bool val) {
        myValue = _initialValue;
        flag = val;
    }

    function check_vals() view public returns(uint256, bool){
        return (myValue, flag);
    }

}