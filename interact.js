async function main() {
    const recipient = "0x96029cf65026cB7F151271DCc9966eF5730AbCe0";
 
    // Load deployed ERC20 contract
    const ERC20Token = await ethers.getContractFactory("MyERC20Token");
    const erc20 = ERC20Token.attach("<Deployed_ERC20_Address>");
    const tx1 = await erc20.transfer(recipient, ethers.utils.parseUnits("100", 18));
    await tx1.wait();
    console.log(`100 ERC20 tokens transferred to ${recipient}`);
 
    // Load deployed ERC721 contract
    const ERC721Token = await ethers.getContractFactory("MyERC721Token");
    const erc721 = ERC721Token.attach("<Deployed_ERC721_Address>");
    const tx2 = await erc721.mintNFT(recipient);
    await tx2.wait();
    console.log(`1 ERC721 token minted to ${recipient}`);
 }
 
 main().catch((error) => {
    console.error(error);
    process.exit(1);
 });
 