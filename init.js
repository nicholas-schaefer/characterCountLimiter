"use strict";
(() => {
    let initialString;
    const splitString = []

    let uniqueArrayOfCharactersWithSpace;
    let uniqueArrayOfCharactersTwoWithoutSpaces;

    let characterTotalCount;
    const arrayOfCharacterCounts = [];

    let sortedArrayCharacterCounts;

    let minimumSetCharacterCount;
    let maxCharactersCanBeRemoved;

    const solutionArrayOfRemovedCharacters = [];
    let characterTally;
    let sortedArrayCharacterLength; 

    const defineTargetString = () => {
        initialString = `If you want to jumpstart the process of talking to us about this role, here’s a little challenge: write a program that outputs the largest unique set of characters that can be removed from this paragraph without letting its length drop below 50.`;
    }

    const divideStringEveryCharacter = () => {
        for (const c of initialString) {
            splitString.push(c);
        }
        console.log(`\n----All Characters In String Listed Below---`);
        console.log(splitString)
    }   
 
    const removeSpacesAndDuplicateCharacters = () => {
        uniqueArrayOfCharactersWithSpace = Array.from(new Set(splitString));
        // console.log(uniqueArrayOfCharacters.length);
        // console.log(uniqueArrayOfCharacters);
        uniqueArrayOfCharactersTwoWithoutSpaces = uniqueArrayOfCharactersWithSpace.filter(function (value, index, arr) {
            return value != ' ';
        });
        console.log(`\n----"${uniqueArrayOfCharactersTwoWithoutSpaces.length}" Unique Characters Not Including Blank Spaces Listed Below---`)
        console.log(uniqueArrayOfCharactersTwoWithoutSpaces)
    }    

    const tallyCharacterAppearanceCounts = () => {
        characterTotalCount = 0;
        uniqueArrayOfCharactersTwoWithoutSpaces.forEach((element) => {
            let objectContainer = {}
            let count = parseInt(initialString.split(element).length - 1)
            characterTotalCount += count;
            objectContainer.element = element;
            objectContainer.count = count;
            arrayOfCharacterCounts.push(objectContainer);
        });
        console.log(`\n----"${characterTotalCount}" Total Characters Count:---`);
    }

    const sortCharacterAppearanceCounts = () =>{
        sortedArrayCharacterCounts = arrayOfCharacterCounts.sort((a, b) => a.count - b.count);
        console.log(sortedArrayCharacterCounts);
    }

    const evaluateMaxNumCharactersCanBeDropped = () =>{
        minimumSetCharacterCount = 50;
        maxCharactersCanBeRemoved = characterTotalCount - minimumSetCharacterCount;
        console.log(`\n---"${maxCharactersCanBeRemoved}"Max Number Characters Can be Removed Before Going Below Minimum Character Limit---`);
    }

    const evaluateWhichCharactersCanBeDropped = () =>{
        sortedArrayCharacterLength = sortedArrayCharacterCounts.length
        characterTally = 0;
        for(let i=0; i<sortedArrayCharacterLength; i++){
            characterTally += sortedArrayCharacterCounts[i].count
            if (characterTally<= maxCharactersCanBeRemoved){
                console.log(`This Character Must Disappear!!!: "${sortedArrayCharacterCounts[i].element} Character Count at = ${characterTally}"`);
                solutionArrayOfRemovedCharacters.push(sortedArrayCharacterCounts[i].element);
            }else{
                console.log(`STAY PUT CHARACTER!: "${sortedArrayCharacterCounts[i].element} Character Count at = ${characterTally}"`);
            }
        }
        console.log(`\n---Solution!!! Removed Characters Below---`);
        console.log(solutionArrayOfRemovedCharacters);
    }

    defineTargetString();
    divideStringEveryCharacter();
    removeSpacesAndDuplicateCharacters();
    tallyCharacterAppearanceCounts();
    sortCharacterAppearanceCounts();
    evaluateMaxNumCharactersCanBeDropped();
    evaluateWhichCharactersCanBeDropped();

})()