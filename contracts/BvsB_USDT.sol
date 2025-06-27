
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IERC20 {
    function transfer(address recipient, uint256 amount) external returns (bool);
    function balanceOf(address wallet) external view returns (uint256);
    function transferFrom(address from, address to, uint256 amount) external returns (bool);
}

contract BullsVsBears {
    address public owner;
    address public usdtToken;
    uint256 public tradeId;

    struct Trade {
        address player;
        uint256 amount;
        bool direction;
        uint256 expiry;
        bool resolved;
        bool won;
    }

    mapping(uint256 => Trade) public trades;

    constructor(address _usdtToken) {
        owner = msg.sender;
        usdtToken = _usdtToken;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        _;
    }

    function placeTrade(uint256 amount, bool direction, uint256 duration) external {
        require(IERC20(usdtToken).transferFrom(msg.sender, address(this), amount), "Transfer failed");
        trades[tradeId] = Trade(msg.sender, amount, direction, block.timestamp + duration, false, false);
        tradeId++;
    }

    function resolveTrade(uint256 _tradeId, bool didWin) external onlyOwner {
        Trade storage t = trades[_tradeId];
        require(!t.resolved, "Already resolved");
        t.resolved = true;
        t.won = didWin;
        if (didWin) {
            IERC20(usdtToken).transfer(t.player, (t.amount * 190) / 100); // 90% payout
        }
    }

    function transferOwnership(address newOwner) external onlyOwner {
        owner = newOwner;
    }

    function withdrawTokens(address to, uint256 amount) external onlyOwner {
        IERC20(usdtToken).transfer(to, amount);
    }
}
