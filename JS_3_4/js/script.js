var test = {
    header: '<h3>Тест по программированию</h3>',
    question: ['Вопрос №1', 'Вопрос №2',' Вопрос №3'],
    checkboxname: ['checkbox-one', 'checkbox-two', 'checkbox-three',
                   'checkbox-four', 'checkbox-five', 'checkbox-six',
                   'checkbox-seven', 'checkbox-eight', 'checkbox-nine'],
    id: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    answer: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3',
            'Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3',
            'Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
    submit: 'Проверить мои результаты'
}
var s = 0;

var wrapper = document.createElement('div');
var parent = document.body;
wrapper.className = 'row-fluid';
parent.appendChild(wrapper);

var grid = document.createElement('div');
wrapper.appendChild(grid);
grid.className = 'container';

var header = document.createElement('header');      //header
grid.appendChild(header);
header.innerHTML = test.header;

var main = document.createElement('main');      //main
grid.appendChild(main);

    var form = document.createElement('form');      //ol
    main.appendChild(form);
    var ol = document.createElement('ol');
    form.appendChild(ol);
    form.action = '#BITCH';

        for (i = 0; i < test.question.length; i++) {        //li
            var li = document.createElement('li');
            ol.appendChild(li);
            var h5 = document.createElement('h5');
            h5.innerHTML = test.question[i];
            li.appendChild(h5)

            for (j = 0; j < 3; j++) {       //input

                var p = document.createElement('p');        //p
                li.appendChild(p);

                var checkbox = document.createElement('input');     //checkbox
                p.appendChild(checkbox);
                checkbox.type = 'checkbox';
                checkbox.name = test.checkboxname[s];
                checkbox.id = test.id[s];

                var label = document.createElement('label');        //label
                label.htmlFor = test.id[s];
                label.className = 'textbox';
                label.appendChild(document.createTextNode(test.answer[s]));
                p.appendChild(label);
                s++;
            }
        }

    var div = document.createElement('div');        //div
    form.appendChild(div);
    div.className = 'button--config';

        var button = document.createElement('button');       //button
        button.type = 'submit';
        button.className = 'btn';
        button.innerHTML = test.submit;
        div.appendChild(button);
