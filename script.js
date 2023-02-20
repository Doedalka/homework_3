const student = "Малеечев Максим Ильич";
document.getElementById("student").innerHTML = student;
let cheliki = [
{name:'Пономарев Андрей Алексеевич', gender: 'man', birth: '11.12.1980'},
{name: 'Рыбакова Алина Семёновна', gender: 'woman', birth: '16.04.1974'},
{name: 'Молчанов Даниил Ильич', gender: 'man', birth: '21.03.1984'},
{name: 'Смирнова София Львовна', gender: 'woman', birth: '02.01.1987'},
{name: 'Владимиров Артём Григорьевич', gender: 'man', birth: '07.12.1990'},
{name: 'Маслова Елизавета Егоровна', gender: 'woman', birth: '10.10.1997'},
{name: 'Назарова Вера Романовна', gender: 'woman', birth: '01.05.1983'},
{name: 'Иванов Иван Фёдорович', gender: 'man', birth: '05.05.1999'},
{name: 'Дмитриев Алексей Григорьевич', gender: 'man', birth: '12.11.1998'},
{name: 'Овчинников Платон Александрович', gender: 'man', birth: '26.05.1999'},
{name: 'Мартынова Софья Тимуровна', gender: 'woman', birth: '07.06.1995'},
{name: 'Соколов Михаил Адамович', gender: 'man', birth: '11.03.1979'}
] //МАССИВ ЛЮДЕЙ
function years(birth) {
  now = new Date();

    actyear = new Date(birth);
    actyear.setFullYear(now.getFullYear());

    birth = new Date(birth);
    birth.setMonth(birth.getMonth()-1);

    age_diff = new Date(now - birth); 
    age = Math.abs(age_diff.getFullYear() - 1970);
        if ((now - actyear) < 0) {
        age = age - 1;
    } 
    return age
  } 
const totalPeoples = cheliki.length;
console.log(`Всего гостей : ${totalPeoples}`); 
const man = cheliki.filter(cheliki => cheliki.gender == 'man').length; 
console.log(`Мужчин : ${man}`);  
const woman  = (totalPeoples - man); 
console.log(`Женщин : ${woman}`);
for (let user_index in cheliki) {  //цикл с выводом,также нахождением челиков(людей)
    user = cheliki [user_index]
   
    name_short = user.name.split(' ')
    name_short = `${name_short[0]} ${name_short[1].substr(0,1)}. ${name_short[2].substr(0,1)}.` 
   
    gender = (user.gender == 'man' && 'Муж.') || 'Жен.'
    
    birth = user.birth.split('.')
    age = years(new Date(birth[2], birth[1], birth[0]));// использует функцию лет(сколько лет гостям)
   let final = (`${name_short}, ${gender}, Возраст: ${age}`); 
    console.log(final);
} 