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
→ [{type: 'text', value: 'Привет'}, {type: 'womRemark', color: {type: 'color', value: '@red', raw: null}, children: [{type: 'text', value: '!!!!!!!'}]}]

〉Множественные ##
←Привет###########
→ [{type: 'text', value: 'Привет'}, {type: 'womMonospace', children: [{type: 'text', value: '#######'}]}]

〉Множественные ??
←Привет???????????
→ [{type: 'text', value: 'Привет'}, {type: 'womQuestion', children: [{type: 'text', value: '???????'}]}]

〉¡ Множественные **
←Привет***********
→ {type: 'text', value: 'Привет***********'}

〉Множественные ++
←Привет+++++++++++
→ [{type: 'text', value: 'Привет'}, {type: 'womSmall', children: [{type: 'text', value: '+++++++'}]}]

〉Множественные ^^
←Привет^^^^^^^^^^^
→ [{type: 'text', value: 'Привет'}, {type: 'womSuperscript', children: [{type: 'text', value: '^^^^^^^'}]}]

〉Множественные vv
←Приветvvvvvvvvvvv
→ [{type: 'text', value: 'Привет'}, {type: 'womSubscript', children: [{type: 'text', value: 'vvvvvvv'}]}]

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

〉¡ Начальные множественные !!! с цветом
←!!!(grey)Замечание!!!!!
→ [{type: 'text', value: '!'}, {type: 'womRemark', color: {type: 'color', value: '@red', raw: null}, children: [
→   {type: 'text', value: 'Замечание'}]}]

〉¡ Начальные множественные !!! с вложением и соседями
←!! !!(green)Крас!! !! !!(grey)Замечание!!!!! !!(green)Зел!! !!(yellow)Жел!!
→ [{type: 'womRemark', children: [{type: 'text', value: ' !!(grey)Замечание!!!'}]}]

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

〉Разделитель
←---
↑ HYPHENS
→ {type: 'root', children: [{type: 'thematicBreak'}]}

〉Разделитель
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

〉Переводы пачкой с зачеркнутым
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

〉Форматтер битым куском
←Начинаем %%(js) и не заканчиваем
→ {type: 'text', value: 'Начинаем %%(js) и не заканчиваем'}

〉Жирный форматтер
←Жир **%%code%%** ?
→ [{type: 'text', value: 'Жир '},
→  {type: 'strong', children: [{type: 'womFormatter', value: 'code'}]},
→  {type: 'text', value: ' ?'},
→ ]

〉¡ Форматтер с множественными %%
←%%
←Hello
←%%%%%%%%%%%%%%%
←World
←%%%%%%%%%%%%%%%
←%%
→ {type: 'root', children: [{type: 'womFormatter', value: '\nHello\n%%%%%%%%%%%%%%%\nWorld\n%%%%%%%%%%%%%%%\n'}]}

〉Цитирование текста
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

〉Термин
←(?Термин Вот тут всплыло развернутое определение термина?)
↑ LDEFINITION TEXT WS TEXT RDEFINITION
→ {type: 'root', children: [{type: 'womDefinition', title: 'Термин', equals: false, children: [
→   {type: 'paragraph', children: [{type: 'text', value: 'Вот тут всплыло развернутое определение термина'}]}
→ ]}]}

〉Термин с пробелами
←(?Термин с пробелами==И тут тоже всплыло развернутое определение термина с пробелами?)
↑ LDEFINITION TEXT EQUALS TEXT RDEFINITION
→ {type: 'root', children: [{type: 'womDefinition', title: 'Термин с пробелами', equals: true, children: [
→   {type: 'paragraph', children: [{type: 'text', value: 'И тут тоже всплыло развернутое определение термина с пробелами'}]}
→ ]}]}

〉Термины подряд разные
←(?Термин Описалово?)(?Еще==Еще описалово?)
↑ LDEFINITION TEXT WS TEXT RDEFINITION
→ {type: 'root', children: [
→   {type: 'womDefinition', title: 'Термин', equals: false, children: [
→     {type: 'paragraph', children: [{type: 'text', value: 'Описалово'}]}
→   ]},
→   {type: 'womDefinition', title: 'Еще', equals: true, children: [
→     {type: 'paragraph', children: [{type: 'text', value: 'Еще описалово'}]}
→   ]}
→ ]}

〉Термины в тексте
←Текст и тут (?Термин Описалово?), а потом еще текст и (?Еще термин==Еще описалово?). И текст в конце
↑ LDEFINITION TEXT WS TEXT RDEFINITION
→ {type: 'paragraph', children: [
→   {type: 'text', value: 'Текст и тут '},
→   {type: 'womDefinition', title: 'Термин', equals: false, children: [
→     {type: 'text', value: 'Описалово'}
→   ]},
→   {type: 'text', value: ', а потом еще текст и '},
→   {type: 'womDefinition', title: 'Еще термин', equals: true, children: [
→     {type: 'text', value: 'Еще описалово'}
→   ]},
→   {type: 'text', value: '. И текст в конце'},
→ ]}

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

〉Вывод HTML как есть
←<# <input type="text"> #>
↑ LHTML TEXT RHTML
→ {type: 'womHtml', value: ' <input type="text"> '}

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

〉Один знак равно это не заголовок
←= Не заголовок
→ {type: 'text', value: '= Не заголовок'}

〉Большой заголовок
←== Большой заголовок
→ {type: 'root', children: [{type: 'womHeading', depth: 1, expandable: false, children: [{type: 'text', value: 'Большой заголовок'}]}]}

〉Большой заголовок
←==+ Большой раскрывающийся заголовок
→ {type: 'root', children: [{type: 'womHeading', depth: 1, expandable: true, children: [{type: 'text', value: 'Большой раскрывающийся заголовок'}]}]}

〉Заголовок поменьше
←=== Заголовок поменьше
→ {type: 'root', children: [{type: 'womHeading', depth: 2, expandable: false, children: [{type: 'text', value: 'Заголовок поменьше'}]}]}

〉Средний заголовок
←==== Средний заголовок
→ {type: 'root', children: [{type: 'womHeading', depth: 3, expandable: false, children: [{type: 'text', value: 'Средний заголовок'}]}]}

〉Маленький заголовок
←===== Маленький заголовок
→ {type: 'root', children: [{type: 'womHeading', depth: 4, expandable: false, children: [{type: 'text', value: 'Маленький заголовок'}]}]}

〉Ну совсем маленький заголовок
←====== Ну совсем маленький заголовок
→ {type: 'root', children: [{type: 'womHeading', depth: 5, expandable: false, children: [{type: 'text', value: 'Ну совсем маленький заголовок'}]}]}

〉Меньше некуда заголовок
←======= Меньше некуда заголовок
→ {type: 'root', children: [{type: 'womHeading', depth: 6, expandable: false, children: [{type: 'text', value: 'Меньше некуда заголовок'}]}]}

〉Меньше некуда заголовок с равно на конце
←======= Меньше некуда заголовок ====================
→ {type: 'root', children: [{type: 'womHeading', depth: 6, expandable: false, children: [{type: 'text', value: 'Меньше некуда заголовок'}]}]}

〉Меньше некуда заголовок с раскрывашкой
←=======+ Меньше некуда раскрывающийся заголовок
→ {type: 'root', children: [{type: 'womHeading', depth: 6, expandable: true, children: [{type: 'text', value: 'Меньше некуда раскрывающийся заголовок'}]}]}

〉Много знаков равно это тоже не заголовок
←======== Не заголовок
→ {type: 'text', value: '======== Не заголовок'}

〉Заголовок с форматированием
←== Библиотека %%глазировка%%
→ {type: 'root', children: [
→   {type: 'womHeading', depth: 1, expandable: false, children: [
→     {type: 'text', value: 'Библиотека '},
→     {type: 'womFormatter', value: 'глазировка'}
→   ]}]}

〉¡ Сноски
←Текст, потом сноска[[*]] и вторая[[**]]
→ {type: 'paragraph', children: [{type: 'text', value: 'Текст, потом сноска'}, {type: 'womFootnoteReference', identifier: '*'}, {type: 'text', value: ' и вторая'}, {type: 'womFootnoteReference', identifier: '**'}]}

〉¡ Еще сноски
←Текст, потом цифровая сноска[[*1]] и вторая[[*2]]
→ {type: 'paragraph', children: [{type: 'text', value: 'Текст, потом цифровая сноска'}, {type: 'womFootnoteReference', identifier: '*1'}, {type: 'text', value: ' и вторая'}, {type: 'womFootnoteReference', identifier: '*2'}]}

〉¡ Расшифровка первой сноски
←[[#*]] Расшифровка первой сноски
→ {type: 'womFootnoteDefinition', identifier: '*', children: [{type: 'paragraph', children: [{type: 'text', value: 'Расшифровка первой сноски'}]}]}

〉¡ Расшифровка второй сноски
←[[#**]] Расшифровка второй сноски
→ {type: 'womFootnoteDefinition', identifier: '**', children: [{type: 'paragraph', children: [{type: 'text', value: 'Расшифровка второй сноски'}]}]}

〉¡ Расшифровка цифровой сноски
←[[#1]] Расшифровка цифровой сноски
→ {type: 'womFootnoteDefinition', identifier: '1', children: [{type: 'paragraph', children: [{type: 'text', value: 'Расшифровка цифровой сноски'}]}]}

〉¡ Расшифровка второй цифровой сноски
←[[#2]] Расшифровка второй цифровой сноски
→ {type: 'womFootnoteDefinition', identifier: '2', children: [{type: 'paragraph', children: [{type: 'text', value: 'Расшифровка второй цифровой сноски'}]}]}

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

〉¡ Списки
←Списки:
←  Отступ
←    Двойной отступ
→ {type: 'list', ordered: false, children: [{type: 'item', children: [
→   {type: 'text', value: 'Отступ'},
→   {type: 'list', children: [{type: 'item', children: [{type: 'text', value: 'Двойной отступ'}]}]}
→ ]}]}

〉Ненумерованный список
←* ненумерованный список
←* ненумерованный список-2
→ {type: 'root', children: [{type: 'list', ordered: false, start: null, loose: false, children: [
→   {type: 'listItem', loose: false, checked: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'ненумерованный список'}]}]},
→   {type: 'listItem', loose: false, checked: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'ненумерованный список-2'}]}]}
→ ]}]}

〉¡ Нумерованный список
←1. нумерованный список
←1. нумерованный список-2
←1.#8 нумерованный список-2, с пропуском пунктов
←3. это девятый пункт
→ {type: 'root', children: [{type: 'list', ordered: true, start: 1, loose: false, children: [
→   {type: 'listItem', loose: false, checked: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'нумерованный список'}]}]},
→   {type: 'listItem', loose: false, checked: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'нумерованный список-2'}]}]},
→   {type: 'listItem', loose: true, checked: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'нумерованный список-2, с пропуском пунктов'}]}]},
→   {type: 'listItem', loose: false, checked: null, children: [{type: 'paragraph', children: [{type: 'text', value: 'это девятый пункт'}]}]},
→ ]}]}

〉¡ Нумерованный список ABC
←A. Верхний регистр
←A. Верхний регистр-2
→ null

〉¡ Нумерованный список abc
←a. Нижний регистр
←a. Нижний регистр-2
→ null

〉¡ Нумерованный список IVX
←I. Римские цифры
←I. Римские цифры-2
→ null

〉Списки с тудушками
←- [x] Finish my changes
←- [ ] Push my commits to GitHub
←- [x] Open a pull request
→ {type: 'root', children: [
→   {type: 'list', ordered: false, start: null, loose: false, children: [
→     {type: 'listItem', loose: false, checked: true, children: [
→       {type: 'paragraph', children: [
→         {type: 'text', value: 'Finish my changes'}
→       ]}]},
→     {type: 'listItem', loose: false, checked: false, children: [
→       {type: 'paragraph', children: [
→         {type: 'text', value: 'Push my commits to GitHub'}
→       ]}]},
→     {type: 'listItem', loose: false, checked: true, children: [
→       {type: 'paragraph', children: [
→         {type: 'text', value: 'Open a pull request'}
→       ]}]},
→   ]}
→ ]}

〉¡ Вложенные списки
←1. список
←    1. вложенный список
←      * ещё более вложенный список
←    1. вложенный список-2
←2. список-2
→ null

〉¡ Свернутые вложенные списки
←1. список
←    1. Вложенный список
←    1. вложенный список
←    2.+ вложенный список, свернутый пункт
←      * Скрытый пункт списка
←        * Скрытый пункт списка
←      * Скрытый пункт списка
←2. список-2
→ null

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

〉Тикет в help
←help#:200912039020818
→ {type: 'womHelp', value: '200912039020818', raw: 'help#:200912039020818'}

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
→   realm: null}

〉Полная ссылка на тикет
←QUEUE-1234[ --Важный тикет в очереди-- ]( mrtwister )
→ {type: 'womTicket',
→   value: 'QUEUE-1234',
→   title: [
→     {type: 'text', value: ' '},
→     {type: 'womStrike', children: [{type: 'text', value: 'Важный тикет в очереди'}]},
→     {type: 'text', value: ' '},
→   ],
→   assignee: 'mrtwister',
→   realm: null}

〉Встроенный в текст номер тикета не должен парситься
←//home/woofmd/SIDEBYSIDE-100500/yes-yes
→ {type: 'text', value: '//home/woofmd/SIDEBYSIDE-100500/yes-yes'}


кто:egorova   → {type: 'womStaff', value: 'egorova', case: 'кто',   at: null}
кого:egorova  → {type: 'womStaff', value: 'egorova', case: 'кого',  at: null}
кому:egorova  → {type: 'womStaff', value: 'egorova', case: 'кому',  at: null}
кем:egorova   → {type: 'womStaff', value: 'egorova', case: 'кем',   at: null}
оком:egorova  → {type: 'womStaff', value: 'egorova', case: 'оком',  at: null}
staff:egorova → {type: 'womStaff', value: 'egorova', case: 'staff', at: null}
egorova@      → {type: 'womStaff', value: 'egorova', case: null,    at: 'suffix'}
@egorova      → {type: 'womStaff', value: 'egorova', case: null,    at: 'prefix'}

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

〉Тоблица из html
←<# <table border=1> <tr><td>1</td><td>2</td></tr> <tr><td>3</td><td>4</td></tr> </table> #>
→ {type: 'womHtml', value: ' <table border=1> <tr><td>1</td><td>2</td></tr> <tr><td>3</td><td>4</td></tr> </table> '}

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
←#| ||  #| || xxx || |#  || |#
→ {type: 'root', children: [
→   {type: 'womTable', children: [
→     {type: 'womTableRow', children: [
→       {type: 'womTableCell', children: [
→   {type: 'womTable', children: [
→     {type: 'womTableRow', children: [
→       {type: 'womTableCell', children: [{type: 'paragraph', children: [{type: 'text', value: ' xxx '}]}]}
→     ]} ]} ]} ]} ]} ]}

〉¡ Вложенные таблицы
←#||
←|| cell10 | #| ||cell11.0|| |# | #| ||cell12.0|| |# | cell13 ||
←|| cell20 | #| ||cell21.0|| |# | #| ||cell22.0|| |# | cell13 ||
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
→     {type: 'womTableRow', children: [,
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

〉Одинокая ссылка в круглых скобках
←((http://www.woofmd.ru))
→ {type: 'womLink', url: 'http://www.woofmd.ru', brackets: false, children: []}

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

〉Ссылки на якорь
←((#test)) и ((/HomePage#TOC_1))
→ {type: 'paragraph', children: [
→   {type: 'womLink', url: '#test', brackets: false, children: []},
→   {type: 'text', value: ' и '},
→   {type: 'womLink', url: '/HomePage#TOC_1', brackets: false, children: []}
→ ]}

""**Жирный текст**"" → {type: 'womEscape', raw: '""**Жирный текст**""', value: '**Жирный текст**'}
¡ ~**Жирный_текст** → {type: 'womEscape', raw: '~**Жирный_текст**', value: '**Жирный_текст**'}

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

〉¡ Сложненький список
←1. Ordered List
←2. text %%code%% text
←3. text %%code code code
←code code code code code code code code code code
←code code code code code code code code code code code code code code code code code code%% text
←4. text
←5. %%(cs)
←codecodecodecodecodecodecodecodecode
←codecodecodecodecode
←code code code code code code code code code code code code code code code code code code code code code code code code code code code code code code code code code code code code
←%%
←6. вложенный список
←    2.+ вложенный список, свёртнутый пункт
←      * %%code code code code code code code code code code code code code code code code code code code code code code code code code code code code code code code code code code code code code code code code code code %%
←        * %%codecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecode%%
←      * Скрытый пункт %%списка%%
→ {type: 'list', children: [
→
→ ]}

〉Обычный кат
←<{обычный кат
←текст}>
→ {type: 'root', children: [
→   {type: 'womCut',
→     title: [{type: 'paragraph', children: [{type: 'text', value: 'обычный кат'}]}],
→     children: [{type: 'paragraph', children: [{type: 'text', value: 'текст'}]}]
→   }]}

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
