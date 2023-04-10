
let table = document.createElement ('table'); //создание узла таблицы
let tr = document.createElement('tr');
table.append(tr);

//Формирование заголовка таблицы
CreateHeaderCell(tr, 'Номер');
CreateHeaderCell(tr, 'Кличка');
CreateHeaderCell(tr, 'Фото');
CreateHeaderCell(tr, 'Возраст');
CreateHeaderCell(tr, 'Рейтинг');
CreateHeaderCell(tr, 'Фаворит');
CreateHeaderCell(tr, 'Описание');

document.body.append(table); //вставка сформированной таблицы с заголовком в тело документа

for (let i = 0; i < cats.length; i++) //цикл формирования строк tr таблицы 
{
    tr = document.createElement('tr');
    table.append(tr);
    CreateCells(tr, i); //добавление ячейки в новую строку
      
}

//-----------------------------------
//Функция формирования ячеек заголовка таблицы
//-----------------------------------
function CreateHeaderCell(tr, cellName)
{
    let td = document.createElement('td');
    tr.append(td);
    let hh5 = document.createElement ('h5');
    td.append(hh5);
    hh5.append(cellName);

}

//-----------------------------------
//Функция формирования ячеек с данными
//-----------------------------------
function CreateCells(tr, i)
{
    td = document.createElement('td');
    tr.append(td);
    td.append(cats[i].id);

    td = document.createElement('td');
    tr.append(td);
    td.append(cats[i].name);
   
    td = document.createElement('td');
    tr.append(td);
    const image = document.createElement('img');
    image.src  = cats[i].img_link;
    image.style.width='100px';
    td.append(image);

    td = document.createElement('td');
    tr.append(td);
    td.append(cats[i].age);

    td = document.createElement('td');
    tr.append(td);
    td.append(cats[i].rate);

    td = document.createElement('td');
    tr.append(td);
    
    if(cats[i].favourite)
    {
        td.append('Да');
        td.style.backgroundColor = 'rgb(0 255 0)';
    }
    else
    {
        td.append('Нет');
        td.style.backgroundColor = 'rgb(255 255 0)';
    }

    td = document.createElement('td');
    tr.append(td);
    td.append(cats[i].description);
      
}