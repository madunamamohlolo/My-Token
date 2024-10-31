async function main() {
    const [deployer] = await ethers.getSigners();
    const ERC20Token = await ethers.getContractFactory("MyERC20Token");
    const erc20 = await ERC20Token.deploy(1000); // Initial supply of 1000 MTK
    await erc20.deployed();

    console.log("ERC20 Token deployed to:", erc20.address);
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
