import {ethers} from "ethers";

export default function convertToUnits(number: number, toUnit: string): string {
    const units: { [key: string]: ethers.BigNumber } = {
        'wei': ethers.BigNumber.from(1),
        'gwei': ethers.constants.WeiPerEther.div(1e9),
        'shannon': ethers.constants.WeiPerEther.div(1e9),
        'ether': ethers.constants.WeiPerEther,
        'finney': ethers.constants.WeiPerEther.div(1e15),
        'szabo': ethers.constants.WeiPerEther.div(1e12),
        'kwei': ethers.constants.WeiPerEther.div(1e3),
        'ada': ethers.constants.WeiPerEther.div(1e3)
    };

    if (!(toUnit in units)) {
        return "Invalid unit";
    }

    const amountInWei: ethers.BigNumber = ethers.utils.parseUnits(number.toString(), 'ether');
    const convertedAmount: string = ethers.utils.formatUnits(amountInWei, toUnit);

    return convertedAmount;
}