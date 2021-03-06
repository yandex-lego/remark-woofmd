## Базовые строчные элементы

←**Полужирный текст**
↑ STARS TEXT STARS
→ {type: 'strong', children: [{type: 'text', value: 'Полужирный текст'}]}

←//Курсивный текст//
↑ SLASHES TEXT SLASHES
→ {type: 'womItalic', children: [{type: 'text', value: 'Курсивный текст'}]}

←__Подчеркнутый текст__
↑ LODASHES TEXT LODASHES
→ {type: 'womUnderline', children: [{type: 'text', value: 'Подчеркнутый текст'}]}

←##Моноширинный текст##
↑ TEXT
→ {type: 'womMonospace', children: [{type: 'text', value: 'Моноширинный текст'}]}

←++Мелкий текст++
↑ PLUSES TEXT PLUSES
→ {type: 'womSmall', children: [{type: 'text', value: 'Мелкий текст'}]}

←--Зачеркнутый текст--
↑ MINUSES TEXT MINUSES
→ {type: 'womStrike', children: [{type: 'text', value: 'Зачеркнутый текст'}]}

←~~Зачеркнутый текст~~
↑ TILDES TEXT TILDES
→ {type: 'delete', children: [{type: 'text', value: 'Зачеркнутый текст'}]}

←??Вопрос??
↑ QUESTIONS TEXT QUESTIONS
→ {type: 'womQuestion', children: [{type: 'text', value: 'Вопрос'}]}

←??Вопрошение???
↑ EXCLAMATIONS TEXT EXCLAMATIONS
→ {type: 'womQuestion', children: [{type: 'text', value: 'Вопрошение?'}]}

←!!Замечание!!
↑ EXCLAMATIONS TEXT EXCLAMATIONS
→ {type: 'womRemark', color: {type: 'color', value: '@red', raw: null}, children: [{type: 'text', value: 'Замечание'}]}

←!!(крас)Текст красного цвета!!
↑ EXCLAMATIONS LPAREN CONST RPAREN TEXT EXCLAMATIONS
→ {type: 'womRemark', color: {type: 'color', value: '@red', raw: 'крас'}, children: [{type: 'text', value: 'Текст красного цвета'}]}

←!!(зел)Текст зеленого цвета!!
↑ EXCLAMATIONS LPAREN CONST RPAREN TEXT EXCLAMATIONS
→ {type: 'womRemark', color: {type: 'color', value: '@green', raw: 'зел'}, children: [{type: 'text', value: 'Текст зеленого цвета'}]}

←!!(син)Текст синего цвета!!
↑ EXCLAMATIONS LPAREN CONST RPAREN TEXT EXCLAMATIONS
→ {type: 'womRemark', color: {type: 'color', value: '@blue', raw: 'син'}, children: [{type: 'text', value: 'Текст синего цвета'}]}

←!!(grey)Текст серого цвета!!
↑ EXCLAMATIONS LPAREN CONST RPAREN TEXT EXCLAMATIONS
→ {type: 'womRemark', color: {type: 'color', value: '@gray', raw: 'grey'}, children: [{type: 'text', value: 'Текст серого цвета'}]}

←!!(yellow)Текст желтого цвета!!
↑ EXCLAMATIONS LPAREN CONST RPAREN TEXT EXCLAMATIONS
→ {type: 'womRemark', color: {type: 'color', value: '@yellow', raw: 'yellow'}, children: [{type: 'text', value: 'Текст желтого цвета'}]}

←!!Восклицание!!!
↑ EXCLAMATIONS TEXT EXCLAMATIONS
→ {type: 'womRemark', color: {type: 'color', value: '@red', raw: null}, children: [{type: 'text', value: 'Восклицание!'}]}

〉Смешение
←??Вопрошение++??++??
→ { type: 'root', children: [
→   { type: 'paragraph', children: [
→     { type: 'womQuestion', children: [
→       { type: 'text', value: 'Вопрошение' },
→       { type: 'womSmall', children: [
→         { type: 'text', value: '??' }]}]}]}]}

〉Множественные !!
←Привет!!!!!!!!!!!
→ [{type: 'text', value: 'Привет!!!!!!!!!!!'}]

〉Множественные ##
←Привет###########
→ [{type: 'text', value: 'Привет###########'}]

〉Множественные ??
←Привет???????????
→ [{type: 'text', value: 'Привет???????????'}]

〉Множественные **
←Привет***********
→ {type: 'text', value: 'Привет***********'}

〉Множественные ++
←Привет+++++++++++
→ [{type: 'text', value: 'Привет+++++++++++'}]

〉Множественные ^^
←Привет^^^^^^^^^^^
→ [{type: 'text', value: 'Привет^^^^^^^^^^^'}]

〉Множественные vv
←Приветvvvvvvvvvvv
→ [{type: 'text', value: 'Приветvvvvvvvvvvv'}]

〉Начальные множественные ***
←***Полужирный текст******
→ {type: 'strong', children: [{type: 'text', value: '*Полужирный текст****'}]}

〉Начальные множественные ///
←///Курсивный текст/////
→ {type: 'womItalic', children: [{type: 'text', value: '/Курсивный текст///'}]}

〉Начальные множественные ___
←___Подчеркнутый текст_____
→ {type: 'womUnderline', children: [{type: 'text', value: '_Подчеркнутый текст___'}]}

〉Начальные множественные ###
←###Моноширинный текст#####
→ {type: 'womMonospace', children: [{type: 'text', value: '#Моноширинный текст###'}]}

〉Начальные множественные +++
←+++Мелкий текст++++++
→ {type: 'womSmall', children: [{type: 'text', value: '+Мелкий текст++++'}]}

〉Начальные множественные ???
←???Вопрос????????
→ {type: 'womQuestion', children: [{type: 'text', value: '?Вопрос??????'}]}

〉Начальные множественные !!!
←!!!Замечание!!!!!
→ {type: 'womRemark', color: {type: 'color', value: '@red', raw: null}, children: [
→   {type: 'text', value: '!Замечание!!!'}]}

〉Начальные множественные !!! с цветом
←!!!(grey)Замечание!!!!!
→ [
→   {type: 'text', value: '!'},
→   {type: 'womRemark', color: {type: 'color', value: '@gray', raw: 'grey'}, children: [
→     {type: 'text', value: 'Замечание!!!'}
→   ]}]

〉Начальные множественные !!! с вложением и соседями
←!! !!(blue)Син!! !! !!(grey)Замечание!!!!! !!(green)Зел!! !!! !!(yellow)Жел!! !!!
→ [
→   {type: 'text', value: '!! '},
→   {type: 'womRemark', color: {type: 'color', value: '@blue', raw: 'blue'}, children: [
→     {type: 'text', value: 'Син'} ]},
→   {type: 'text', value: ' !! '},
→   {type: 'womRemark', color: {type: 'color', value: '@gray', raw: 'grey'}, children: [
→     {type: 'text', value: 'Замечание!!!'} ]},
→   {type: 'text', value: ' '},
→   {type: 'womRemark', color: {type: 'color', value: '@green', raw: 'green'}, children: [
→     {type: 'text', value: 'Зел'} ]},
→   {type: 'text', value: ' !!! '},
→   {type: 'womRemark', color: {type: 'color', value: '@yellow', raw: 'yellow'}, children: [
→     {type: 'text', value: 'Жел'} ]},
→   {type: 'text', value: ' !!!'},
→ ]

〉Последовательные !!
←Короче: !!(red)Каждый!! охотник !!(yellow)желает!!! !!(green)знать!!! где !!(син)сидит!!! фазан, !!(grey)Вася!!!
→ [{type: 'text', value: 'Короче: '},
→  {type: 'womRemark', color: {type: 'color', value: '@red', raw: 'red'}, children: [{type: 'text', value: 'Каждый'}]},
→  {type: 'text', value: ' охотник '},
→  {type: 'womRemark', color: {type: 'color', value: '@yellow', raw: 'yellow'}, children: [{type: 'text', value: 'желает!'}]},
→  {type: 'text', value: ' '},
→  {type: 'womRemark', color: {type: 'color', value: '@green', raw: 'green'}, children: [{type: 'text', value: 'знать!'}]},
→  {type: 'text', value: ' где '},
→  {type: 'womRemark', color: {type: 'color', value: '@blue', raw: 'син'}, children: [{type: 'text', value: 'сидит!'}]},
→  {type: 'text', value: ' фазан, '},
→  {type: 'womRemark', color: {type: 'color', value: '@gray', raw: 'grey'}, children: [{type: 'text', value: 'Вася!'}]},
→  ]

""**Жирный текст**"" → {type: 'womEscape', raw: '""**Жирный текст**""', value: '**Жирный текст**'}
~**Жирный_текст** → {type: 'womEscape', raw: '~**Жирный_текст**', value: '**Жирный_текст**'}

〉Верхний индекс
←E=mc^^2^^
↑ TEXT CARETS TEXT CARETS
→ {type: 'paragraph', children: [{type: 'text', value: 'E=mc'}, {type: 'womSuperscript', children: [{type: 'text', value: '2'}]}]}

〉Нижний индекс
←H vv2vv O
↑ TEXT VLETTERS TEXT VLETTERS TEXT
→ {type: 'paragraph', children: [{type: 'text', value: 'H '}, {type: 'womSubscript', children: [{type: 'text', value: '2'}]}, {type: 'text', value: ' O'}]}

〉Нижний индекс без пробелов
←H""""vv2vv""""O
↑ TEXT QUOTES QUOTES VLETTERS TEXT VLETTERS QUOTES QUOTES TEXT
→ {type: 'paragraph', children: [
→   {type: 'text', value: 'H'},
→   {type: 'womEscape', raw:'""""', value: ''},
→   {type: 'womSubscript', children: [{type: 'text', value: '2'}]},
→   {type: 'womEscape', raw:'""""', value: ''},
→   {type: 'text', value: 'O'}
→ ]}

〉Присвоение цвета
← #ff0000 или #F00
↑ COLOR TEXT COLOR
→ {type: 'paragraph', children: [
→   {type: 'text', value: ' '},
→   {type: 'color', raw: '#ff0000', value: 'ff0000'},
→   {type: 'text', value: ' или '},
→   {type: 'color', raw: '#F00', value: 'f00'}
→ ]}




## Разделители (break)

←---
↑ HYPHENS
→ {type: 'root', children: [{type: 'thematicBreak'}]}

←____
↑ LODASHES
→ {type: 'root', children: [{type: 'thematicBreak'}]}

〉Явный перевод строки
←тест---шмест
↑ TEXT HYPHENS TEXT
→ {type: 'paragraph', children: [{type: 'text', value: 'тест'}, {type: 'womBreak', raw: '---'}, {type: 'text', value: 'шмест'}]}

〉Однострочные переводы пачкой
←тест---шмест---гдест?---нигдест
↑ TEXT HYPHENS TEXT HYPHENS TEXT HYPHENS TEXT
→ {type: 'paragraph', children: [
→   {type: 'text', value: 'тест'},
→   {type: 'womBreak', raw: '---'},
→   {type: 'text', value: 'шмест'},
→   {type: 'womBreak', raw: '---'},
→   {type: 'text', value: 'гдест?'},
→   {type: 'womBreak', raw: '---'},
→   {type: 'text', value: 'нигдест'},
→ ]}

〉Переводы пачкой с зачеркнутым (feat strike)
←тест---шмест--зарезано--да---еще
↑ TEXT HYPHENS TEXT HYPHENS TEXT HYPHENS TEXT
→ {type: 'paragraph', children: [
→   {type: 'text', value: 'тест'},
→   {type: 'womBreak', raw: '---'},
→   {type: 'text', value: 'шмест'},
→   {type: 'womStrike', children: [
→     {type: 'text', value: 'зарезано'}
→   ]},
→   {type: 'text', value: 'да'},
→   {type: 'womBreak', raw: '---'},
→   {type: 'text', value: 'еще'},
→ ]}

〉Переводы со всех сторон
←---тест---шмест---квест---
→ [
→   {type: 'womBreak', raw: '---'},
→   {type: 'text', value: 'тест'},
→   {type: 'womBreak', raw: '---'},
→   {type: 'text', value: 'шмест'},
→   {type: 'womBreak', raw: '---'},
→   {type: 'text', value: 'квест'},
→   {type: 'womBreak', raw: '---'},
→ ]



## Форматтеры и другое на базе процентиков (formatter, markdown)

〉Выравнивание
←%%(wacko wrapper=text align=center) текст по центру %%
↑ PERCENTS LPAREN CONST WS CONST EQUAL CONST WS CONST EQUAL CONST RPAREN TEXT PERCENTS
→ {type: 'root', children: [{type: 'womMarkdown', format: 'wacko',
→   attributes: {wrapper: 'text', align: 'center'},
→   children: [{type: 'paragraph', children: [{type: 'text', value: ' текст по центру '}]}]
→ }]}

〉Инлайн вставки форматтера
←Вообще-то для %%моноширинного%% текста %%есть другая%% конструкция.
→ {type: 'paragraph', children: [
→   {type: 'text', value: 'Вообще-то для '},
→   {type: 'womFormatter', value: 'моноширинного'},
→   {type: 'text', value: ' текста '},
→   {type: 'womFormatter', value: 'есть другая'},
→   {type: 'text', value: ' конструкция.'},
→ ]}

〉Выравнивание
←%%(wacko wrapper=text align=center) текст по центру %%
↑ PERCENTS LPAREN CONST WS CONST EQUAL CONST WS CONST EQUAL CONST RPAREN TEXT PERCENTS
→ {type: 'root', children: [{type: 'womMarkdown', format: 'wacko',
→   attributes: {wrapper: 'text', align: 'center'},
→   children: [{type: 'paragraph', children: [{type: 'text', value: ' текст по центру '}]}]
→ }]}

〉Инлайн вставки форматтера с выравниванием
←So %%kusok%% then %%(wacko wrapper=right) wacko-shmako %% and %%this one%% at the end
→ [
→   {type: 'text', value: 'So '},
→   {type: 'womFormatter', value: 'kusok'},
→   {type: 'text', value: ' then '},
→   {type: 'womMarkdown', format: 'wacko', attributes: {wrapper: 'right'}, children: [{type: 'text', value: ' wacko-shmako '}]},
→   {type: 'text', value: ' and '},
→   {type: 'womFormatter', value: 'this one'},
→   {type: 'text', value: ' at the end'}
→ ]

〉Форматтер битым куском
←Начинаем %%(js) и не заканчиваем
→ {type: 'text', value: 'Начинаем %%(js) и не заканчиваем'}

〉Жирный форматтер
←Жир **%%code%%** ?
→ [{type: 'text', value: 'Жир '},
→  {type: 'strong', children: [{type: 'womFormatter', value: 'code'}]},
→  {type: 'text', value: ' ?'},
→ ]

〉Форматтер с множественными %%
←%%
←Hello
←%%%%%%%%%%%%%%%
←World
←%%%%%%%%%%%%%%%
←%%
→ {type: 'root', children: [{type: 'womFormatter', value: '\nHello\n%%%%%%%%%%%%%%%\nWorld\n%%%%%%%%%%%%%%%\n'}]}

〉css formatter wrapper
←%%(css nomark wrapper=box align=left width=270 border=0 nomark)
←.d { font-size:70% }
←%%
→ {type: 'root', children: [{type: 'womFormatter', format: 'css', attributes: {nomark: null, wrapper: 'box', align: 'left', width: '270', border: '0'}, value: '\n.d { font-size:70% }\n'}]}

〉javascript formatter
←%%(javascript nomark wrapper=box border="5px dashed red")
←alert("hooray!");
←%%
→ {type: 'root', children: [{type: 'womFormatter', format: 'javascript', attributes: {nomark: null, wrapper: 'box', border: '5px dashed red'}, value: '\nalert("hooray!");\n'}]}

〉css formatter
←%%(css nomark wrapper=shade)
←.d2 { font-size:70% }
←%%
→ {type: 'root', children: [
→   {type: 'womFormatter', format: 'css',
→     attributes: {nomark: null, wrapper: 'shade'},
→     value: '\n.d2 { font-size:70% }\n'}]}

〉wacko text aligned
←%%(wacko wrapper=text align=center) текст по центру %%
→ {type: 'root', children: [
→   {type: 'womMarkdown', format: 'wacko',
→     attributes: {wrapper: 'text', align: 'center'},
→     children: [{type: 'paragraph', children: [{type: 'text', value: ' текст по центру '}]}]
→   }]}

〉wacko page wrapper
←%%(wacko wrapper=page wrapper_width=200) этот текст не может быть шире двухсот пикселей%%
→ {type: 'root', children: [
→   {type: 'womMarkdown', format: 'wacko',
→     attributes: {wrapper: 'page', wrapper_width: '200'},
→     children: [
→       {type: 'paragraph', children: [
→         {type: 'text', value: ' этот текст не может быть шире двухсот пикселей'}
→       ]}
→     ]
→   }]}

〉markdown page wrapper should parse inner markdown
←%%(markdown) `code` and **bold** %%
→ {type: 'root', children: [
→   {type: 'womMarkdown', format: 'markdown',
→     attributes: {},
→     children: [
→       {type: 'paragraph', children: [
→         {type: 'text', value: ' '},
→         {type: 'inlineCode', value: 'code'},
→         {type: 'text', value: ' and '},
→         {type: 'strong', children: [{type: 'text', value: 'bold'}]},
→         {type: 'text', value: ' '},
→       ]}
→     ]
→   }]}

〉Пример 2: nomark
←%%(python nomark)
←@requires_authorization
←def somefunc(param1, param2):
←    r'''A docstring'''
←%%
→ { type: 'root', children: [
→   { type: 'womFormatter',
→     format: 'python',
→     attributes: {nomark: null},
→     value: `\n@requires_authorization\ndef somefunc(param1, param2):\n    r'''A docstring'''\n`
→   } ] }


〉Пример 3: язык с заглавной буквы
←%%(Python)
←fronm django.contrib.auth.models import Group, Permission
←different_users = Group(name='Different Users')
←different_users.save()
←%% 
→ { type: 'root', children: [
→   { type: 'womFormatter',
→     format: 'Python',
→     attributes: {},
→     value: `\nfronm django.contrib.auth.models import Group, Permission\ndifferent_users = Group(name='Different Users')\ndifferent_users.save()\n`
→   } ] }

〉Пример 4: небуквенный символ в языке
←%%(c++)
←fronm django.contrib.auth.models import Group, Permission
←different_users = Group(name='Different Users')
←different_users.save()
←%% 
→ { type: 'root', children: [
→   { type: 'womFormatter',
→     format: 'c++',
→     attributes: {},
→     value: `\nfronm django.contrib.auth.models import Group, Permission\ndifferent_users = Group(name='Different Users')\ndifferent_users.save()\n`
→   } ] }

〉Пример 5: язык из одного символа
←%%(c)
←fronm django.contrib.auth.models import Group, Permission
←different_users = Group(name='Different Users')
←different_users.save()
←%% 
→ { type: 'root', children: [
→   { type: 'womFormatter',
→     format: 'c',
→     attributes: {},
→     value: `\nfronm django.contrib.auth.models import Group, Permission\ndifferent_users = Group(name='Different Users')\ndifferent_users.save()\n`
→   } ] }

〉Пример 6: язык из цифр
←%%(123)
←value
←%% 
→ { type: 'root', children: [
→   { type: 'womFormatter',
→     format: '123',
→     attributes: {},
→     value: `\nvalue\n`
→   } ] }

〉Cut с питон функцией
←<{код функции
←%%(js)
←function is_pretty_num(n) { return 1; }
←%%
←}>
→ { type: 'root', children: [ { type: 'womCut',
→   title: [{type: 'paragraph', children: [{type: 'text', value: 'код функции'}]}],
→   children: [
→     { type: 'womFormatter',
→       format: 'js',
→       attributes: {},
→       value: `\nfunction is_pretty_num(n) { return 1; }\n`
→     } ] } ] }

〉math outline 1
←%%(math outline)\int\limits_{-\infty}^{+\infty} e^{-x^2/2} \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} %%
→ {type: 'root', children: [
→   {type: 'womFormatter', format: 'math', attributes: {outline: null},
→     value: '\\int\\limits_{-\\infty}^{+\\infty} e^{-x^2/2} \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a} '}
→ ]}

〉Греческие буквы
←%%(math outline)
←\alpha, \beta, \gamma, \lambda, \mu, \omega, \Gamma, \Lambda, \Omega
←%%
→ {type: 'root', children: [
→   {type: 'womFormatter', format: 'math', attributes: {outline: null},
→     value: '\n\\alpha, \\beta, \\gamma, \\lambda, \\mu, \\omega, \\Gamma, \\Lambda, \\Omega\n'}
→ ]}

〉CSV formatter
←%%(csv delimiter=; head='1')
←Параметр;Значение;Описание;Ага!
←Пучеглазость; 0,5; Показывает степень удивления
←Красноносость; средняя; Показывает температуру за дверью;ой
←%%
→ {type: 'root', children: [{type: 'womFormatter', format: 'csv', attributes: {delimiter: ';', head: '1'},
→   value: '\nПараметр;Значение;Описание;Ага!\nПучеглазость; 0,5; Показывает степень удивления\nКрасноносость; средняя; Показывает температуру за дверью;ой\n'}]}



## Цитирования (blockquote)

〉Цитирование текста с переносами
←<[ Цитирование текста ,
←длинного,
←с переносами
← ]>
↑ LQUOTING TEXT RQUOTING
→ {type: 'root', children: [{type: 'womBlockquote', children: [{type: 'paragraph', children: [{type: 'text', value: ' Цитирование текста ,\nдлинного,\nс переносами\n '}]}]}]}

〉Инлайн цитирование текста
←Можно даже прямо внутри <[Процитировать Ницше]>. Да-да.
→ [{type: 'text', value: 'Можно даже прямо внутри '},
→  {type: 'womBlockquote', children: [{type: 'text', value: 'Процитировать Ницше'}]},
→  {type: 'text', value: '. Да-да.'},
→ ]

〉Вложенное цитирование текста
←<[ Цитирование верхнего уровня ,
←  <[ А внутри еще длинного,
←с переносами ]>
← И низвоуровневое цитирование
← ]>
→ {type: 'root', children: [{type: 'womBlockquote', children: [
→   {type: 'paragraph', children: [{type: 'text', value: ' Цитирование верхнего уровня ,' /*'\n  '*/}]},
→   {type: 'womBlockquote', children: [{type: 'paragraph', children: [{type: 'text', value: ' А внутри еще длинного,\nс переносами '}]}]},
→   {type: 'paragraph', children: [{type: 'text', value: /*'\n'*/ ' И низвоуровневое цитирование\n '}]}
→ ]}]}

〉Однострочное цитирование
←>> Однострочное цитирование
←>
←> Да, это оно
←
←А это обычный текст
→ {type: 'root', children: [
→   {type: 'blockquote', children: [
→     {type: 'blockquote', children: [
→       {type: 'paragraph', children: [{type: 'text', value: 'Однострочное цитирование'}]}
→     ]},
→     {type: 'paragraph', children: [{type: 'text', value: 'Да, это оно'}]}
→   ]},
→   {type: 'paragraph', children: [{type: 'text', value: 'А это обычный текст'}]}
→ ]}



## Термины (definition)

〉Термин
←(?Термин Вот тут всплыло развернутое определение термина?)
↑ LDEFINITION TEXT WS TEXT RDEFINITION
→ {type: 'womDefinition', title: 'Термин', equals: false, value: 'Вот тут всплыло развернутое определение термина'}

〉Термин с пробелами
←(?Термин с пробелами==И тут тоже всплыло развернутое определение термина с пробелами?)
↑ LDEFINITION TEXT EQUALS TEXT RDEFINITION
→ {type: 'womDefinition', title: 'Термин с пробелами', equals: true, value: 'И тут тоже всплыло развернутое определение термина с пробелами'}

〉Термины подряд разные
←(?Термин Описалово?)(?Еще==Еще описалово?)
↑ LDEFINITION TEXT WS TEXT RDEFINITION
→ [
→   {type: 'womDefinition', title: 'Термин', equals: false, value: 'Описалово'},
→   {type: 'womDefinition', title: 'Еще', equals: true, value: 'Еще описалово'}
→ ]

〉Термины в тексте
←Текст и тут (?Термин Описалово?), а потом еще текст и (?Еще термин==Еще описалово?). И текст в конце
↑ LDEFINITION TEXT WS TEXT RDEFINITION
→ {type: 'paragraph', children: [
→   {type: 'text', value: 'Текст и тут '},
→   {type: 'womDefinition', title: 'Термин', equals: false, value: 'Описалово'},
→   {type: 'text', value: ', а потом еще текст и '},
→   {type: 'womDefinition', title: 'Еще термин', equals: true, value: 'Еще описалово'},
→   {type: 'text', value: '. И текст в конце'},
→ ]}



## Врезки (cut)

〉Врезка (кат)
←<{ Прочитать !!red!! целиком
←Этот текст можно увидеть, кликнув по ссылке "прочитать целиком".
←}>
↑ LCUT TEXT RCUT
→ {type: 'root', children: [{type: 'womCut',
→   title: [{type: 'paragraph', children: [
→     {type: 'text', value: ' Прочитать '},
→     {type: 'womRemark', color: {type: 'color', value: '@red', raw: null}, children: [{type: 'text', value: 'red'}]},
→     {type: 'text', value: ' целиком'}
→   ]}],
→   children: [{type: 'paragraph', children: [{type: 'text', value: 'Этот текст можно увидеть, кликнув по ссылке "прочитать целиком".'}]}]
→ }]}

〉Однострочная врезка
←<{ One-line quote }>
→ {type: 'root', children: [{type: 'womCut', title: [{type: 'paragraph', children: [{type: 'text', value: ' One-line quote '}]}], children: []}]}

〉Пустой кат
←<{пустой кат
←}>
→ {type: 'root', children: [
→   {type: 'womCut',
→     title: [{type: 'paragraph', children: [{type: 'text', value: 'пустой кат'}]}],
→     children: []
→   }]}

〉Кат без заголовка
←<{
←}>
→ {type: 'root', children: [{type: 'womCut', title: [], children: []}]}

〉Незакрытый кат
←<{
→ {type: 'root', children: [{type: 'paragraph', children: [{type: 'text', value: '<{'}]}]}




## html

〉Вывод HTML как есть
←Hello: <# <input type="text"> #>, — done.
↑ LHTML TEXT RHTML
→ {type: 'paragraph', children: [
→   {type: 'text', value: 'Hello: '},
→   {type: 'womHtml', value: ' <input type="text"> '},
→   {type: 'text', value: ', — done.'},
→ ]}

〉Inline HTML как препятствие
←ABCDEFG: <# <span style='color:gray'> #>-0 (GRAY)<# </span> #>
←++""[""<# <span style='color:auto'> #>v1<# </span> #>  <# <span style='color:auto'> #>Δ=0<# </span> #>]++
→ {type: 'paragraph', children: [
→   {type: 'text', value: 'ABCDEFG: '},
→   {type: 'womHtml', value: " <span style='color:gray'> "},
→   {type: 'text', value: '-0 (GRAY)'},
→   {type: 'womHtml', value: " </span> "},
→   {type: 'text', value: '\n'},
→   {type: 'womSmall', children: [
→     {type: 'womEscape', raw: '""[""', value: '['},
→     {type: 'womHtml', value: " <span style='color:auto'> "},
→     {type: 'text', value: 'v1'},
→     {type: 'womHtml', value: " </span> "},
→     {type: 'text', value: '  '},
→     {type: 'womHtml', value: " <span style='color:auto'> "},
→     {type: 'text', value: 'Δ=0'},
→     {type: 'womHtml', value: " </span> "},
→     {type: 'text', value: ']'},
→   ]},
→ ]}

〉HTML препятствия с # внутри
←<#
←<div style='color:#777'></div>
←#>
←<#
←<div style='color:#777'></div>
←#>
→ {type: 'root', children: [
→   {type: 'womHtml', value: "\n<div style='color:#777'></div>\n"},
→   {type: 'womHtml', value: "\n<div style='color:#777'></div>\n"},
→ ]}

〉Двойные HTML препятствия с # внутри
←<#
←<div style='color:#777'></div>
←<div style='color:#777'></div>
←#>
→ {type: 'root', children: [
→   {type: 'womHtml', value: "\n<div style='color:#777'></div>\n<div style='color:#777'></div>\n"},
→ ]}

〉Таблица из html (feat html)
←<# <table border=1> <tr><td>1</td><td>2</td></tr> <tr><td>3</td><td>4</td></tr> </table> #>
→ {type: 'root', children: [{type: 'womHtml', value: ' <table border=1> <tr><td>1</td><td>2</td></tr> <tr><td>3</td><td>4</td></tr> </table> '}]}



## Заголовки (heading)

〉Один знак равно это не заголовок
←= Не заголовок
→ {type: 'text', value: '= Не заголовок'}

〉Большой заголовок
←== Большой заголовок
→ {type: 'root', children: [{type: 'womHeading', depth: 1, anchor: null, expandable: false, children: [{type: 'text', value: 'Большой заголовок'}]}]}

〉Большой заголовок
←==+ Большой раскрывающийся заголовок
→ {type: 'root', children: [{type: 'womHeading', depth: 1, anchor: null, expandable: true, children: [{type: 'text', value: 'Большой раскрывающийся заголовок'}]}]}

〉Большой заголовок с якорем
←==(intro) Введение
→ {type: 'root', children: [{type: 'womHeading', depth: 1, anchor: 'intro', expandable: false, children: [{type: 'text', value: 'Введение'}]}]}

〉Большой раскрывающийся заголовок с якорем
←==+(intro) Введение
→ {type: 'root', children: [{type: 'womHeading', depth: 1, anchor: 'intro', expandable: true, children: [{type: 'text', value: 'Введение'}]}]}

〉Раскрывающийся заголовок после якоря
←==(intro)+ Введение
→ {type: 'root', children: [{type: 'womHeading', depth: 1, anchor: 'intro', expandable: true, children: [{type: 'text', value: 'Введение'}]}]}

〉Большой заголовок без якоря, но со скобками в начале
←==() Введение
→ {type: 'root', children: [{type: 'womHeading', depth: 1, anchor: '', expandable: false, children: [{type: 'text', value: 'Введение'}]}]}

〉Заголовок поменьше
←=== Заголовок поменьше
→ {type: 'root', children: [{type: 'womHeading', depth: 2, anchor: null, expandable: false, children: [{type: 'text', value: 'Заголовок поменьше'}]}]}

〉Средний заголовок
←==== Средний заголовок
→ {type: 'root', children: [{type: 'womHeading', depth: 3, anchor: null, expandable: false, children: [{type: 'text', value: 'Средний заголовок'}]}]}

〉Маленький заголовок
←===== Маленький заголовок
→ {type: 'root', children: [{type: 'womHeading', depth: 4, anchor: null, expandable: false, children: [{type: 'text', value: 'Маленький заголовок'}]}]}

〉Ну совсем маленький заголовок
←====== Ну совсем маленький заголовок
→ {type: 'root', children: [{type: 'womHeading', depth: 5, anchor: null, expandable: false, children: [{type: 'text', value: 'Ну совсем маленький заголовок'}]}]}

〉Меньше некуда заголовок
←======= Меньше некуда заголовок
→ {type: 'root', children: [{type: 'womHeading', depth: 6, anchor: null, expandable: false, children: [{type: 'text', value: 'Меньше некуда заголовок'}]}]}

〉Меньше некуда заголовок с равно на конце
←======= Меньше некуда заголовок ====================
→ {type: 'root', children: [{type: 'womHeading', depth: 6, anchor: null, expandable: false, children: [{type: 'text', value: 'Меньше некуда заголовок'}]}]}

〉Меньше некуда заголовок с раскрывашкой
←=======+ Меньше некуда раскрывающийся заголовок
→ {type: 'root', children: [{type: 'womHeading', depth: 6, anchor: null, expandable: true, children: [{type: 'text', value: 'Меньше некуда раскрывающийся заголовок'}]}]}

〉Много знаков равно это тоже не заголовок
←======== Не заголовок
→ {type: 'text', value: '======== Не заголовок'}

〉Заголовок с форматированием (feat formatter)
←== Библиотека %%глазировка%%
→ {type: 'root', children: [
→   {type: 'womHeading', depth: 1, anchor: null, expandable: false, children: [
→     {type: 'text', value: 'Библиотека '},
→     {type: 'womFormatter', value: 'глазировка'}
→   ]}]}

〉Заголовок со ссылкой
←===((https://ya.ru Yandex))
→{"type":"root","children":[{"type":"womHeading","depth":2,"anchor":null,"expandable":false,"children":[{"type":"womLink","url":"https://ya.ru","brackets":false,"children":[{"type":"text","value":"Yandex"}]}]}]}


## Сноски (footnote, reference, definition)

〉Сноски
←Текст, потом сноска[[*]] и вторая[[**]]
→ {type: 'paragraph', children: [{type: 'text', value: 'Текст, потом сноска'}, {type: 'womFootnoteReference', identifier: '', "label": null}, {type: 'text', value: ' и вторая'}, {type: 'womFootnoteReference', identifier: '*', "label": null}]}

〉Еще сноски
←Текст, потом цифровая сноска[[*1]] и вторая[[*2]]
→ {type: 'paragraph', children: [{type: 'text', value: 'Текст, потом цифровая сноска'}, {type: 'womFootnoteReference', identifier: '1', "label": null}, {type: 'text', value: ' и вторая'}, {type: 'womFootnoteReference', identifier: '2', "label": null}]}

〉Это [[*)) не сноска
←Это [[*)) не сноска
→ {type: 'paragraph', children: [{type: 'text', value: 'Это [[*)) не сноска'}]}

〉Сноски в круглых скобках
←Текст, потом сноска((*)) и цифровая сноска((*1))
→ {type: 'paragraph', children: [{type: 'text', value: 'Текст, потом сноска'}, {type: 'womFootnoteReference', identifier: '', "label": null}, {type: 'text', value: ' и цифровая сноска'}, {type: 'womFootnoteReference', identifier: '1', "label": null}]}

〉Cноска с ярлыком
←[[*id label]] Cноска с ярлыком
→ { type: 'paragraph', children: [
→   {type: 'womFootnoteReference', identifier: 'id', "label": "label"},
→   {type: 'text', value: ' Cноска с ярлыком'}
→ ]}

〉Cноска с ярлыком c пробелами
←[[*id label with spaces]] Cноска с ярлыком c пробелами
→ { type: 'paragraph', children: [
→   {type: 'womFootnoteReference', identifier: 'id', "label": "label with spaces"},
→   {type: 'text', value: ' Cноска с ярлыком c пробелами'}
→ ]}

〉Расшифровка первой сноски
←[[#*]] Расшифровка первой сноски
→ { type: 'paragraph', children: [
→   {type: 'womFootnoteDefinition', identifier: '*', "label": null},
→   {type: 'text', value: ' Расшифровка первой сноски'}
→ ]}

〉Расшифровка второй сноски
←[[#**]] Расшифровка второй сноски
→ { type: 'paragraph', children: [
→   {type: 'womFootnoteDefinition', identifier: '**', "label": null},
→   {type: 'text', value: ' Расшифровка второй сноски'}
→ ]}

〉Расшифровка цифровой сноски
←[[#1]] Расшифровка цифровой сноски
→ { type: 'paragraph', children: [
→   {type: 'womFootnoteDefinition', identifier: '1', "label": null},
→   {type: 'text', value: ' Расшифровка цифровой сноски'}
→ ]}

〉Расшифровка сноски в круглых скобках
←((#1)) Расшифровка сноски в круглых скобках
→ { type: 'paragraph', children: [
→   {type: 'womFootnoteDefinition', identifier: '1', "label": null},
→   {type: 'text', value: ' Расшифровка сноски в круглых скобках'}
→ ]}

〉Расшифровка сноски с ярлыком
←[[#id label]] Расшифровка сноски с ярлыком
→ { type: 'paragraph', children: [
→   {type: 'womFootnoteDefinition', identifier: 'id', "label": "label"},
→   {type: 'text', value: ' Расшифровка сноски с ярлыком'}
→ ]}

〉Расшифровка сноски без id
←[[#]] Расшифровка сноски без id
→ { type: 'paragraph', children: [
→   {type: 'womFootnoteDefinition', identifier: '', "label": null},
→   {type: 'text', value: ' Расшифровка сноски без id'}
→ ]}

〉Расшифровка сноски без id c ярлыком
←[[# lab el]] Расшифровка сноски без id c ярлыком
→ { type: 'paragraph', children: [
→   {type: 'womFootnoteDefinition', identifier: '', "label": "lab el"},
→   {type: 'text', value: ' Расшифровка сноски без id c ярлыком'}
→ ]}



## Списки (list, womList)

〉¡ Списки отступами
←Списки:
←  Отступ
←    Двойной отступ
→ {type: 'list', ordered: false, children: [{type: 'item', children: [
→   {type: 'text', value: 'Отступ'},
→   {type: 'list', children: [{type: 'item', children: [{type: 'text', value: 'Двойной отступ'}]}]}
→ ]}]}

〉Ненумерованный пустой список
←*
←*
←*
←*
→ {type: 'root', children: [{type: 'list', ordered: false, start: null, loose: false, children: [
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: []},
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: []},
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: []},
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: []},
→ ]}]}

〉Одиночные минусы это не пустой список
← -
←
→ {type: 'text', value: ' -'}

〉Одиночные звезды это не пустой список
← *
←
→ {type: 'text', value: ' *'}
//*

〉Одиночные плюсы это не пустой список
← +
←
→ {type: 'text', value: ' +'}

〉Ненумерованный список через +
←+   One:
←    +   Nested one;
←    +   Nested two:
←        +   Nested three.
←+   Two;
←+   Three.
→ {type: 'root', children: [
→   {type: 'list', ordered: false, start: null, loose: false, children: [
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [
→       {type: 'paragraph', children: [{type: 'text', value: 'One:'}]},
→       {type: 'list', ordered: false, start: null, loose: false, children: [
→         {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'Nested one;'}]}]},
→         {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [
→           {type: 'paragraph', children: [{type: 'text', value: 'Nested two:'}]},
→           {type: 'list', ordered: false, start: null, loose: false, children: [
→             {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'Nested three.'}]}]}
→           ]}
→         ]}
→       ]}
→     ]},
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'Two;'}]}]},
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'Three.'}]}]},
→ ]}]}

〉Ненумерованный список через -
←-   One:
←    -   Nested one;
←    -   Nested two:
←        -   Nested three.
←-   Two;
←-   Three.
→ {type: 'root', children: [
→   {type: 'list', ordered: false, start: null, loose: false, children: [
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [
→       {type: 'paragraph', children: [{type: 'text', value: 'One:'}]},
→       {type: 'list', ordered: false, start: null, loose: false, children: [
→         {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'Nested one;'}]}]},
→         {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [
→           {type: 'paragraph', children: [{type: 'text', value: 'Nested two:'}]},
→           {type: 'list', ordered: false, start: null, loose: false, children: [
→             {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'Nested three.'}]}]}
→           ]}
→         ]}
→       ]}
→     ]},
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'Two;'}]}]},
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'Three.'}]}]},
→ ]}]}

〉Ненумерованный список через *
←* One:
←    * Nested one;
←    * Nested two:
←        * Nested three.
←* Two;
←* Three.
→ {type: 'root', children: [
→   {type: 'list', ordered: false, start: null, loose: false, children: [
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [
→       {type: 'paragraph', children: [{type: 'text', value: 'One:'}]},
→       {type: 'list', ordered: false, start: null, loose: false, children: [
→         {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'Nested one;'}]}]},
→         {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [
→           {type: 'paragraph', children: [{type: 'text', value: 'Nested two:'}]},
→           {type: 'list', ordered: false, start: null, loose: false, children: [
→             {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'Nested three.'}]}]}
→           ]}
→         ]}
→       ]}
→     ]},
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'Two;'}]}]},
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'Three.'}]}]},
→ ]}]}

〉Нумерованный пустой список
←1.
←2.
←3.
←4.
→ {type: 'root', children: [{type: 'list', ordered: true, styleType: 'decimal', start: 1, loose: false, children: [
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: []},
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: []},
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: []},
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: []},
→ ]}]}

〉Нумерованный список с инкрементом
←2. foo;
←3. bar;
←4. baz.
→ {type: 'root', children: [{type: 'list', ordered: true, styleType: 'decimal', start: 2, loose: false, children: [
→   {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'foo;'}]}]},
→   {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'bar;'}]}]},
→   {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'baz.'}]}]}
→ ]}]}

〉Нумерованный список без инкремента
←2. foo;
←2. bar;
←2. baz.
→ {type: 'root', children: [{type: 'list', ordered: true, styleType: 'decimal', start: 2, loose: false, children: [
→   {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'foo;'}]}]},
→   {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'bar;'}]}]},
→   {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'baz.'}]}]}
→ ]}]}

〉Нумерованный список 123
←1. нумерованный список
←1. нумерованный список-2
←3. нумерованный список-3
←999. нумерованный список-4
→ {type: 'root', children: [{type: 'list', ordered: true, styleType: 'decimal', start: 1, loose: false, children: [
→   {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'нумерованный список'}]}]},
→   {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'нумерованный список-2'}]}]},
→   {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'нумерованный список-3'}]}]},
→   {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'нумерованный список-4'}]}]},
→ ]}]}

〉Нумерованный список 123 начиная c 5
←5. нумерованный список
←1. нумерованный список-2
←1. нумерованный список-3
←1. нумерованный список-4
→ {type: 'root', children: [{type: 'list', ordered: true, styleType: 'decimal', start: 5, loose: false, children: [
→   {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'нумерованный список'}]}]},
→   {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'нумерованный список-2'}]}]},
→   {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'нумерованный список-3'}]}]},
→   {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'нумерованный список-4'}]}]},
→ ]}]}

〉Нумерованный список ABC
←A. Верхний регистр
←A. Верхний регистр-2
→ { type: 'root', children: [{type: 'list', ordered: true, styleType: 'upper-alpha', start: 1, loose: false, children: [
→   {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'Верхний регистр'}]}]},
→   {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'Верхний регистр-2'}]}]},
→ ]}]}

〉Нумерованный список ABC начиная c D
←D. Нижний регистр
←D. Нижний регистр-2
→ { type: 'root', children: [{type: 'list', ordered: true, styleType: 'upper-alpha', start: 4, loose: false, children: [
→   {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'Нижний регистр'}]}]},
→   {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'Нижний регистр-2'}]}]},
→ ]}]}

〉Нумерованный список abc
←a. Нижний регистр
←a. Нижний регистр-2
→ { type: 'root', children: [{type: 'list', ordered: true, styleType: 'lower-alpha', start: 1, loose: false, children: [
→   {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'Нижний регистр'}]}]},
→   {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'Нижний регистр-2'}]}]},
→ ]}]}

〉Нумерованный список abc начиная c w
←w. Нижний регистр
←a. Нижний регистр-2
→ { type: 'root', children: [{type: 'list', ordered: true, styleType: 'lower-alpha', start: 23, loose: false, children: [
→   {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'Нижний регистр'}]}]},
→   {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'Нижний регистр-2'}]}]},
→ ]}]}

〉Нумерованный список IVX
←I. Римские цифры
←I. Римские цифры-2
→ { type: 'root', children: [{type: 'list', ordered: true, styleType: 'upper-roman', start: 1, loose: false, children: [
→   {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'Римские цифры'}]}]},
→   {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'Римские цифры-2'}]}]},
→ ]}]}

〉Нумерованный список ivx
←i. Римские цифры
←i. Римские цифры-2
→ { type: 'root', children: [{type: 'list', ordered: true, styleType: 'lower-roman', start: 1, loose: false, children: [
→   {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'Римские цифры'}]}]},
→   {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'Римские цифры-2'}]}]},
→ ]}]}

〉Нумерованный смешанный список
←1. список-1
←1) список-2
←a. список-3
←a) список-4
←i) список-5
←i. список-6
→ { type: 'root', children: [
→   {type: 'list', ordered: true, styleType: 'decimal', start: 1, loose: false, children: [
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'список-1'}]}]}]},
→   {type: 'list', ordered: true, styleType: 'decimal', start: 1, loose: false, children: [
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'список-2'}]}]}]},
→   {type: 'list', ordered: true, styleType: 'lower-alpha', start: 1, loose: false, children: [
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'список-3'}]}]}]},
→   {type: 'list', ordered: true, styleType: 'lower-alpha', start: 1, loose: false, children: [
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'список-4'}]}]},
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'список-5'}]}]}]},
→   {type: 'list', ordered: true, styleType: 'lower-roman', start: 1, loose: false, children: [
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'список-6'}]}]}]},
→ ]}

〉 Cписок прерывается разделителем
←1. список
←---
→ {type: 'root', children: [
→   {type: 'list', ordered: true, styleType: 'decimal', start: 1, loose: false, children: [
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [
→       {type: 'paragraph', children: [
→         {type: 'text', value: 'список'}
→       ]}]}
→   ]},
→   {type: 'thematicBreak'}
→ ]}

〉 Cписок прерывается кодом
←1. foo
←```js
←code();
←```
→ {type: 'root', children: [
→   {type: 'list', ordered: true, styleType: 'decimal', start: 1, loose: false, children: [
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [
→       {type: 'paragraph', children: [
→         {type: 'text', value: 'foo'}
→       ]}]}
→   ]},
→   {type: 'code', lang: 'js', value: 'code();'}
→ ]}

〉Cписок прерывается MD заголовком (feat heading)
←1. список
←## Заголовок
→ {type: 'root', children: [
→   {type: 'list', ordered: true, styleType: 'decimal', start: 1, loose: false, children: [
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [
→       {type: 'paragraph', children: [
→         {type: 'text', value: 'список'}
→       ]}]}
→   ]},
→   {type: 'heading', depth: 2, children: [{type: 'text', value: 'Заголовок'}]}
→ ]}

〉Cписок прерывается WOM заголовком (feat heading)
←1. список
←==Заголовок
→ {type: 'root', children: [
→   {type: 'list', ordered: true, styleType: 'decimal', start: 1, loose: false, children: [
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [
→       {type: 'paragraph', children: [
→         {type: 'text', value: 'список'}
→       ]}]}
→   ]},
→   {type: 'womHeading', depth: 1, anchor: null, expandable: false, children: [{type: 'text', value: 'Заголовок'}]}
→ ]}

〉Cписок с инлайн форматтером (feat formatter)
←1. список %%code%%
←1. text %%code code code
←code code code code code
←code code code code code%% text
←1. список
←%%code%%
→ {type: 'root', children: [
→   {type: 'list', ordered: true, styleType: 'decimal', start: 1, loose: false, children: [
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [
→       {type: 'paragraph', children: [
→         {type: 'text', value: 'список '},
→         {type: 'womFormatter', value: 'code'}
→       ]}]},
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [
→       {type: 'paragraph', children: [
→         {type: 'text', value: 'text '},
→         {type: 'womFormatter', value: 'code code code\ncode code code code code\ncode code code code code'},
→         {type: 'text', value: ' text'},
→       ]}]},
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [
→       {type: 'paragraph', children: [{type: 'text', value: 'список'}]},
→       {type: 'womFormatter', value: 'code'}
→     ]}
→   ]}
→ ]}

〉Cписок c markdown форматтером (feat formatter)
←1. список
←%%(markdown)
←   - еще список
←   - еще список
←%%
→ {type: 'root', children: [
→   {type: 'list', ordered: true, styleType: 'decimal', start: 1, loose: false, children: [
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [
→       {type: 'paragraph', children: [{type: 'text', value: 'список'}]},
→       {type: 'womMarkdown', format: 'markdown',
→         attributes: {},
→         children: [
→           {type: 'list', ordered: false, start: null, loose: false, children: [
→             {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [
→               {type: 'paragraph', children: [
→                 {type: 'text', value: 'еще список'}
→               ]}]},
→             {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [
→               {type: 'paragraph', children: [
→                 {type: 'text', value: 'еще список'}
→               ]}]}
→           ]}
→         ]
→       }
→     ]}
→   ]}
→ ]}

〉Cписок c markdown форматтером (feat formatter, markdown)
←1. список
←   %%(markdown)
←   - еще список
←   - еще список
←   %%
→ {type: 'root', children: [
→   {type: 'list', ordered: true, styleType: 'decimal', start: 1, loose: false, children: [
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [
→       {type: 'paragraph', children: [{type: 'text', value: 'список'}]},
→       {type: 'womMarkdown', format: 'markdown',
→         attributes: {},
→         children: [
→           {type: 'list', ordered: false, start: null, loose: false, children: [
→             {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [
→               {type: 'paragraph', children: [
→                 {type: 'text', value: 'еще список'}
→               ]}]},
→             {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [
→               {type: 'paragraph', children: [
→                 {type: 'text', value: 'еще список'}
→               ]}]}
→           ]}
→         ]
→       }
→     ]}
→   ]}
→ ]}

〉Cписок c markdown форматтером (feat formatter, markdown)
←1. %%(markdown)
←   - еще список
←   - еще список
←%%
→ {type: 'root', children: [
→   {type: 'list', ordered: true, styleType: 'decimal', start: 1, loose: false, children: [
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [
→       {type: 'womMarkdown', format: 'markdown',
→         attributes: {},
→         children: [
→           {type: 'list', ordered: false, start: null, loose: false, children: [
→             {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [
→               {type: 'paragraph', children: [
→                 {type: 'text', value: 'еще список'}
→               ]}]},
→             {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [
→               {type: 'paragraph', children: [
→                 {type: 'text', value: 'еще список'}
→               ]}]}
→           ]}
→         ]
→       }
→     ]}
→   ]}
→ ]}

〉Cписок c катом (feat cut)
←1. список
←<{кат
←   - пункт списка
←   - пункт списка
←}>
→ {type: 'root', children: [
→   {type: 'list', ordered: true, styleType: 'decimal', start: 1, loose: false, children: [
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [
→       {type: 'paragraph', children: [{type: 'text', value: 'список'}]},
→       {type: 'womCut',
→         title: [{type: 'paragraph', children: [{type: 'text', value: 'кат'}]}],
→         children: [
→           {type: 'list', ordered: false, start: null, loose: false, children: [
→               {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [
→                   {type: 'paragraph', children: [
→                       {type: 'text', value: 'пункт списка'}
→                   ]}]},
→               {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [
→                   {type: 'paragraph', children: [
→                       {type: 'text', value: 'пункт списка'}
→                   ]}]}
→           ]}
→       ]}
→     ]}
→   ]}
→ ]}

〉Cписок c катом (feat cut)
←1. список
←   <{кат
←   - пункт списка
←   - пункт списка
←   }>
→ {type: 'root', children: [
→   {type: 'list', ordered: true, styleType: 'decimal', start: 1, loose: false, children: [
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [
→       {type: 'paragraph', children: [{type: 'text', value: 'список'}]},
→       {type: 'womCut',
→         title: [{type: 'paragraph', children: [{type: 'text', value: 'кат'}]}],
→         children: [
→           {type: 'list', ordered: false, start: null, loose: false, children: [
→               {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [
→                   {type: 'paragraph', children: [
→                       {type: 'text', value: 'пункт списка'}
→                   ]}]},
→               {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [
→                   {type: 'paragraph', children: [
→                       {type: 'text', value: 'пункт списка'}
→                   ]}]}
→           ]}
→       ]}
→     ]}
→   ]}
→ ]}

〉Cписок c катом (feat cut)
←1. <{кат
←   - пункт списка
←   - пункт списка
←}>
→ {type: 'root', children: [
→   {type: 'list', ordered: true, styleType: 'decimal', start: 1, loose: false, children: [
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [
→       {type: 'womCut',
→         title: [{type: 'paragraph', children: [{type: 'text', value: 'кат'}]}],
→         children: [
→           {type: 'list', ordered: false, start: null, loose: false, children: [
→               {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [
→                   {type: 'paragraph', children: [
→                       {type: 'text', value: 'пункт списка'}
→                   ]}]},
→               {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [
→                   {type: 'paragraph', children: [
→                       {type: 'text', value: 'пункт списка'}
→                   ]}]}
→           ]}
→       ]}
→     ]}
→   ]}
→ ]}

〉Список с блоком
←1. {[Элемент списка в котором несколько строк
←нужно оборачивать в разметку типа «Блок»,
←например: ##{[элемент списка]}##]}
→ {type: 'root', children: [
→   {type: 'list', ordered: true, styleType: 'decimal', start: 1, loose: false, children: [
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [
→       {type: 'womBlock', children: [
→         {type: 'paragraph', children: [
→           {type: 'text', value: 'Элемент списка в котором несколько строк\nнужно оборачивать в разметку типа «Блок»,\nнапример: '},
→           {type: 'womMonospace', children: [
→             {type: 'womBlock', children: [
→               {type: 'text', value: 'элемент списка'}
→             ]}]},
→         ]},
→       ]}
→     ]}]}]}

〉List after List
←- item
←- item
←- item
←
←1. item
←1. item
←1. item
←
←---
←
←1) item
←1) item
←1) item
←1. item
←1. item
←1. item
→ {type: 'root', children: [
→   {type: 'list', ordered: false, start: null, loose: false, children: [
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'item'}]}]},
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'item'}]}]},
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'item'}]}]}
→   ]},
→   {type: 'list', ordered: true, styleType: 'decimal', start: 1, loose: false, children: [
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'item'}]}]},
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'item'}]}]},
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'item'}]}]}
→   ]},
→   {type: 'thematicBreak'},
→   {type: 'list', ordered: true, styleType: 'decimal', start: 1, loose: false, children: [
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'item'}]}]},
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'item'}]}]},
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'item'}]}]}
→   ]},
→   {type: 'list', ordered: true, styleType: 'decimal', start: 1, loose: false, children: [
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'item'}]}]},
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'item'}]}]},
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'item'}]}]}
→  ]}
→ ]}

〉List loose
←* hello
←  world
←
←  how
←  are
←* you
←
←
←
←better behavior:
←
←* hello
←  * world
←    how
←
←    are
←    you
←
←  * today
←* hi
→ {type: 'root', children: [
→   {type: 'list', ordered: false, start: null, loose: true, children: [
→     {type: 'listItem', loose: true, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'hello\nworld'}]},{type: 'paragraph', children: [{type: 'text', value: 'how\nare'}]} ]},
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'you'}]}]}
→   ]},
→   {type: 'paragraph', children: [{type: 'text', value: 'better behavior:'}]},
→   {type: 'list', ordered: false, start: null, loose: true, children: [
→     {type: 'listItem', loose: true, checked: null, expandable: false, restart: null, children: [
→       {type: 'paragraph', children: [{type: 'text', value: 'hello'}]},
→       {type: 'list', ordered: false, start: null, loose: true, children: [
→         {type: 'listItem', loose: true, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'world\nhow'}]},{type: 'paragraph', children: [{type: 'text', value: 'are\nyou'}]} ]},
→         {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'today'}]}]}
→       ]}]},
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'hi'}]}]}
→   ]},
→ ]}

〉List and Code
←*   This is a list item
←
←
←    This is code
→ {type: 'root', children: [
→   {type: 'list', ordered: false, start: null, loose: false, children: [
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'This is a list item'}]}]}]},
→   {type: 'code', lang: null, value: 'This is code' }
→ ]}

〉List indentation 1
←- Hello 1a
←
← World 1a.
←
←- Hello 1b
←
←  World 1b.
→ {type: 'root', children: [
→   {type: 'list', ordered: false, start: null, loose: false, children: [
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'Hello 1a'}]}]}]},
→   {type: 'paragraph', children: [{type: 'text', value: ' World 1a.'}]},
→   {type: 'list', ordered: false, start: null, loose: true, children: [
→     {type: 'listItem', loose: true, checked: null, expandable: false, restart: null, children: [
→       {type: 'paragraph', children: [{type: 'text', value: 'Hello 1b'}]},
→       {type: 'paragraph', children: [{type: 'text', value: 'World 1b.'}]}]}
→     ]}
→ ]}

〉List indentation 2
←-  Hello 2a
←
←  World 2a.
←
←-  Hello 2b
←
←   World 2b.
→ {type: 'root', children: [
→   {type: 'list', ordered: false, start: null, loose: false, children: [
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'Hello 2a'}]}]}]},
→   {type: 'paragraph', children: [{type: 'text', value: '  World 2a.'}]},
→   {type: 'list', ordered: false, start: null, loose: true, children: [
→     {type: 'listItem', loose: true, checked: null, expandable: false, restart: null, children: [
→       {type: 'paragraph', children: [{type: 'text', value: 'Hello 2b'}]},
→       {type: 'paragraph', children: [{type: 'text', value: 'World 2b.'}]}]}
→     ]}
→ ]}

〉List indentation 3
←-   Hello 3a
←
←   World 3a.
←
←-   Hello 3b
←
←    World 3b.
→ {type: 'root', children: [
→   {type: 'list', ordered: false, start: null, loose: false, children: [
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'Hello 3a'}]}]}]},
→   {type: 'paragraph', children: [{type: 'text', value: '   World 3a.'}]},
→   {type: 'list', ordered: false, start: null, loose: true, children: [
→     {type: 'listItem', loose: true, checked: null, expandable: false, restart: null, children: [
→       {type: 'paragraph', children: [{type: 'text', value: 'Hello 3b'}]},
→       {type: 'paragraph', children: [{type: 'text', value: 'World 3b.'}]}]}
→     ]}
→ ]}

〉List indentation 4
←-    Hello 4a
←
←    World 4a.
←
←-    Hello 4b
←
←     World 4b.
→ {type: 'root', children: [
→   {type: 'list', ordered: false, start: null, loose: false, children: [
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'Hello 4a'}]}]}]},
→   {type: 'code', lang: null, value: 'World 4a.' },
→   {type: 'list', ordered: false, start: null, loose: true, children: [
→     {type: 'listItem', loose: true, checked: null, expandable: false, restart: null, children: [
→       {type: 'paragraph', children: [{type: 'text', value: 'Hello 4b'}]},
→       {type: 'paragraph', children: [{type: 'text', value: 'World 4b.'}]}]}
→     ]}
→ ]}

〉List indentation 5
←-     Hello 5a
←
←     World 5a.
←
←-     Hello 5b
←
←      World 5b.
→ {type: 'root', children: [
→   {type: 'list', ordered: false, start: null, loose: true, children: [
→     {type: 'listItem', loose: true, checked: null, expandable: false, restart: null, children: [
→       {type: 'code', lang: null, value: 'Hello 5a' },
→       {type: 'paragraph', children: [{type: 'text', value: '   World 5a.'}]}]},
→     {type: 'listItem', loose: true, checked: null, expandable: false, restart: null, children: [
→       {type: 'code', lang: null, value: 'Hello 5b\n\nWorld 5b.'}]}]}
→ ]}

〉ListItem with no space
←*one
←
←1.two
→ {type: 'root', children: [
→    {type: 'paragraph', children: [{type: 'text', value: '*one'}]},
→    {type: 'paragraph', children: [{type: 'text', value: '1.two'}]},
→ ]}

〉¡ ListItem empty with no space
←*
←
←1.
→ {type: 'root', children: [
→    {type: 'list', ordered: false, start: null, loose: false, children: [
→       {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: []}]},
→    {type: 'list', ordered: true, styleType: 'decimal', start: 1, loose: false, children: [
→       {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: []}]}
→ ]}

〉ListItem starting with a blank line
←-   Foo
←-
←    Bar
→ {type: 'root', children: [
→   {type: 'list', ordered: false, start: null, loose: false, children: [
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [
→       {type: 'paragraph', children: [{type: 'text', value: 'Foo'}]}]},
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [
→       {type: 'paragraph', children: [{type: 'text', value: '   Bar'}]}]},
→ ]}]}

〉ListItem text
←  * item1
←
←    * item2
←
←  text
→ {type: 'root', children: [
→   {type: 'list', ordered: false, start: null, loose: true, children: [
→     {type: 'listItem', loose: true, checked: null, expandable: false, restart: null, children: [
→       {type: 'paragraph', children: [{type: 'text', value: 'item1'}]},
→       {type: 'list', ordered: false, start: null, loose: false, children: [
→         {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'item2'}]}]}]}]}]},
→     {type: 'paragraph', children: [{type: 'text', value: '  text'}]}
→ ]}

〉ListItem indent = 1
←1. foo bar baz.
←
←<!--  -->
←
←99. foo bar baz.
←
←<!--  -->
←
←999. foo bar baz.
←
←<!--  -->
←
←1. foo bar baz.
←   foo bar baz.
←
←<!--  -->
←
←99. foo bar baz.
←    foo bar baz.
←
←<!--  -->
←
←999. foo bar baz.
←     foo bar baz.
←
←<!--  -->
←
←- foo bar baz.
←
←<!--  -->
←
←- foo bar baz.
←  foo bar baz.
→ {type: 'root', children: [
→   {type: 'list', ordered: true, styleType: 'decimal', start: 1, loose: false, children: [
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'foo bar baz.'}]}]}
→   ]},
→   {type: 'html', value: '<!--  -->'},
→   {type: 'list', ordered: true, styleType: 'decimal', start: 99, loose: false, children: [
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'foo bar baz.'}]}]}
→   ]},
→   {type: 'html', value: '<!--  -->'},
→   {type: 'list', ordered: true, styleType: 'decimal', start: 999, loose: false, children: [
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'foo bar baz.'}]}]}
→   ]},
→   {type: 'html', value: '<!--  -->'},
→   {type: 'list', ordered: true, styleType: 'decimal', start: 1, loose: false, children: [
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'foo bar baz.\nfoo bar baz.'}]}]}
→   ]},
→   {type: 'html', value: '<!--  -->'},
→   {type: 'list', ordered: true, styleType: 'decimal', start: 99, loose: false, children: [
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'foo bar baz.\nfoo bar baz.'}]}]}
→   ]},
→   {type: 'html', value: '<!--  -->'},
→   {type: 'list', ordered: true, styleType: 'decimal', start: 999, loose: false, children: [
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'foo bar baz.\nfoo bar baz.'}]}]}
→   ]},
→   {type: 'html', value: '<!--  -->'},
→   {type: 'list', ordered: false, start: null, loose: false, children: [
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'foo bar baz.'}]}]}
→   ]},
→   {type: 'html', value: '<!--  -->'},
→   {type: 'list', ordered: false, start: null, loose: false, children: [
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'foo bar baz.\nfoo bar baz.'}]}]}
→   ]},
→ ]}

〉ListItem indent = tab
←1.	foo bar baz.
←
←<!--  -->
←
←99.	foo bar baz.
←
←<!--  -->
←
←999.	foo bar baz.
←
←<!--  -->
←
←1.	foo bar baz.
←	foo bar baz.
←
←<!--  -->
←
←99.	foo bar baz.
←	foo bar baz.
←
←<!--  -->
←
←999.	foo bar baz.
←	foo bar baz.
←
←<!--  -->
←
←-	foo bar baz.
←
←<!--  -->
←
←-	foo bar baz.
←	foo bar baz.
→ {type: 'root', children: [
→   {type: 'list', ordered: true, styleType: 'decimal', start: 1, loose: false, children: [
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'foo bar baz.'}]}]}
→   ]},
→   {type: 'html', value: '<!--  -->'},
→   {type: 'list', ordered: true, styleType: 'decimal', start: 99, loose: false, children: [
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'foo bar baz.'}]}]}
→   ]},
→   {type: 'html', value: '<!--  -->'},
→   {type: 'list', ordered: true, styleType: 'decimal', start: 999, loose: false, children: [
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'foo bar baz.'}]}]}
→   ]},
→   {type: 'html', value: '<!--  -->'},
→   {type: 'list', ordered: true, styleType: 'decimal', start: 1, loose: false, children: [
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'foo bar baz.\nfoo bar baz.'}]}]}
→   ]},
→   {type: 'html', value: '<!--  -->'},
→   {type: 'list', ordered: true, styleType: 'decimal', start: 99, loose: false, children: [
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'foo bar baz.\nfoo bar baz.'}]}]}
→   ]},
→   {type: 'html', value: '<!--  -->'},
→   {type: 'list', ordered: true, styleType: 'decimal', start: 999, loose: false, children: [
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'foo bar baz.\nfoo bar baz.'}]}]}
→   ]},
→   {type: 'html', value: '<!--  -->'},
→   {type: 'list', ordered: false, start: null, loose: false, children: [
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'foo bar baz.'}]}]}
→   ]},
→   {type: 'html', value: '<!--  -->'},
→   {type: 'list', ordered: false, start: null, loose: false, children: [
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'foo bar baz.\nfoo bar baz.'}]}]}
→   ]},
→ ]}

〉ListItem indent = mixed
←1.  foo bar baz.
←
←<!--  -->
←
←99. foo bar baz.
←
←<!--  -->
←
←999.	foo bar baz.
←
←<!--  -->
←
←1.	foo bar baz.
←   foo bar baz.
←
←<!--  -->
←
←99.    foo bar baz.
←	foo bar baz.
←
←<!--  -->
←
←999. foo bar baz.
←	foo bar baz.
←
←<!--  -->
←
←-	foo bar baz.
←
←<!--  -->
←
←-	foo bar baz.
←	foo bar baz.
→ {type: 'root', children: [
→   {type: 'list', ordered: true, styleType: 'decimal', start: 1, loose: false, children: [
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'foo bar baz.'}]}]}
→   ]},
→   {type: 'html', value: '<!--  -->'},
→   {type: 'list', ordered: true, styleType: 'decimal', start: 99, loose: false, children: [
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'foo bar baz.'}]}]}
→   ]},
→   {type: 'html', value: '<!--  -->'},
→   {type: 'list', ordered: true, styleType: 'decimal', start: 999, loose: false, children: [
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'foo bar baz.'}]}]}
→   ]},
→   {type: 'html', value: '<!--  -->'},
→   {type: 'list', ordered: true, styleType: 'decimal', start: 1, loose: false, children: [
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'foo bar baz.\nfoo bar baz.'}]}]}
→   ]},
→   {type: 'html', value: '<!--  -->'},
→   {type: 'list', ordered: true, styleType: 'decimal', start: 99, loose: false, children: [
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'foo bar baz.\nfoo bar baz.'}]}]}
→   ]},
→   {type: 'html', value: '<!--  -->'},
→   {type: 'list', ordered: true, styleType: 'decimal', start: 999, loose: false, children: [
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'foo bar baz.\nfoo bar baz.'}]}]}
→   ]},
→   {type: 'html', value: '<!--  -->'},
→   {type: 'list', ordered: false, start: null, loose: false, children: [
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'foo bar baz.'}]}]}
→   ]},
→   {type: 'html', value: '<!--  -->'},
→   {type: 'list', ordered: false, start: null, loose: false, children: [
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'foo bar baz.\nfoo bar baz.'}]}]}
→   ]},
→ ]}

〉Нумерованный список с пропуском пунктов
←1. нумерованный список
←1. нумерованный список-2
←1.#8 нумерованный список-2, с пропуском пунктов
←3. это девятый пункт
→ {type: 'root', children: [{type: 'list', ordered: true, styleType: 'decimal', start: 1, loose: false, children: [
→   {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'нумерованный список'}]}]},
→   {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'нумерованный список-2'}]}]},
→   {type: 'listItem', loose: false, checked: null, expandable: false, restart: 8, children: [{type: 'paragraph', children: [{type: 'text', value: 'нумерованный список-2, с пропуском пунктов'}]}]},
→   {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'это девятый пункт'}]}]},
→ ]}]}

〉Ненумерованный список с пропуском пунктов
←*#99 ненумерованный список, с пропуском пунктов
←* это не сотый пункт
→ {type: 'root', children: [
→   {type: 'paragraph', children: [{type: 'text', value: '*#99 ненумерованный список, с пропуском пунктов'}]},
→   {type: 'list', ordered: false, start: null, loose: false, children: [
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'это не сотый пункт'}]}]}
→   ]}
→ ]}
//*

〉Списки с тудушками
←- [x] Finish my changes
←- [ ] Push my commits to GitHub
←- [x] Open a pull request
←- [] Oopsie
→ {type: 'root', children: [
→   {type: 'list', ordered: false, start: null, loose: false, children: [
→     {type: 'listItem', loose: false, checked: true, expandable: false, restart: null, children: [
→       {type: 'paragraph', children: [
→         {type: 'text', value: 'Finish my changes'}
→       ]}]},
→     {type: 'listItem', loose: false, checked: false, expandable: false, restart: null, children: [
→       {type: 'paragraph', children: [
→         {type: 'text', value: 'Push my commits to GitHub'}
→       ]}]},
→     {type: 'listItem', loose: false, checked: true, expandable: false, restart: null, children: [
→       {type: 'paragraph', children: [
→         {type: 'text', value: 'Open a pull request'}
→       ]}]},
→     {type: 'listItem', loose: false, checked: false, expandable: false, restart: null, children: [
→       {type: 'paragraph', children: [
→         {type: 'text', value: 'Oopsie'}
→       ]}]},
→   ]}
→ ]}

〉Вложенные списки
←1. список
←    1. вложенный список
←       * ещё более вложенный список
←    1. вложенный список-2
←2. список-2
→ {type: 'root', children: [{type: 'list', ordered: true, styleType: 'decimal', start: 1, loose: false, children: [
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [
→       {type: 'paragraph', children: [{type: 'text', value: 'список'}]},
→       {type: 'list', ordered: true, styleType: 'decimal', start: 1, loose: false, children: [
→           {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [
→               {type: 'paragraph', children: [{type: 'text', value: 'вложенный список'}]},
→               {type: 'list', ordered: false, start: null, loose: false, children: [
→                   {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [
→                       {type: 'paragraph', children: [{type: 'text', value: 'ещё более вложенный список'}]},
→                   ]}
→               ]}
→           ]},
→           {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [
→               {type: 'paragraph', children: [{type: 'text', value: 'вложенный список-2'}]}
→           ]}
→       ]}
→     ]},
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [
→       {type: 'paragraph', children: [{type: 'text', value: 'список-2'}]}
→     ]}
→ ]}]}

〉Свернутые списки
←1.#10+ раз
←1.+ два, свернутый пункт
←Скрытый текст списка
←1. три
←---
←1.+ раз
←1.#10+ два
→ {type: 'root', children: [
→   {type: 'list', ordered: true, styleType: 'decimal', start: 1, loose: false, children: [
→     {type: 'listItem', loose: false, checked: null, expandable: true, restart: 10,
→       title: [{type: 'paragraph', children: [{type: 'text', value: 'раз'}]}],
→       children: []
→     },
→     {type: 'listItem', loose: false, checked: null, expandable: true, restart: null,
→       title: [{type: 'paragraph', children: [{type: 'text', value: 'два, свернутый пункт'}]}],
→       children: [{type: 'paragraph', children: [{type: 'text', value: 'Скрытый текст списка'}]}]
→     },
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [
→       {type: 'paragraph', children: [
→         {type: 'text', value: 'три'}
→       ]}]},
→   ]},
→   {type: 'thematicBreak'},
→   {type: 'list', ordered: true, styleType: 'decimal', start: 1, loose: false, children: [
→     {type: 'listItem', loose: false, checked: null, expandable: true, restart: null,
→       title: [{type: 'paragraph', children: [{type: 'text', value: 'раз'}]}],
→       children: []
→     },
→     {type: 'listItem', loose: false, checked: null, expandable: true, restart: 10,
→       title: [{type: 'paragraph', children: [{type: 'text', value: 'два'}]}],
→       children: []
→     },
→   ]}
→ ]}

〉Свернутые списки без пробела
←1.+свернутый пункт
←1.#10+еще один
→ {type: 'root', children: [
→   {type: 'paragraph', children: [{type: 'text', value: '1.+свернутый пункт\n1.#10+еще один'}]}
→ ]}

〉Свернутые списки c катом
←1.+ свернутый пункт
←<{открыть
←Скрытый текст списка
←}>
→ {type: 'root', children: [
→   {type: 'list', ordered: true, styleType: 'decimal', start: 1, loose: false, children: [
→     {type: 'listItem', loose: false, checked: null, expandable: true, restart: null,
→       title: [{type: 'paragraph', children: [{type: 'text', value: 'свернутый пункт'}]}],
→       children: [{
→           type: 'womCut',
→           title: [{type: 'paragraph', children: [{type: 'text', value: 'открыть'}]}],
→           children: [{type: 'paragraph', children: [{type: 'text', value: 'Скрытый текст списка'}]}]
→       }]
→     }
→   ]}
→ ]}

〉Свернутые вложенные списки
←1. список
←   1. вложенный список
←   1. вложенный список
←   2.+ вложенный список, свернутый пункт
←       * Скрытый пункт списка
←         * Скрытый пункт списка
←       * Скрытый пункт списка
←2. список-2
→ {type: 'root', children: [{type: 'list', ordered: true, styleType: 'decimal', start: 1, loose: false, children: [
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [
→       {type: 'paragraph', children: [{type: 'text', value: 'список'}]},
→       {type: 'list', ordered: true, styleType: 'decimal', start: 1, loose: false, children: [
→           {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [
→               {type: 'paragraph', children: [{type: 'text', value: 'вложенный список'}]}
→           ]},
→           {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [
→               {type: 'paragraph', children: [{type: 'text', value: 'вложенный список'}]}
→           ]},
→           {type: 'listItem', loose: false, checked: null, expandable: true, restart: null,
→             title: [{type: 'paragraph', children: [{type: 'text', value: 'вложенный список, свернутый пункт'}]}],
→             children: [{type: 'list', ordered: false, start: null, loose: false, children: [
→               {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [
→                   {type: 'paragraph', children: [{type: 'text', value: 'Скрытый пункт списка'}]},
→                   {type: 'list', ordered: false, start: null, loose: false, children: [
→                       {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [
→                           {type: 'paragraph', children: [{type: 'text', value: 'Скрытый пункт списка'}]},
→                       ]}
→                   ]}
→               ]},
→               {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [
→                   {type: 'paragraph', children: [{type: 'text', value: 'Скрытый пункт списка'}]}
→               ]}
→             ]}]
→           }
→       ]}
→     ]},
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [
→       {type: 'paragraph', children: [{type: 'text', value: 'список-2'}]}
→     ]}
→ ]}]}

〉Свернутые ненумерованные списки
←*+ свернутый пункт
←Скрытый текст списка
→ {type: 'root', children: [
→   {type: 'list', ordered: false, start: null, loose: false, children: [
→     {type: 'listItem', loose: false, checked: null, expandable: true, restart: null,
→       title: [{type: 'paragraph', children: [{type: 'text', value: 'свернутый пункт'}]}],
→       children: [{type: 'paragraph', children: [{type: 'text', value: 'Скрытый текст списка'}]}]
→     }
→   ]}
→ ]}
//+*

〉 Сложненький список (feat formatter)
←1. Ordered List
←2. text %%code%% text
←3. text %%code code code
←code code code code code
←code code code code code%% text
←4.#99 text
←5. %%(cs)
←codecodecodecodecode
←codecodecodecodecode
←code code code code code
←%%
←6. вложенный список
←    2.+ вложенный список, свёртнутый пункт
←        * %%code code code code code code code code code code code code code code code code code code code code code code code code code code code code code code code code code code code code code code code code code code %%
←           * %%codecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecode%%
←        * Скрытый пункт %%списка%%
→ {type: 'root', children: [{type: 'list', ordered: true, styleType: 'decimal', start: 1, loose: false, children: [
→   {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [
→     {type: 'paragraph', children: [{type: 'text', value: 'Ordered List'}]},
→   ]},
→   {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [
→     {type: 'paragraph', children: [
→       {type: 'text', value: 'text '},
→       {type: 'womFormatter', value: 'code'},
→       {type: 'text', value: ' text'}
→     ]},
→   ]},
→   {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [
→     {type: 'paragraph', children: [
→       {type: 'text', value: 'text '},
→       {type: 'womFormatter', value: 'code code code\ncode code code code code\ncode code code code code'},
→       {type: 'text', value: ' text'}
→     ]},
→   ]},
→   {type: 'listItem', loose: false, checked: null, expandable: false, restart: 99, children: [
→     {type: 'paragraph', children: [{type: 'text', value: 'text'}]},
→   ]},
→   {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [
→     {type: 'womFormatter', format: 'cs', attributes: {}, value: '\ncodecodecodecodecode\ncodecodecodecodecode\ncode code code code code\n'}
→   ]},
→   {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [
→     {type: 'paragraph', children: [{type: 'text', value: 'вложенный список'}]},
→     {type: 'list', ordered: true, styleType: 'decimal', start: 2, loose: false, children: [
→       {type: 'listItem', loose: false, checked: null, expandable: true, restart: null,
→         title: [{type: 'paragraph', children: [{type: 'text', value: 'вложенный список, свёртнутый пункт'}]}],
→         children: [{type: 'list', ordered: false, start: null, loose: false, children: [
→           {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [
→             {type: 'womFormatter', value: 'code code code code code code code code code code code code code code code code code code code code code code code code code code code code code code code code code code code code code code code code code code '},
→             {type: 'list', ordered: false, start: null, loose: false, children: [
→               {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [
→                 {type: 'womFormatter', value: 'codecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecode'}
→               ]}
→             ]}
→           ]},
→           {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [
→             {type: 'paragraph', children: [{type: 'text', value: 'Скрытый пункт '}, {type: 'womFormatter', value: 'списка'}]},
→           ]}
→         ]}
→       ]}
→     ]}
→   ]}
→ ]}]}

〉Списки с катами (feat cut)
←* <{tracker
←
←  Текст текст текст}>
←* <{tracker-client
←
←  Текст текст текст}>
→ {type: 'root', children: [{type: 'list', ordered: false, start: null, loose: true, children: [
→   {type: 'listItem', loose: true, checked: null, expandable: false, restart: null, children: [
→     {type: 'womCut',
→       title: [{type: 'paragraph', children: [{type: 'text', value: 'tracker'}]}],
→       children: [
→         {type: 'paragraph', children: [
→           {type: 'text', value: 'Текст текст текст'}]}]}]},
→   {type: 'listItem', loose: true, checked: null, expandable: false, restart: null, children: [
→     {type: 'womCut',
→       title: [{type: 'paragraph', children: [{type: 'text', value: 'tracker-client'}]}],
→       children: [
→         {type: 'paragraph', children: [
→           {type: 'text', value: 'Текст текст текст'}]}]}]},
→ ]}]}

〉Списки через цитирование и заголовки (feat blockquote, ticket, heading)
←<[section1]>
←* [x] ABC-1234[ --Важная задача-- ]( arkady )
←
←<[section2]>
←* [ ] ABC-1233[ Важная задача 2 ](  )
←
←
←* ABC-1232[ Важная задача 3 ]( arkady ) - должно закрыться после п.1
←
←==== section3
←* [] ABC-1231[ Важная задача 4 ](  )
←
→ {type: 'root', children: [
→   {type: 'womBlockquote', children: [
→     {type: 'paragraph', children: [
→       {type: 'text', value: 'section1'}
→     ]}]},
→   {type: 'list', ordered: false, start: null, loose: false, children: [
→     {type: 'listItem', loose: false, checked: true, expandable: false, restart: null, children: [
→       {type: 'paragraph', children: [
→         {type: 'womTicket', assignee: 'arkady', realm: null, protocol: null, url: null, value: 'ABC-1234', title: [
→           {type: 'text', value: ' '},
→           {type: 'womStrike', children: [{type: 'text', value: 'Важная задача'}]},
→           {type: 'text', value: ' '},
→         ]}]}]}]},
→   {type: 'womBlockquote', children: [
→     {type: 'paragraph', children: [
→       {type: 'text', value: 'section2'}
→     ]}]},
→   {type: 'list', ordered: false, start: null, loose: false, children: [
→     {type: 'listItem', loose: false, checked: false, expandable: false, restart: null, children: [
→       {type: 'paragraph', children: [
→         {type: 'womTicket', assignee: null, realm: null, protocol: null, url: null, value: 'ABC-1233', title: [
→           {type: 'text', value: ' Важная задача 2 '}
→         ]}]}]}]},
→   {type: 'list', ordered: false, start: null, loose: false, children: [
→     {type: 'listItem', loose: false, checked: null, expandable: false, restart: null, children: [
→       {type: 'paragraph', children: [
→         {type: 'womTicket', assignee: 'arkady', realm: null, protocol: null, url: null, value: 'ABC-1232', title: [
→           {type: 'text', value: ' Важная задача 3 '}
→         ]},
→         {type: 'text', value: ' - должно закрыться после п.1'}
→       ]}]}]},
→   {type: 'womHeading', depth: 3, anchor: null, expandable: false, children: [
→     {type: 'text', value: 'section3'}
→   ]},
→   {type: 'list', ordered: false, start: null, loose: false, children: [
→     {type: 'listItem', loose: false, checked: false, expandable: false, restart: null, children: [
→       {type: 'paragraph', children: [
→         {type: 'womTicket', assignee: null, realm: null, protocol: null, url: null, value: 'ABC-1231', title: [
→           {type: 'text', value: ' Важная задача 4 '}
→         ]}]}]}]}
→ ]}




## Ссылки (link, image, ticket, staff, club)

〉Сложная ссылка с тикетом
←https://jira.woofmd-team.ru/QUEUE-1234[ --На Вики в Тесте всегда показаываются комментарии-- ]( thasonic )
→ {type: 'womTicket', assignee: 'thasonic', realm: 'jira.woofmd-team.ru', protocol: 'https://',
→   value: 'QUEUE-1234',
→   url: 'https://jira.woofmd-team.ru/QUEUE-1234',
→   title: [
→     {type: 'text', value: ' '},
→     {type: 'womStrike', children: [
→       {type: 'text', value: 'На Вики в Тесте всегда показаываются комментарии'}]},
→     {type: 'text', value: ' '},
→   ]}

〉URL cases from remark fixtures
←This should be a link: http://example.com/hello-world.
←
←Also, subdomain should be a part of the link (http://foo.example.com/(hello[world])).
←
←So should this: mailto:foo@bar.com.
→ {type: 'root', children: [
→   {type: 'paragraph', children: [
→     {type: 'text', value: 'This should be a link: '},
→     {type: 'link', title: null, url: 'http://example.com/hello-world', children: [
→       {type: 'text', value: 'http://example.com/hello-world'}]},
→     {type: 'text', value: '.'},
→   ]},
→   {type: 'paragraph', children: [
→     {type: 'text', value: 'Also, subdomain should be a part of the link ('},
→     {type: 'link', title: null, url: 'http://foo.example.com/(hello[world])', children: [
→       {type: 'text', value: 'http://foo.example.com/(hello[world])'}]},
→     {type: 'text', value: ').'},
→   ]},
→   {type: 'paragraph', children: [
→     {type: 'text', value: 'So should this: '},
→     {type: 'link', title: null, url: 'mailto:foo@bar.com', children: [
→       {type: 'text', value: 'foo@bar.com'}]},
→     {type: 'text', value: '.'},
→   ]}]}

〉Короткая ссылка на тикет
←QUEUE-1234
→ {type: 'womTicket',
→   value: 'QUEUE-1234',
→   title: null,
→   assignee: null,
→   realm: null, protocol: null, url: null}

〉Ссылка на тикет с расширенным синтаксисом (WIKI-11815)
←QUEUE-1234[ --Важный тикет: "Сделать!"-- ]( mrtwister )
→ {type: 'womTicket',
→   value: 'QUEUE-1234',
→   title: [
→     {type: 'text', value: ' '},
→     {type: 'womStrike', children: [{type: 'text', value: 'Важный тикет: "Сделать!"'}]},
→     {type: 'text', value: ' '},
→   ],
→   assignee: 'mrtwister',
→   realm: null, protocol: null, url: null}

〉Полная ссылка с realm без assignee (WIKI-11815)
←https://st.woofmd-team.ru/QUEUE-1234[ "Важный тикет: Сделать ](  )
→ {type: 'womTicket',
→   value: 'QUEUE-1234',
→   title: [
→     {type: 'text', value: ' "Важный тикет: Сделать '},
→   ],
→   assignee: null,
→   realm: 'st.woofmd-team.ru',
→   protocol: "https://",
→   url: "https://st.woofmd-team.ru/QUEUE-1234"
→ }

〉Битая ссылка на тикет с одной квадратной скобкой
←QUEUE-1234[
→ [{type: 'womTicket', title: null, assignee: null, realm: null, protocol: null, url: null, value: 'QUEUE-1234'},
→  {type: 'text', value: '['}]

〉Битая ссылка на тикет с квадратными скобками
←QUEUE-1234[]
→ [{type: 'womTicket', title: null, assignee: null, realm: null, protocol: null, url: null, value: 'QUEUE-1234'},
→  {type: 'text', value: '[]'}]

〉Битая ссылка на тикет с одной квадратной скобкой
←QUEUE-1234[](
//)
→ [{type: 'womTicket', title: null, assignee: null, realm: null, protocol: null, url: null, value: 'QUEUE-1234'},
→  {type: 'text', value: '[]('}]
//)

〉Пустая ссылка на тикет с квадратными и круглыми скобками
←QUEUE-1234[]()
→ [{type: 'womTicket', title: [], assignee: null, realm: null, protocol: null, url: null, value: 'QUEUE-1234'}]

〉Ссылка на тикет должна парситься, даже если есть большие буквы перед ссылкой
←UPPERCASE some text QUEUE-1234
→ [{type: 'text', value: 'UPPERCASE some text '},
→  {type: 'womTicket', title: null, assignee: null, realm: null, protocol: null, url: null, value: 'QUEUE-1234'}]

〉Ссылка на тикет должна парситься, даже если есть большие буквы и перед ссылкой, и после
←UPPERCASE some text QUEUE-1234 yes yes
→ [{type: 'text', value: 'UPPERCASE some text '},
→  {type: 'womTicket', title: null, assignee: null, realm: null, protocol: null, url: null, value: 'QUEUE-1234'},
→  {type: 'text', value: ' yes yes'},
→  ]

〉Ссылка на тикет должна парситься даже если одна большая буква
←textA QUEUE-1234[ text ]()
→ [{type: 'text', value: 'textA '},
→  {type: 'womTicket', title: [{type: 'text', value: ' text '}], assignee: null, realm: null, protocol: null, url: null, value: 'QUEUE-1234'}]

〉Битая полная ссылка на тикет с квадратными скобками
←https://jira.woofmd-team.ru/QUEUE-1234[]
→ {type: 'link', title: null, url: 'https://jira.woofmd-team.ru/QUEUE-1234[]', children: [
→   {type: 'text', value: 'https://jira.woofmd-team.ru/QUEUE-1234[]'}
→ ]}

〉Битая полная ссылка на тикет с круглыми скобками
←https://jira.woofmd-team.ru/QUEUE-1234()
→ {type: 'link', title: null, url: 'https://jira.woofmd-team.ru/QUEUE-1234()', children: [
→   {type: 'text', value: 'https://jira.woofmd-team.ru/QUEUE-1234()'}
→ ]}

〉Полная ссылка с пустыми полями на тикет с разными скобками
←https://jira.woofmd-team.ru/QUEUE-1234[ ]( )
→ {type: 'womTicket', title: null, assignee: null, realm: 'jira.woofmd-team.ru',
→   protocol: 'https://', url: 'https://jira.woofmd-team.ru/QUEUE-1234',
→   value: 'QUEUE-1234', title: [{type: 'text', value: ' '}]}

〉Полная ссылка на тикет без протокола
←jira.woofmd-team.ru/QUEUE-1234[ Summary  ]( )
→ {type: 'womTicket',
→   assignee: null, realm: 'jira.woofmd-team.ru',
→   protocol: null, url: 'jira.woofmd-team.ru/QUEUE-1234',
→   value: 'QUEUE-1234', title: [{type: 'text', value: ' Summary  '}]}

〉Встроенный в текст номер тикета не должен парситься
←//home/woofmd/SIDEBYSIDE-100500/yes-yes
→ {type: 'text', value: '//home/woofmd/SIDEBYSIDE-100500/yes-yes'}

〉Якорь-якорек
←[Якорь](#woofmd)
→ {type: 'link', title: null, url: '#woofmd', children: [{type: 'text', value: 'Якорь'}]}

〉кто:egorova\nq@q
←кто:egorova
←q@q
→[{type: 'womStaff', value: 'egorova', case: 'кто',   at: null}, { type: 'text', value: '\nq@q' }]
кто:egorova   → {type: 'womStaff', value: 'egorova', case: 'кто',   at: null}
кто:egorova-a   → {type: 'womStaff', value: 'egorova-a', case: 'кто',   at: null}
кто:egorova_a   → {type: 'womStaff', value: 'egorova_a', case: 'кто',   at: null}
кто:egorova.a   → {type: 'womStaff', value: 'egorova.a', case: 'кто',   at: null}
кого:egorova  → {type: 'womStaff', value: 'egorova', case: 'кого',  at: null}
кому:egorova  → {type: 'womStaff', value: 'egorova', case: 'кому',  at: null}
кем:egorova   → {type: 'womStaff', value: 'egorova', case: 'кем',   at: null}
ком:egorova   → {type: 'womStaff', value: 'egorova', case: 'ком',   at: null}
оком:egorova  → {type: 'womStaff', value: 'egorova', case: 'оком',  at: null}
укого:egorova → {type: 'womStaff', value: 'egorova', case: 'укого', at: null}
ского:egorova → {type: 'womStaff', value: 'egorova', case: 'ского', at: null}
staff:egorova → {type: 'womStaff', value: 'egorova', case: 'staff', at: null}
egorova@      → {type: 'womStaff', value: 'egorova', case: null,    at: 'suffix'}
@egorova      → {type: 'womStaff', value: 'egorova', case: null,    at: 'prefix'}
текст тексткто:egorova → {type: 'text', value: 'текст тексткто:egorova' }
текст текст@egorova → {type: 'text', value: 'текст текст@egorova' }

club:internet → {type: 'womClub', value: 'internet', case: 'club', at: null }
клуб:интернет → {type: 'womClub', value: 'интернет', case: 'клуб', at: null }

〉Checking for false-positives in staff links
←Perfecto is real! Right, staff:johnson?
←
←Perfecto is real! Right, johnson@? Left, @sonjohn?
←
←johnson@ @sonjohn
→ {type: 'root', children: [
→  {type: 'paragraph', children: [
→   {type: 'text', value: 'Perfecto is real! Right, '},
→   {type: 'womStaff', value: 'johnson', case: 'staff', at: null},
→   {type: 'text', value: '?'}
→  ]},
→  {type: 'paragraph', children: [
→   {type: 'text', value: 'Perfecto is real! Right, '},
→   {type: 'womStaff', value: 'johnson', case: null, at: 'suffix'},
→   {type: 'text', value: '? Left, '},
→   {type: 'womStaff', value: 'sonjohn', case: null, at: 'prefix'},
→   {type: 'text', value: '?'}
→  ]},
→  {type: 'paragraph', children: [
→   {type: 'womStaff', value: 'johnson', case: null, at: 'suffix'},
→   {type: 'text', value: ' '},
→   {type: 'womStaff', value: 'sonjohn', case: null, at: 'prefix'}
→  ]}]}

〉Почта полная
←((mailto:mail@woofmd-team.ru mail@))
→ {type: 'womLink', url: 'mailto:mail@woofmd-team.ru', brackets: false, children: [
→   {type: 'womStaff', case: null, at: 'suffix', value: 'mail'}]}

〉Почта текстом
←mail@mail.ru
→ {type: 'text', value: 'mail@mail.ru'}

〉Почта текстом
←mailto:mail@mail.ru
→ {type: 'link', title: null, url: 'mailto:mail@mail.ru', children: [{type: 'text', value: 'mail@mail.ru'}]}

〉Одинокая ссылка в круглых скобках
←((http://www.woofmd.ru))
→ {type: 'womLink', url: 'http://www.woofmd.ru', brackets: false, children: []}

〉Множество скобок перед ссылками
←(((((((http://www.woofmd.ru)))
→[{type: 'text', value: '(((((' }, {type: 'womLink', url: 'http://www.woofmd.ru', brackets: false, children: []}, {type: 'text', value: ')' }]

〉Одинокая ссылка в квадратных скобках
←[[http://www.woofmd.ru]]
→ {type: 'womLink', url: 'http://www.woofmd.ru', brackets: true, children: []}

〉Ссылка с текстом в круглых скобках
←((http://www.woofmd.ru WoofMD в круглых скобках))
→ {type: 'womLink', url: 'http://www.woofmd.ru', brackets: false, children: [{type: 'text', value: 'WoofMD в круглых скобках'}]}

〉Ссылка с текстом в квадратных скобках
←[[http://www.woofmd.ru WoofMD в квадратных скобках]]
→ {type: 'womLink', url: 'http://www.woofmd.ru', brackets: true, children: [{type: 'text', value: 'WoofMD в квадратных скобках'}]}

〉Относительная ссылка в круглых скобках
←((Устафф))
→ {type: 'womLink', url: 'Устафф', brackets: false, children: []}

〉Относительная ссылка в квадратных скобках
←[[Устафф]]
→ {type: 'womLink', url: 'Устафф', brackets: true, children: []}

〉Относительная ссылка c описанием в круглых скобках
←((Устафф Страница про устав))
→ {type: 'womLink', url: 'Устафф', brackets: false, children: [{type: 'text', value: 'Страница про устав'}]}

〉Относительная ссылка с описанием в квадратных скобках
←[[Устафф Страница про устафф]]
→ {type: 'womLink', url: 'Устафф', brackets: true, children: [{type: 'text', value: 'Страница про устафф'}]}

〉Битая ссылка на якорь
←((/HomePage#TOC_1))
→ {type: 'paragraph', children: [
→   {type: 'womLink', url: '/HomePage#TOC_1', brackets: false, children: []}
→ ]}

¡ https://wiki.woofmd-team.ru/wiki/vodstvo/file/.files/bobrujjsk.doc → null
¡ ((https://wiki.woofmd-team.ru/wiki/vodstvo/file/.files/bobrujjsk.doc ссылка на файл)) → null

〉Прямая ссылка на картинку
←http://img.woofmd.net/i/logo95x37x8.png
→ {type: 'link', title: null, url: 'http://img.woofmd.net/i/logo95x37x8.png', children: [
→   {type: 'text', value: 'http://img.woofmd.net/i/logo95x37x8.png'}
→ ]}

〉Ссылка с элементами форматирования не должна быть отформатирована
←https://abc.woofmd-team.ru/services/_wiki_
→ {type: 'link', title: null, url: 'https://abc.woofmd-team.ru/services/_wiki_', children: [
→   {type: 'text', value: 'https://abc.woofmd-team.ru/services/_wiki_'}
→ ]}

〉Не должен обрезаться ) от ссылки
←https://awaps.woofmd.ru/15/35819/(14400891/0)
→ {type: 'link', title: null, url: 'https://awaps.woofmd.ru/15/35819/(14400891/0)', children: [
→   {type: 'text', value: 'https://awaps.woofmd.ru/15/35819/(14400891/0)'}
→ ]}

〉Картинка с заданным размером
←100x100:https://wiki.woofmd-team.ru/wiki/vodstvo/pictures/.files/e1.jpg
→ {type: 'womImage', url: 'https://wiki.woofmd-team.ru/wiki/vodstvo/pictures/.files/e1.jpg', width: 100, height: 100}

〉Картинка-ссылка
←((/HomePage http://img.woofmd.net/i/logo95x37x8.png))
→ null

〉Картинка-ссылка
←((http://img.woofmd.net/i/www/citylogos/gramota2-logo-ru.png http://img.woofmd.net/i/www/logo.png))
→ null

〉Ref
←ref:http://img.woofmd.net/i/logo95x37x8.png
→ {type: 'link', title: null, url: 'http://img.woofmd.net/i/logo95x37x8.png', ref: true, children: [
→   {type: 'text', value: 'http://img.woofmd.net/i/logo95x37x8.png'}]}

〉Ссылки с file
←file:/group/gods/dog.jpg
→ {type: 'link', title: null, url: 'file:/group/gods/dog.jpg', children: [
→   {type: 'text', value: 'file:/group/gods/dog.jpg'}]}

〉Картика с file
←100x100:file:/dog.jpg
→ {type: 'womImage', url: 'file:/dog.jpg', width: 100, height: 100}




## Таблицы и раскладки (table)

〉Однострочная таблица
←#| ||cell11|| ||cell21|| |#
→ {type: 'root', children: [
→   {type: 'womTable', children: [
→     {type: 'womTableRow', children: [
→       {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: 'cell11'}]}]}
→     ]},
→     {type: 'womTableRow', children: [
→       {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: 'cell21'}]}]}
→     ]}
→   ]}
→ ]}

〉Таблица из разметки
←#|
←||cell11|cell12|cell13||
←||cell21|cell22||
←|#
→ {type: 'root', children: [
→   {type: 'womTable', children: [
→     {type: 'womTableRow', children: [
→       {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: 'cell11'}]}]},
→       {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: 'cell12'}]}]},
→       {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: 'cell13'}]}]}
→     ]},
→     {type: 'womTableRow', children: [
→       {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: 'cell21'}]}]},
→       {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: 'cell22'}]}]},
→     ]}
→   ]}
→ ]}

〉Однострочная раскладка
←#|| ||cell11|| ||cell21|| ||#
→ {type: 'root', children: [
→   {type: 'womTable', kind: 'layout', children: [
→     {type: 'womTableRow', children: [
→       {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: 'cell11'}]}]}
→     ]},
→     {type: 'womTableRow', children: [
→       {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: 'cell21'}]}]}
→     ]}
→   ]}
→ ]}

〉Вложенная таблица
←#| || 1 | #| || xxx || |# | 1 | #| || xxx || |# | 1 || |#
//1   ↑5   ↑10  ↑15  ↑20  ↑25  ↑30  ↑35  ↑40
//    ѳ-- ѳ----------------  5-8 9-26
→ {type: 'root', children: [
→   {type: 'womTable', children: [
→     {type: 'womTableRow', children: [
→
→ {type: 'womTableCell', children: [
→   {type: 'paragraph', children: [{type: 'text', value: ' 1 '}]} ]},
→ {type: 'womTableCell', children: [
→   {type: 'womTable', children: [
→     {type: 'womTableRow', children: [
→       {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: ' xxx '}]}]}
→     ]} ]} ]},
→ {type: 'womTableCell', children: [
→   {type: 'paragraph', children: [{type: 'text', value: ' 1 '}]} ]},
→ {type: 'womTableCell', children: [
→   {type: 'womTable', children: [
→     {type: 'womTableRow', children: [
→       {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: ' xxx '}]}]}
→     ]} ]} ]},
→ {type: 'womTableCell', children: [
→   {type: 'paragraph', children: [{type: 'text', value: ' 1 '}]} ]},
→
→     ]} ]} ]}

〉Вложенная раскладка
←#|
←||ячейка-строка|
←#||
←  ||ячейка во вложенной таблице||
←||#
←||
←|#
→ {type: 'root', children: [
→   {type: 'womTable', children: [
→     {type: 'womTableRow', children: [
→       {type: 'womTableCell', children: [
→         {type: 'paragraph', children: [{type: 'text', value: 'ячейка-строка'}]}
→       ]},
→       {type: 'womTableCell', children: [
→         {type: 'womTable', kind: 'layout', children: [{type: 'womTableRow', children: [
→           {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: 'ячейка во вложенной таблице'}]} ]}]}]}
→       ]}
→     ]}
→   ]}
→ ]}

〉Вложенные таблицы
←#||
←|| cell10 | #| ||cell11.0|| |# | #| ||cell12.0|| |# | cell13 ||
←|| cell20 | #| ||cell21.0|| |# | #| ||cell22.0|| |# | cell23 ||
←||#
→ {type: 'root', children: [
→   {type: 'womTable', kind: 'layout', children: [
→     {type: 'womTableRow', children: [
→       {type: 'womTableCell', children: [
→         {type: 'paragraph', children: [{type: 'text', value: ' cell10 '}]}
→       ]},
→       {type: 'womTableCell', children: [
→         {type: 'womTable', children: [{type: 'womTableRow', children: [
→           {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: 'cell11.0'}]} ]}]}]}
→       ]},
→       {type: 'womTableCell', children: [
→         {type: 'womTable', children: [{type: 'womTableRow', children: [
→           {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: 'cell12.0'}]} ]}]}]}
→       ]},
→       {type: 'womTableCell', children: [
→         {type: 'paragraph', children: [{type: 'text', value: ' cell13 '}]}
→       ]},
→     ]},
→     {type: 'womTableRow', children: [
→       {type: 'womTableCell', children: [
→         {type: 'paragraph', children: [{type: 'text', value: ' cell20 '}]}
→       ]},
→       {type: 'womTableCell', children: [
→         {type: 'womTable', children: [{type: 'womTableRow', children: [
→           {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: 'cell21.0'}]} ]}]}]}
→       ]},
→       {type: 'womTableCell', children: [
→         {type: 'womTable', children: [{type: 'womTableRow', children: [
→           {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: 'cell22.0'}]} ]}]}]}
→       ]},
→       {type: 'womTableCell', children: [
→         {type: 'paragraph', children: [{type: 'text', value: ' cell23 '}]}
→       ]},
→     ]}
→   ]}
→ ]}

〉Очень вложенные таблицы
←#||
←|| cell10 | #| ||cell11.0| #| ||cell11.0.0|cell11.0.1|cell11.0.2|| |# |cell11.2|| |# | cell12 ||
←||#
→ {type: 'root', children: [
→   {type: 'womTable', kind: 'layout', children: [
→     {type: 'womTableRow', children: [
→       {type: 'womTableCell', children: [
→         {type: 'paragraph', children: [{type: 'text', value: ' cell10 '}]}
→       ]},
→
→       {type: 'womTableCell', children: [
→         {type: 'womTable', children: [
→           {type: 'womTableRow', children: [
→             {type: 'womTableCell', children: [
→               {type: 'paragraph', children: [{type: 'text', value: 'cell11.0'}]}
→             ]},
→
→             {type: 'womTableCell', children: [
→               {type: 'womTable', children: [
→                 {type: 'womTableRow', children: [
→                   {type: 'womTableCell', children: [
→                     {type: 'paragraph', children: [{type: 'text', value: 'cell11.0.0'}]}
→                   ]},
→                   {type: 'womTableCell', children: [
→                     {type: 'paragraph', children: [{type: 'text', value: 'cell11.0.1'}]}
→                   ]},
→                   {type: 'womTableCell', children: [
→                     {type: 'paragraph', children: [{type: 'text', value: 'cell11.0.2'}]}
→                   ]},
→                 ]}]}]},
→
→             {type: 'womTableCell', children: [
→               {type: 'paragraph', children: [{type: 'text', value: 'cell11.2'}]}
→             ]},
→           ]}]}]},
→
→       {type: 'womTableCell', children: [
→         {type: 'paragraph', children: [{type: 'text', value: ' cell12 '}]}
→       ]},
→ ]}]}]}

〉¡ Таблица с пустыми ячейками в строках
←#| ||1||3|| |||5|6|| ||7|8||| |#
→ {type: 'root', children: [
→   {type: 'womTable', children: [
→     {type: 'womTableRow', children: [
→       {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: '1'}]}]},
→       {type: 'womTableCell', children: []},
→       {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: '3'}]}]},
→     ]},
→     {type: 'womTableRow', children: [
→       {type: 'womTableCell', children: []},
→       {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: '5'}]}]},
→       {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: '6'}]}]},
→     ]},
→     {type: 'womTableRow', children: [
→       {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: '7'}]}]},
→       {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: '8'}]}]},
→       {type: 'womTableCell', children: []},
→     ]},
→   ]}]}

〉Таблица с жирной строкой-заголовком
←#|
←**||Column 1|Column 2||**
←|| | ||
←|#
→ {type: 'root', children: [
→   {type: 'womTable', children: [
→           {type: 'womTableRow', children: [
→             {type: 'womTableCell', children: [
→               {type: 'paragraph', children: [{type: 'text', value: 'Column 1'}]} ]},
→             {type: 'womTableCell', children: [
→               {type: 'paragraph', children: [{type: 'text', value: 'Column 2'}]} ]},
→           ]},
→           {type: 'womTableRow', children: [
→             {type: 'womTableCell', children: [
→           ]},
→           {type: 'womTableCell', children: [
→           ]}]}
→ ]}]}

〉Таблица со стилизованной строкой в центре
←#|
←|| 1 | 2 ||
←**!!//||Column 1|Column 2||//!!**
←|| 3 | 4 ||
←|#
→{type: 'root', children: [
→  {type: 'womTable', children: [
→    {type: 'womTableRow', children: [
→      {type: 'womTableCell', children: [
→        {type: 'paragraph', children: [
→          {type: 'text', value: ' 1 '}]}]},
→      {type: 'womTableCell', children: [
→        {type: 'paragraph', children: [
→          {type: 'text', value: ' 2 '}]}]},
→    ]},
→    {type: 'womTableRow', children: [
→      {type: 'womTableCell', children: [
→        {type: 'paragraph', children: [
→          {type: 'text', value: 'Column 1'}]}]},
→      {type: 'womTableCell', children: [
→        {type: 'paragraph', children: [
→          {type: 'text', value: 'Column 2'}]}]}
→    ]},
→    {type: 'womTableRow', children: [
→      {type: 'womTableCell', children: [
→        {type: 'paragraph', children: [
→          {type: 'text', value: ' 3 '}]}]},
→      {type: 'womTableCell', children: [
→        {type: 'paragraph', children: [
→          {type: 'text', value: ' 4 '}]}]}
→  ]}]}]}

〉Таблица с по разному стилизованными строками
←#|
←**|| 1a | 1b ||**
←//|| 1a | 1b ||//
←__|| 1a | 1b ||__
←##|| 1a | 1b ||##
←++|| 1a | 1b ||++
←--|| 1a | 1b ||--
←??|| 1a | 1b ||??
←!!|| 1a | 1b ||!!
←|#
→{type: 'root', children: [
→  {type: 'womTable', children: [
→    {type: 'womTableRow', children: [
→      {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: ' 1a '}]}]},
→      {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: ' 1b '}]}]},
→    ]},
→    {type: 'womTableRow', children: [
→      {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: ' 1a '}]}]},
→      {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: ' 1b '}]}]},
→    ]},
→    {type: 'womTableRow', children: [
→      {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: ' 1a '}]}]},
→      {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: ' 1b '}]}]},
→    ]},
→    {type: 'womTableRow', children: [
→      {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: ' 1a '}]}]},
→      {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: ' 1b '}]}]},
→    ]},
→    {type: 'womTableRow', children: [
→      {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: ' 1a '}]}]},
→      {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: ' 1b '}]}]},
→    ]},
→    {type: 'womTableRow', children: [
→      {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: ' 1a '}]}]},
→      {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: ' 1b '}]}]},
→    ]},
→    {type: 'womTableRow', children: [
→      {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: ' 1a '}]}]},
→      {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: ' 1b '}]}]},
→    ]},
→    {type: 'womTableRow', children: [
→      {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: ' 1a '}]}]},
→      {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: ' 1b '}]}]},
→    ]},
→  ]},
→]}

〉Таблица с разноцветными строками
←#|
←!!(крас)|| 1a | 1b ||!!
←!!(зел)|| 1a | 1b ||!!
←!!(син)|| 1a | 1b ||!!
←!!(grey)|| 1a | 1b ||!!
←!!(yellow)|| 1a | 1b ||!!
←|#
→{type: 'root', children: [
→  {type: 'womTable', children: [
→    {type: 'womTableRow', children: [
→      {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: ' 1a '}]}]},
→      {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: ' 1b '}]}]},
→    ]},
→    {type: 'womTableRow', children: [
→      {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: ' 1a '}]}]},
→      {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: ' 1b '}]}]},
→    ]},
→    {type: 'womTableRow', children: [
→      {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: ' 1a '}]}]},
→      {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: ' 1b '}]}]},
→    ]},
→    {type: 'womTableRow', children: [
→      {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: ' 1a '}]}]},
→      {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: ' 1b '}]}]},
→    ]},
→    {type: 'womTableRow', children: [
→      {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: ' 1a '}]}]},
→      {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: ' 1b '}]}]},
→    ]}
→  ]},
→]}

〉Пустые ячейки
←#|
←|| Id | - ||||#
→ {type: 'root', children: [{type: 'womTable', children: [{type: 'womTableRow', children: [
→   {type: 'womTableCell', children: [
→     {type: 'paragraph', children: [{type: 'text', value: ' Id '}]}
→   ]},
→   {type: 'womTableCell', children: [
→     {type: 'paragraph', children: [{type: 'text', value: ' - '}]}
→   ]},
→   {type: 'womTableCell', children: []},
→ ]}]}]}

〉Пустая таблица
←#| |#
→ {type: 'text', value: '#| |#'}

〉Пустая таблица с внутренностями
←#| **//** |#
→ {type: 'paragraph', children: [
→   {type: 'text', value: '#| '},
→   {type: 'strong', children: [ {type: 'text', value: '//'}]},
→   {type: 'text', value: ' |#'}
→ ]}

〉Некорректые символы в начале таблицы
←#| абв**||ячейка|| |#
→ {type: 'root', children: [{type: 'womTable', children: [{type: 'womTableRow', children: [
→   {type: 'womTableCell', children: [
→     {type: 'paragraph', children: [{type: 'text', value: 'ячейка'}]}
→   ]}
→ ]}]}]}

〉Некорректые символы в конце таблицы
←#| ||ячейка|| абв**|#
→ {type: 'root', children: [{type: 'womTable', children: [{type: 'womTableRow', children: [
→   {type: 'womTableCell', children: [
→     {type: 'paragraph', children: [{type: 'text', value: 'ячейка'}]}
→   ]}
→ ]}]}]}

〉Битый кусок таблицы 1
←#|
→ {type: 'text', value: '#|'}

〉Битый кусок таблицы 2
←|#
→ {type: 'text', value: '|#'}

〉Битый кусок раскладки 1
←#||
→ {type: 'text', value: '#||'}

〉Битый кусок раскладки 2
←||#
→ {type: 'text', value: '||#'}

〉Битый кусок раскладка + таблица
←#|| |#
→ {type: 'text', value: '#|| |#'}

〉Битый кусок раскладка + таблица впритык
←#|||#
→ {type: 'text', value: '#|||#'}

〉Битый кусок раскладка + # (или таблица без данных)
←#||#
→ {type: 'text', value: '#||#'}

〉Таблица со строкой впритык 1
←#||| x || |#
→ {type: 'root', children: [{type: 'womTable', children: [{type: 'womTableRow', children: [
→   {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: ' x '}]}]}
→ ]}]}]}

〉Таблица со строкой впритык 2
←#||| x |||#
→ {type: 'root', children: [{type: 'womTable', children: [{type: 'womTableRow', children: [
→   {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: ' x '}]}]}
→ ]}]}]}

〉Таблица с одной строкой и двумя колонками впритык
←#||| | x |||#
→ {type: 'root', children: [{type: 'womTable', children: [{type: 'womTableRow', children: [
→   {type: 'womTableCell', children: []},
→   {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: ' x '}]}]}
→ ]}]}]}

〉Таблица с двумя строками впритык
←#|||x||||y|||#
→ {type: 'root', children: [{type: 'womTable', children: [
→   {type: 'womTableRow', children: [
→     {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: 'x'}]}]}]},
→   {type: 'womTableRow', children: [
→     {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: 'y'}]}]}]},
→ ]}]}

〉Раскладка с двумя строками впритык
←#||||c1|c2||||c3|c4||||#
→ {type: 'root', children: [{type: 'womTable', kind: 'layout', children: [
→   {type: 'womTableRow', children: [
→     {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: 'c1'}]}]},
→     {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: 'c2'}]}]},
→   ]},
→   {type: 'womTableRow', children: [
→     {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: 'c3'}]}]},
→     {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: 'c4'}]}]},
→   ]},
→ ]}]}

〉Раскладка с колонкой впритык
←#|| || x ||||#
→ {type: 'root', children: [{type: 'womTable', kind: 'layout', children: [
→   {type: 'womTableRow', children: [
→     {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: ' x '}]}]}
→ ]}]}]}

〉Не раскладка с колонкой впритык
←#|||| x ||||#
→ {type: 'root', children: [{type: 'womTable', kind: 'layout', children: [
→   {type: 'womTableRow', children: [
→     {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: ' x '}]}]},
→ ]}]}]}

〉Раскладка с двумя колонками впритык
←#|| ||x||||y||||#
→ {type: 'root', children: [{type: 'womTable', kind: 'layout', children: [
→   {type: 'womTableRow', children: [
→     {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: 'x'}]}]}]},
→   {type: 'womTableRow', children: [
→     {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: 'y'}]}]}]},
→ ]}]}

〉Не раскладка с двумя колонками впритык
←#||||x||||y||||#
→ {type: 'root', children: [{type: 'womTable', kind: 'layout', children: [
→   {type: 'womTableRow', children: [
→     {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: 'x'}]}]},
→   ]},
→   {type: 'womTableRow', children: [
→     {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: 'y'}]}]},
→   ]},
→ ]}]}

〉Таблица в начале, раскладка в конце
←#||| x ||||#abcdef
→ {type: 'root', children: [
→   {type: 'womTable', children: [
→     {type: 'womTableRow', children: [
→       {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: ' x '}]}]},
→       {type: 'womTableCell', children: []},
→     ]}]},
→   {type: 'paragraph', children: [{type: 'text', value: 'abcdef'}]},
→ ]}

〉Раскладка в начале, таблица в конце
←#|| || x || |#
→ {type: 'root', children: [{type: 'womTable', kind: 'layout', children: [
→   {type: 'womTableRow', children: [
→     {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: ' x '}]}]}
→   ]}]}]}

〉Раскладка в начале, таблица в конце, с битой строкой
←#|| || x | |#
→ {type: 'text', value: '#|| || x | |#'}

〉Таблица с незакрытой строкой (WIKI-11913)
←#| ||a|| || |#
←#| ||b|| |#
→ {type: 'root', children: [
→   {type: 'paragraph', children: [{type: 'text', value: '#| ||a|| || |#'}]},
→   {type: 'womTable', children: [
→     {type: 'womTableRow', children: [
→       {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: 'b'}]}]}
→     ]}]}
→ ]}

〉Таблица с неправильно закрытой строкой (WIKI-11913)
←#|
←||a|b||
←||a|b|
←|#
←#| ||b|| |#
→ {type: 'root', children: [
→   {type: 'paragraph', children: [{type: 'text', value: '#|\n||a|b||\n||a|b|\n|#'}]},
→   {type: 'womTable', children: [
→     {type: 'womTableRow', children: [
→       {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: 'b'}]}]}
→     ]}]}
→ ]}

〉Таблица с неоткрытой строкой (WIKI-11913)
←#|
←||a|b||
←a|b||
←|#
←#| ||b|| |#
→ {type: 'root', children: [
→   {type: 'paragraph', children: [{type: 'text', value: '#|\n||a|b||\na|b||\n|#'}]},
→   {type: 'womTable', children: [
→     {type: 'womTableRow', children: [
→       {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: 'b'}]}]}
→     ]}]}
→ ]}

〉Таблица с неправильно открытой строкой (WIKI-11913)
←#|
←||a|b||
←|a|b||
←|#
←#| ||b|| |#
→ {type: 'root', children: [
→   {type: 'paragraph', children: [{type: 'text', value: '#|\n||a|b||\n|a|b||\n|#'}]},
→   {type: 'womTable', children: [
→     {type: 'womTableRow', children: [
→       {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: 'b'}]}]}
→     ]}]}
→ ]}

〉Не ломаемся на #| 1 | ##||# (WIKI-11913)
←#| 1 | ##||#
→ {type: 'text', value: '#| 1 | ##||#'}

〉Таблица с womColor в ячейке
←#|
←|| a | b ||
←|| c | #ddd ||
←|#
→ {type: 'root', children: [{type: 'womTable', children: [
→   {type: 'womTableRow', children: [
→     {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: ' a '}]}]},
→     {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: ' b '}]}]}
→   ]},
→   {type: 'womTableRow', children: [
→     {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: ' c '}]}]},
→     {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: ' '}, {type: 'color', raw: '#ddd', value: 'ddd'}, {type: 'text', value: ' '}]}]}
→   ]}
→ ]}]}

〉Таблица с womMonospace в ячейке
←#|
←|| a | b ||
←|| c | ##monospace## ||
←|#
→ {type: 'root', children: [{type: 'womTable', children: [
→   {type: 'womTableRow', children: [
→     {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: ' a '}]}]},
→     {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: ' b '}]}]}
→   ]},
→   {type: 'womTableRow', children: [
→     {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: ' c '}]}]},
→     {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: ' '}, {type: 'womMonospace', children: [{type: 'text', value: 'monospace'}]}, {type: 'text', value: ' '}]}]}
→   ]}
→ ]}]}

〉Таблица с womMonospace впритык
←#| ||ячейка1|##ячейка2 - моноширинная##|| |#
→ {type: 'root', children: [{type: 'womTable', children: [
→   {type: 'womTableRow', children: [
→     {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: 'ячейка1'}]}]},
→     {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'womMonospace', children: [{type: 'text', value: 'ячейка2 - моноширинная'}]}]}]}
→   ]}
→ ]}]}

〉Таблица с битой вложенной таблицей
←#|
←|| #| ||a| |# | b ||
←|| c | d ||
←|#
→ {type: 'root', children: [{type: 'womTable', children: [
→   {type: 'womTableRow', children: [
→     {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: ' #| ||a| |# '}]}]},
→     {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: ' b '}]}]}
→   ]},
→   {type: 'womTableRow', children: [
→     {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: ' c '}]}]},
→     {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: ' d '}]}]}
→   ]}
→ ]}]}

〉Таблица с битой вложенной таблицей 2
←#|
←||a| #| |b ||
←||c|d||
←|#
→ {type: 'text', value: '#|\n||a| #| |b ||\n||c|d||\n|#'}

〉Таблица c текстом вокруг
←lalala #|
←||a|b||
←||c|d||
←|# lalala
→ {type: 'root', children: [
→   {type: 'paragraph', children: [
→     {type: 'text', value: 'lalala '},
→     {type: 'womTable', children: [
→       {type: 'womTableRow', children: [
→         {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: 'a'}]}]},
→         {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: 'b'}]}]}
→       ]},
→       {type: 'womTableRow', children: [
→         {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: 'c'}]}]},
→         {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: 'd'}]}]}
→       ]}
→     ]},
→     {type: 'text', value: ' lalala'}
→   ]}]}

〉Таблица с экранированием (~) внутри
←#|
←||a| ~#|||w|||# |b||
←||c|d||
←|#
→ {type: 'root', children: [{type: 'womTable', children: [
→   {type: 'womTableRow', children: [
→     {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: 'a'}]}]},
→     {type: 'womTableCell', children: [{type: 'paragraph', children: [
→       {type: 'text', value: ' '},
→       {type: 'womEscape', raw: '~#|||w|||#', value: '#|||w|||#'},
→       {type: 'text', value: ' '},
→     ]}]},
→     {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: 'b'}]}]}
→   ]},
→   {type: 'womTableRow', children: [
→     {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: 'c'}]}]},
→     {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: 'd'}]}]}
→   ]}
→ ]}]}

〉Таблица с экранированием (~) внутри 2
←#|
←||a| ~#| |b||
←||c|d||
←|#
→ {type: 'root', children: [{type: 'womTable', children: [
→   {type: 'womTableRow', children: [
→     {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: 'a'}]}]},
→     {type: 'womTableCell', children: [{type: 'paragraph', children: [
→       {type: 'text', value: ' '},
→       {type: 'womEscape', raw: '~#|', value: '#|'},
→       {type: 'text', value: ' '},
→     ]}]},
→     {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: 'b'}]}]}
→   ]},
→   {type: 'womTableRow', children: [
→     {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: 'c'}]}]},
→     {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: 'd'}]}]}
→   ]}
→ ]}]}

〉Таблица с экранированием ("") внутри
←#|
←||a| ""#| || escaped || |#"" |b||
←||c|d||
←|#
→ {type: 'root', children: [{type: 'womTable', children: [
→   {type: 'womTableRow', children: [
→     {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: 'a'}]}]},
→     {type: 'womTableCell', children: [{type: 'paragraph', children: [
→       {type: 'text', value: ' '},
→       {type: 'womEscape', raw: '""#| || escaped || |#""', value: '#| || escaped || |#'},
→       {type: 'text', value: ' '},
→     ]}]},
→     {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: 'b'}]}]}
→   ]},
→   {type: 'womTableRow', children: [
→     {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: 'c'}]}]},
→     {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: 'd'}]}]}
→   ]}
→ ]}]}

〉Таблица с экранированием ("") внутри 2
←#|
←||a| ""#| || escaped"" |b||
←||c|d||
←|#
→ {type: 'root', children: [{type: 'womTable', children: [
→   {type: 'womTableRow', children: [
→     {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: 'a'}]}]},
→     {type: 'womTableCell', children: [{type: 'paragraph', children: [
→       {type: 'text', value: ' '},
→       {type: 'womEscape', raw: '""#| || escaped""', value: '#| || escaped'},
→       {type: 'text', value: ' '},
→     ]}]},
→     {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: 'b'}]}]}
→   ]},
→   {type: 'womTableRow', children: [
→     {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: 'c'}]}]},
→     {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: 'd'}]}]}
→   ]}
→ ]}]}

〉Таблица с различным экранированием
←#||||~#||||#
←~**текст**
←~~|
←""|текст|""
←""""
←""#|| |текст1
←текст2| ||#""
←||||#
→ {type: 'root', children: [{type: 'womTable', kind: 'layout', children: [
→   {type: 'womTableRow', children: [
→     {type: 'womTableCell', children: [{type: 'paragraph', children: [
→       {type: 'womEscape', raw: '~#||||#', value: '#||||#'},
→       {type: 'text', value: '\n'},
→       {type: 'womEscape', raw: '~**текст**', value: '**текст**'},
→       {type: 'text', value: '\n'},
→       {type: 'womEscape', raw: '~~', value: '~'},
→       {type: 'text', value: '|\n'},
→       {type: 'womEscape', raw: '""|текст|""', value: '|текст|'},
→       {type: 'text', value: '\n'},
→       {type: 'womEscape', raw: '""""', value: ''},
→       {type: 'text', value: '\n'},
→       {type: 'womEscape', raw: '""#|| |текст1\nтекст2| ||#""', value: '#|| |текст1\nтекст2| ||#'},
→     ]}
→   ]}
→ ]}]}]}

〉Таблица с пробелами и переносами строк в ячейке
←#| ||
←ячейка_1_1
←|
← \n   ячейка_1_2  \n  \nячейка_1_3
←ячейка_1_4
←  \n
←|| |#
→ {type: 'root', children: [{type: 'womTable', children: [
→   {type: 'womTableRow', children: [
→     {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: 'ячейка_1_1'}]}]},
→     {type: 'womTableCell', children: [{type: 'paragraph', children: [
→       {type: 'text', value: ' \\n   ячейка_1_2  \\n  \\nячейка_1_3\nячейка_1_4\n  \\n'},
→     ]}]}
→   ]}
→ ]}]}

〉Таблица с пробелами и переносами строк
←#||||\xa0||||#
←#|\xa0||cell1\u2006
←\u2002row2||\u3000|#
→ {type: 'root', children: [
→   {type: 'womTable', kind: 'layout', children: [
→     {type: 'womTableRow', children: [
→       {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: '\\xa0'}]}]}
→     ]}
→   ]},
→   {type: 'womTable', children: [
→     {type: 'womTableRow', children: [
→       {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: 'cell1\\u2006\n\\u2002row2'}]}]}
→     ]}
→   ]},
→ ]}

〉Таблица с вложенным вики-текстом
←#||||**текст**|##текст1##|++текст2++|//текст3//|!!текст4!!|__текст5__|??текст6??|!!(green)текст7!!|--текст8--||||#
→ {type: 'root', children: [{type: 'womTable', kind: 'layout', children: [
→   {type: 'womTableRow', children: [
→     {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'strong', children: [{type: 'text', value: 'текст'}]}]}]},
→     {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'womMonospace', children: [{type: 'text', value: 'текст1'}]}]}]},
→     {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'womSmall', children: [{type: 'text', value: 'текст2'}]}]}]},
→     {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'womItalic', children: [{type: 'text', value: 'текст3'}]}]}]},
→     {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'womRemark', color: { type: 'color', value: '@red', raw: null}, children: [{type: 'text', value: 'текст4'}]}]}]},
→     {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'womUnderline', children: [{type: 'text', value: 'текст5'}]}]}]},
→     {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'womQuestion', children: [{type: 'text', value: 'текст6'}]}]}]},
→     {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'womRemark', color: { type: 'color', value: '@green', raw: 'green'}, children: [{type: 'text', value: 'текст7'}]}]}]},
→     {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'womStrike', children: [{type: 'text', value: 'текст8'}]}]}]}
→   ]}
→ ]}]}
color: { type: 'color', value: 'green', raw: 'green'}
〉Таблица c пересечением маркеров
←#||||text1[[*text2||||#text3]]
→ {type: 'root', children: [
→   {type: 'womTable', kind: 'layout', children: [
→     {type: 'womTableRow', children: [
→       {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: 'text1\[\[*text2'}]}]},
→     ]},
→   ]},
→   {type: 'paragraph', children: [{type: 'text', value: 'text3\]\]'}]}
→ ]}

〉Таблица с ссылками
←#||
←||
←http://st.woof-team.ru/WIKI-456|
←http://st.woof-team.ru/WIKI-789|
←http://st.woof-team.ru/234
←||
←||#
→ {type: 'root', children: [{type: 'womTable', kind: 'layout', children: [
→   {type: 'womTableRow', children: [
→     {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'link', title: null, url: 'http://st.woof-team.ru/WIKI-456', children: [{type: 'text', value: 'http://st.woof-team.ru/WIKI-456'}]}]}]},
→     {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'link', title: null, url: 'http://st.woof-team.ru/WIKI-789', children: [{type: 'text', value: 'http://st.woof-team.ru/WIKI-789'}]}]}]},
→     {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'link', title: null, url: 'http://st.woof-team.ru/234', children: [{type: 'text', value: 'http://st.woof-team.ru/234'}]}]}]}
→   ]}
→ ]}]}

〉Таблица с womHtml
←#||||<# html-start <input type="<[text]>"> #>|
←<##>
←||||#
→ {type: 'root', children: [{type: 'womTable', kind: 'layout', children: [
→   {type: 'womTableRow', children: [
→     {type: 'womTableCell', children: [{type: 'womHtml', value: ' html-start <input type="<[text]>"> '}]},
→     {type: 'womTableCell', children: [{type: 'womHtml', value: ''}]},
→   ]}
→ ]}]}


## tilde-based

〉Код через ~
←~~~
←code
←~~~
→ {type: 'root', children: [{type: 'code', lang: null, value: 'code'}]}

〉Тильда ~ внутри текста
←Тильда ~ внутри текста
→ {type: 'paragraph', children: [
→   {type: 'text', value: 'Тильда ~ внутри текста'},
→ ]}

〉~~strike~~ some text ~~~ ~!!red!!
←~~strike~~ some text ~~~ ~!!red!!
→ {type: 'paragraph', children: [
→   {type: 'delete', children: [{type: 'text', value: 'strike'}]},
→   {type: 'text', value: ' some text '},
→   {type: 'womEscape', raw: '~~', value: '~'},
→   {type: 'text', value: '~ '},
→   {type: 'womEscape', raw: '~!!red!!', value: '!!red!!'}
→ ]}

〉~~ ~~
←~~ ~~
→ {type: 'paragraph', children: [
→   {type: 'womEscape', raw: '~~', value: '~'},
→   {type: 'text', value: ' '},
→   {type: 'womEscape', raw: '~~', value: '~'}
→ ]}

〉aa ~bb--- cc
←aa ~bb--- cc
→ {type: 'paragraph', children: [
→   {type: 'text', value: 'aa '},
→   {type: 'womEscape', raw: '~bb---', value: 'bb---'},
→   {type: 'text', value: ' cc'}
→ ]}

〉aa ~~bb--- cc
←aa ~~bb--- cc
→ {type: 'paragraph', children: [
→   {type: 'text', value: 'aa '},
→   {type: 'womEscape', raw: '~~', value: '~'},
→   {type: 'text', value: 'bb'},
→   {type: 'womBreak', raw: '---'},
→   {type: 'text', value: ' cc'}
→ ]}

## Экшны (actions)

〉Экшн без пробелов после открывающих и перед закрывающими скобками, с параметрами
←{{linkstree root=HomePage levels}}
→{type: 'womAction', name: 'linkstree', params: { root: 'HomePage', levels: null }}

〉Экшн без пробелов после открывающих и перед закрывающими скобками, с параметрами
←{{ linkstree root=HomePage levels }}
→{type: 'womAction', name: 'linkstree', params: { root: 'HomePage', levels: null }}

〉Экшн без пробелов после открывающих и перед закрывающими скобками, без параметров
←{{linkstree}}
→{type: 'womAction', name: 'linkstree', params: {}}

〉Экшн без пробела после открывающих скобок и с пробелом перед закрывающими, с текстом перед ним
←blablaska {{n root=HomePage }}
→[{ type: 'text', value: 'blablaska ' }, {type: 'womAction', name: 'n', params: { root: 'HomePage' }}]

〉Два экшена в строке через текст
←{{a}} text {{b}}
→[{ type: 'womAction', name: 'a', params: {} }, { type: 'text', value: ' text ' }, { type: 'womAction', name: 'b', params: {} }]

〉Два экшена подряд в строке
←{{a}}{{b}}
→[{ type: 'womAction', name: 'a', params: {} }, { type: 'womAction', name: 'b', params: {} }]

〉Экшн с параметрами с кавычками и без
←{{iframe src="https://wiki.woofmd-team.ru" frameborder=0 width=700px height=600px scrolling=no}}
→{type: 'womAction', name: 'iframe', params: { src: 'https://wiki.woofmd-team.ru', frameborder: '0', width: '700px', height: '600px', scrolling: 'no' }}
