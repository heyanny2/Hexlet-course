export const getWeekends = (dates) => {
  switch (dates) {
    case 'long':
      return ['saturday', 'sunday'];
    case 'short':
      return ['sat', 'sun'];
    default:
      return ['saturday', 'sunday'];
  }
};

console.log(getWeekends());//[ 'saturday', 'sunday' ]
console.log(getWeekends('long'));//[ 'saturday', 'sunday' ]
console.log(getWeekends('short'));//[ 'sat', 'sun' ]
