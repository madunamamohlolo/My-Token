async function main() {
    const [deployer] = await ethers.getSigners();
    const ERC721Token = await ethers.getContractFactory("MyERC721Token");
    const erc721 = await ERC721Token.deploy();
    await erc721.deployed();

    console.log("ERC721 Token deployed to:", erc721.address);
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
