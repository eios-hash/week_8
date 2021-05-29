const {проверка_моделей,  Символ, Не, И, Или, Импликация, Эквивалентность} = require('./logic.js')


const дождь = new Символ("дождь") // Идёт дождь.
const хагрид = new Символ("хагрид") // Гарри посетил Хагирда.
const дамблдор = new Символ("дамблдор")// Гарри посетил Дамблдора.

const знание = new И(
    new Импликация(new Не(дождь), хагрид),
    new Или(хагрид, дамблдор),
    new Не(new И(хагрид, дамблдор)),
    дамблдор
)


try{ 
	console.log(проверка_моделей(знание, дождь))
}catch(ex)
{
	if(ex instanceof TypeError)
	{ 
		console.log(ex.message) 
		process.exit(1) 
	}
	else
	{
		console.log(ex.message)
		process.exit(2)
	}
}



