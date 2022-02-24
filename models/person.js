const data = require('../dataBirthdays.json');
const crew = require('../dataPersonCrew.json');
class Person {
getBirthdays() {
    let aleatoryArray = [];
    aleatoryArray.push(Math.floor(Math.random() * data.length));
    let counter = 1;
    while(counter < 5) {
        let aleatorio = Math.floor(Math.random() * data.length);
        !aleatoryArray.includes(aleatorio)? (aleatoryArray.push(aleatorio), counter++) : null;
    }
    let birthdays = data.filter((member,index)=> aleatoryArray.includes(index));
    let results = [];
    birthdays.map((member)=> results.push({profile_path: member.profile_path, name: member.name, dob: member.dob}))
    return results;
}
getCrew(){
    let preciseData = crew.crew.map (field => [{ adult:field.adult,id: field.id,name: field.name, department: field.department, poster_path:field.poster_path, release_date: field.release_date,title: field.title}]);
    return preciseData;
}
getDetails(id){
    let person = data.find(((member)=> member.celebId === id));
    let preciseData = [{name:person.name},{biography:person.biography},{profile_path: person.profile_path},{
        birthday: person.dob},{place_of_birth: person.place_of_birth}] ;
    return (preciseData);
    }
}
module.exports = Person;