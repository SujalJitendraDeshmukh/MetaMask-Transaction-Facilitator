// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

contract TransferTokens {
    event Transfer(address indexed _from, address indexed _to, uint256 _amount);

    function transferEther(address payable _to, uint256 _amount) external payable {
        require(msg.value >= _amount, "Insufficient balance");
        require(_to != address(0), "Invalid recipient address");

        _to.transfer(_amount);
        emit Transfer(msg.sender, _to, _amount);
    }

    function check() public view returns (string memory) {
        return "Shashwat Singh";
    }

    receive() external payable {}
}