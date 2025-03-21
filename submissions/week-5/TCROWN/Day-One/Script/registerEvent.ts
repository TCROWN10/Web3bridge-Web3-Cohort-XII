import {ethers} from "hardhat";



async function registerEvent() {
    const _event = await ethers.getContractAt("EventContract", "0xD51c0784786B5BE4358e6c1Cd8829A766b5c068a");
    const owner = await ethers.provider.getSigner()
    const block = await ethers.provider.getBlock("latest");
    const time = block.timestamp;
    const latestTime = await time;
    const receipt = await _event.registerForEvent(2, {value:ethers.parseUnits("0.00000001", 18)})
    const _hasRegistered = await _event.getHasRegistered(2, owner.address);
    

    console.log("REGISTERED", _hasRegistered)

} 


registerEvent().catch((error) => {
    console.error(error);
    process.exitCode = 1;
})
