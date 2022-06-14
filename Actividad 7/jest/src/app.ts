export function sumar(a: number, b: number): number{
    return a + b 
}

export function getLevel(level: number): string {
    let currentLevel: string

    if (level <= 40)
        currentLevel = "Junior"
    else if (level <= 85)
        currentLevel = "SemiSenior"
    else
        currentLevel = "Senior"

    return currentLevel
}