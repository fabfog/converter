import XMLParser from 'react-xml-parser';

export function xmlToObjectRatesTransformer(xmlText: string) {
    const parsedData = new XMLParser().parseFromString(xmlText);

    const ratesMap: Record<string, number> = {};
    parsedData.children[2].children[0].children.forEach((child: any) => {
        const { currency, rate } = child.attributes;
        ratesMap[currency] = +rate;
    })
    return ratesMap;
}
