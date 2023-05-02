export const normalizeString = (str: string) =>
    str
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase();

export const isInclude = (source: string, target: string) => {
    const sourceNormalize = normalizeString(source);
    const targetNormalize = normalizeString(target);

    return sourceNormalize.includes(targetNormalize);
};

export const isEquals = (source: string, target: string) => {
    const sourceNormalize = normalizeString(source);
    const targetNormalize = normalizeString(target);

    return sourceNormalize === targetNormalize;
};
