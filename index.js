

// const regexp = /шаблн/
// regpexp = /шаблон/gmi;


const text = "Меня зовут Мага, мне 25 лет" 
console.log(text.match(/\d+/g));

// \d -цифра 0-9 
// + - - одна или больше 
// g - все совпадения  





const text1 = "Меня зовут Мага, мне 25 лет" 
console.log(text1.match(/мне \d+/g));


const text2 = "Меня зовут Алекс, мне 30 лет , у меня есть mercdec s500"

// console.log(text3.match(/^\d+\.\d+\30/.));


console.log(text2.match(/[А-ЯЁ][а-яё]+/g));




