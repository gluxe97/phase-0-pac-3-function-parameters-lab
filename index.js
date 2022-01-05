function introduction(name) {
    return `Hi, my name is ${name}.`;
}

introductionWithLanguage("Gabriel", "JavaScript");
function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

introductionWithLanguageOptional("Gabriel", "Ruby");
function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

