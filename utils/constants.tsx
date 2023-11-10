import path from 'path';

export const citiesPath = (env: string) => {
    console.log("***********************************************")

    const filePath = env === 'prod' ? '/worldcities.csv' : '/worldcities.csv'
    console.log('full path', path.resolve('./assets/worldcities.csv'))
    console.log('full path current', path.resolve('./'))
    console.log(env)
    return filePath
}

