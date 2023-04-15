export const required = value => {
    if (value) return undefined
    return console.log('u must write here something');

}