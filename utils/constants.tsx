import path from 'path';
import fs from 'fs'

export const citiesPath = (env: string) => {
    console.log("***********************************************")
    console.log(env)

    const path1 = path.resolve('./assets/worldcities.csv');
    console.log('exists?', fs.existsSync(path1))
    console.log('full path', path.resolve('./assets/worldcities.csv'))
    console.log('full path current', path.resolve('./'))

    const path09 = path.resolve('./assets');

    console.log('exists?', fs.existsSync(path09))


    const path2 = path.resolve('./');
    fs.readdirSync(path2).forEach(file => {
        console.log(file);
    });

    const path3 = path.resolve('../');
    fs.readdirSync(path3).forEach(file => {
        console.log(file);
    });

    const filePath = env === 'production' ? '/worldcities.csv' : '/worldcities.csv'
    return filePath
}

