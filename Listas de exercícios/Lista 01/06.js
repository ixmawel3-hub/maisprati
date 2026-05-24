console.clear()
let A = 3
let B = 4
let C = 5
let ehTriangulo = true

if (A < B + C && B < A + C && C < A + B) {
    console.log(`O triângulo ${A}, ${B}, ${C} existe.`)
} else {
    console.log(`O triângulo ${A}, ${B}, ${C} não existe.`)
    ehTriangulo = false
}

if (ehTriangulo){
    if (A == B && B == C){
        console.log("O triângulo é equilátero.")
    } else if (A == B || A == C || B == C) {
        console.log("O triângulo é isóceles.")
    } else if (A != B && B != C) {
        console.log("O triângulo é escaleno.")
    }
}