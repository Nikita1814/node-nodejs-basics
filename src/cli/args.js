import process from 'node:process';

const parseArgs = () => {
    const propNameStirngMatch = /^--.*$/
    const props =  Object.values(process.argv)
    const propsToDisplay = {}
    props.map( (variable, idx) => {

    if (
        propNameStirngMatch.test(variable) 
        && !(propNameStirngMatch.test(props[idx-1]))
    ){
        propsToDisplay[variable] = 'prop'
    } else if (
        propNameStirngMatch.test(variable) 
        && props[idx-1] 
        && propNameStirngMatch.test(props[idx-1]) 
        && propsToDisplay[props[idx-1]]
    ) {
        propsToDisplay[props[idx-1]] = variable
    } else if (
        propNameStirngMatch.test(variable) 
        && props[idx-1] 
        && propNameStirngMatch.test(props[idx-1])
        && !propNameStirngMatch.test(props[idx+1])  
    ) {
        propsToDisplay[variable] = 'prop'
    } else if (
        !propNameStirngMatch.test(variable) 
        && propNameStirngMatch.test(props[idx-1]) 
        &&  propsToDisplay[props[idx-1]] 
    ) {
        propsToDisplay[props[idx-1]] = variable
    }
    })
    Object.entries(propsToDisplay).map((entry => {
        console.log(`${entry[0]} is ${entry[1]}`)
    }))
};

parseArgs();