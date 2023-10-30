export function displayDate (date) {
    date = date.split(', ')[1].split(' GMT')[0]
    let time = date.slice(11,17)
    date = date.slice(0,11)
    let datetime = date + ',' + time
    return datetime
}