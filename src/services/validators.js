export const textLength = value =>
    value && value.length >= 2 && value.length <= 120
        ? undefined
        : `Enter from 2 to 120  characters`;