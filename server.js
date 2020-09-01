const express = require('express');
const next = require('next');
const answers = [
    'Не знаю',
    'Чем могу быть полезен?',
    'Возможно',
    'Да, да, я вас понимаю',
    'Не понятно',
    'Как сказать',
    'Я лучше чем Сири',
    'Не останавливайтесь',
    'Вам пора отдохнуть',
    'Я серьезно',
    'Попробуйте раслабиться',
    'Bы не желаете пойти в отпуск?',
    'Что-то мне захотелось на свежий воздух'
]
const port = process.env.PORT || 3000;
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const nextHandle = app.getRequestHandler();

function getRandomNumber(maxNumber) {
    return Math.floor(Math.random()*maxNumber)
}
app.prepare()
    .then(() => {
        console.log('prepare');
        const data = getData();
        console.log(data);
        const server = express();
        server.get('/answer', (req, res) => {
            const randomAnswer = answers[getRandomNumber(answers.length)];
            console.log("hola")
            setTimeout(()=> {
                res.status(200).json({data: randomAnswer})
            }, getRandomNumber(5)*1000)
        });
        server.get("*", (req, res) => {
            return nextHandle(req, res)
        });

        server.listen(port, (err) => {
            if (err) {
                throw err;
            }
            console.log(`> Ready on http://localhost:${port}`)
        });
    })