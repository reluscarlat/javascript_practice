export const PI = 3.14;

export function getCircumference(radius) {
    return Number(radius)*2*PI;
}

export function getArea(radius) {
    return (Number(radius)**2)*PI;
}

export function getVolume(radius) {
    return (Number(radius)**2)*PI*4;
}