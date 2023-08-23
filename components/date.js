import {parseISO, format} from 'date-fns';

export default function Date({dateString}){
    const date = parseISO(dateString)
    console.log(date); // this generates a valid Date object but itfails below?
    return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}
