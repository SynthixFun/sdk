// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract SynthixPool {

    mapping(address => uint256) public liquidity;

    event LiquidityAdded(address user, uint256 amount);
    event LiquidityRemoved(address user, uint256 amount);

    function addLiquidity() external payable {

        liquidity[msg.sender] += msg.value;

        emit LiquidityAdded(msg.sender, msg.value);
    }

    function removeLiquidity(uint256 amount) external {

        require(liquidity[msg.sender] >= amount, "Not enough liquidity");

        liquidity[msg.sender] -= amount;

        payable(msg.sender).transfer(amount);

        emit LiquidityRemoved(msg.sender, amount);
    }

}
