// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

contract TransferTokens {
    event Transfer(address indexed _from, address indexed _to, uint256 _amount);

    function transferEther(
        address payable _to
    ) external payable {
        require(_to != address(0), "Invalid recipient address");
        payable(_to).transfer(msg.value);
        emit Transfer(msg.sender, _to, msg.value);
    }

    function check() public pure returns (string memory) {
        return "Shashwat Singh";
    }
}