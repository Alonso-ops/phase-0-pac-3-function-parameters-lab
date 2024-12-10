function introduction(name){
    return `Hi, my name is ${name}.`
}
function introductionWithLanguage(Fabian, language){
    return`Hi, my name is ${Fabian} and I am learning to program in ${language}.`
}
function introductionWithLanguageOptional(Fabian, Language = "JavaScript"){
    return `Hi, my name is ${Fabian} and I am learning to program in ${Language}.`
}