export function convertRates(ratesMap: Record<string, number>, rateFromKey: string, rateToKey: string, amount: number) {
    const rateTo = ratesMap[rateToKey];
    const rateFrom = ratesMap[rateFromKey];

    if (rateTo === undefined || rateFrom === undefined) {
        throw new Error('Missing currency');
    }

    const convertedRate = rateTo / rateFrom;
    
    return amount * convertedRate;
}