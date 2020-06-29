pragma solidity ^0.6.2;

import "../node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Repoet is ERC721 {

    struct Poem {
        uint256 tokenId;
        address owner;
        bytes32 hashedTitle;
        bytes32 hashedContent;
    }

    mapping(uint256 => Poem) public poems;
    mapping (bytes32 => bool) isTaken;
    mapping(address => uint256[]) public ownerToTokenId;

    uint256 public totalTokens = 0;
    mapping(uint256 => uint256) public indexToTokenId;

    // TODO Add Metadata
    constructor()
    ERC721("Repoet", "POEM") public {}

    // New POEM for a particular owner
    function mint() external returns (bool) {
        // TODO
        return true;
    }

    // Get the owner of a POEM
    // return owner of a given POEM token
    function getOwner() external view returns (bool) {
        // TODO
        return true;
    }

    // Verify uniqueness of a POEM
    function contentIsUnique(bytes32 hashedContent)  external returns (bool) {
        require(!isTaken[hashedContent], "POEM content not unique");
        isTaken[hashedContent] = true;
        return true;
    }

    // Get all an owner's POEMs
    function getPOEMs() external returns (bool) {
        // TODO
        return true;
    }

    // Map all POEM tokens

    // Enable safe transfer of POEM - onlyOwner

}