// Массивы - это структура данных, хранящая набор разных значений, массив обозначается квадратными скобками []
// length - отдает нам длину массива и строки

// let array = ['bmw','mers',3,'audi',false];

// let str = 'hello world!'

// console.log(str.length);

// let numbers = [5,10,15,20,25,30,33,21,32,17,29];
// let even = 0;
// let odd = 0;
// for(let i = 0; i < numbers.length;i++ ) {
//    even += numbers[i] %2 == 0 ? 1 : 0
//    odd += numbers[i] %2 == 1 ? 1 : 0
// }
// console.log(`Количество четных чисел - ${even}`);
// console.log(`Количество нечетных чисел - ${odd}`);


// let students = ['Shavkat','Shahrizoda','Zafar', 'Sardor'];

// for(let key in students) {
//    // console.log(students[key]);
//    // метод splice(номер ячейки, колличество ячеек) - удаляет выбранные ячейки
//    students[key] == 'Shahrizoda' ? students.splice(0,2) : ''
// }

// // push() - добавляет указаное значение в конец массива
// // unshift() - добавляет указаное значение в начало массива
// // shift() - удаляет первый элемент в массиве
// // pop() - удаляет последний элемент в массиве

// students.push('qwerty')
// students.unshift('array')
// students.pop()
// students.shift()


// console.log(students);

// let users = [
//     {id: 1, name: 'Zafar',age: 23},
//     {id: 2, name: 'Sardor',age: 25},
// ]

// users.push({id: 3, name: 'Js', age: 30})

// console.log(users);

// for(let key in users) {
//    for(let newKey in users[key]) {
//         console.log(users[key][newKey]);
//    }
// }


// let str = 'Html Css Js';
// let array = str.split(' ')

// console.log(array);


let user = []

for(i=0;i<Infinity;i++) {
    let word = prompt('Введите del, чтобы удалить, add, чтобы добавить или stop чтобы закончить');
    let pxp = word.split(', ');

    if(pxp[0] == 'add') {
        user.push(pxp[1])
    }else if(pxp[0] == 'del') {
        for(let lng = 0; lng < user.length; lng++) {
          user[lng] == pxp[1] ? user.splice(lng, 1) : '' ;    
    }

    
    }else if(pxp[0] == 'stop') {
        break ;
    }
    console.log(user);
}

alert('Вы остановили цикл')