import {delayedLog} from "./delayedLog"

const arr = [1, 2, 3]

const processArray = async arr => {
    const results = []
    for (const item of arr)
        results.push(await delayedLog(item))
    console.info("Я тут ждал разрешения всех промисов")
    return await Promise.all(results)
}

processArray(arr).catch((error) => console.error(error))
console.info("Я не жду, ведь я синхронный")