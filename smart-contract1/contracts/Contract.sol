// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract CommentContract {
    struct Comment {
        string url;
        string comment;
        address userAddress;
        string username;
        int votes;
        mapping(address => bool) upvoters;
        mapping(address => bool) downvoters;
    }

    mapping(address => string) public userAccounts;
    mapping(string => address) public usernameToAddress;
    Comment[] public comments;

    function createAccount(address _walletAddress, string memory _username) public {
        require(usernameToAddress[_username] == address(0), "Username already exists");
        userAccounts[_walletAddress] = _username;
        usernameToAddress[_username] = _walletAddress;
    }

    function insertComment(string memory _url, string memory _comment) public {
        Comment memory newComment;
        newComment.url = _url;
        newComment.comment = _comment;
        newComment.userAddress = msg.sender;
        newComment.username = userAccounts[msg.sender];
        newComment.votes = 0;
        comments.push(newComment);
    }

    function readUsers() public view returns (string[] memory, address[] memory) {
        uint256 length = comments.length;
        string[] memory usernames = new string[](length);
        address[] memory walletAddresses = new address[](length);

        for (uint256 i = 0; i < length; i++) {
            usernames[i] = comments[i].username;
            walletAddresses[i] = comments[i].userAddress;
        }

        return (usernames, walletAddresses);
    }

    function upvote(uint256 _commentIndex) public {
        require(_commentIndex < comments.length, "Invalid comment index");

        Comment storage comment = comments[_commentIndex];
        require(!comment.upvoters[msg.sender], "Already upvoted");

        comment.upvoters[msg.sender] = true;
        comment.votes++;
    }

    function downvote(uint256 _commentIndex) public {
        require(_commentIndex < comments.length, "Invalid comment index");

        Comment storage comment = comments[_commentIndex];
        require(!comment.downvoters[msg.sender], "Already downvoted");

        comment.downvoters[msg.sender] = true;
        comment.votes--;
    }
}
