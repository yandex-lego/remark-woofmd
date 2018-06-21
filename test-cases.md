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

〉Выравнивание
←%%(wacko wrapper=text align=center) текст по центру %%
↑ PERCENTS LPAREN CONST WS CONST EQUAL CONST WS CONST EQUAL CONST RPAREN TEXT PERCENTS
→ {type: 'root', children: [{type: 'womFormatter', format: 'wacko', attributes: {wrapper: 'text', align: 'center'}, value: ' текст по центру '}]}

〉Цитирование текста
←<[ Цитирование текста ,
←длинного,
←с переносами
← ]>
↑ LQUOTING TEXT RQUOTING
→ {type: 'root', children: [{type: 'womBlockquote', children: [{type: 'paragraph', children: [{type: 'text', value: ' Цитирование текста ,\nдлинного,\nс переносами\n '}]}]}]}

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

// 〉Однострочное цитирование
// ←>> Однострочное цитирование
// ←>Да, это оно
// ←А это обычный текст
// → {type: 'root', children: [
// →   {type: 'blockquote', children: [
// →     {type: 'blockquote', children: [
// →       {type: 'paragraph', children: [{type: 'text', value: ' Однострочное цитирование'}]}
// →     ]},
// →     {type: 'paragraph', children: [{type: 'text', value: 'Да, это оно'}]}
// →   ]},
// →   {type: 'paragraph', children: [{type: 'text', value: 'А это обычный текст'}]}
// → ]}

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

〉Вывод HTML как есть
←<# <input type="text"> #>
↑ LHTML TEXT RHTML
→ {type: 'root', children: [{type: 'womHtml', value: ' <input type="text"> '}]}

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

// 〉Сноски
// ←Текст, потом сноска[[*]] и вторая[[**]]
// → {type: 'paragraph', children: [{type: 'text', value: 'Текст, потом сноска'}, {type: 'womFootnoteReference', identifier: '*'}, {type: 'text', value: ' и вторая'}, {type: 'womFootnoteReference', identifier: '**'}]}

// 〉Еще сноски
// ←Текст, потом цифровая сноска[[*1]] и вторая[[*2]]
// → {type: 'paragraph', children: [{type: 'text', value: 'Текст, потом цифровая сноска'}, {type: 'womFootnoteReference', identifier: '*1'}, {type: 'text', value: ' и вторая'}, {type: 'womFootnoteReference', identifier: '*2'}]}

// 〉Расшифровка первой сноски
// ←[[#*]] Расшифровка первой сноски
// → {type: 'womFootnoteDefinition', identifier: '*', children: [{type: 'paragraph', children: [{type: 'text', value: 'Расшифровка первой сноски'}]}]}

// 〉Расшифровка второй сноски
// ←[[#**]] Расшифровка второй сноски
// → {type: 'womFootnoteDefinition', identifier: '**', children: [{type: 'paragraph', children: [{type: 'text', value: 'Расшифровка второй сноски'}]}]}

// 〉Расшифровка цифровой сноски
// ←[[#1]] Расшифровка цифровой сноски
// → {type: 'womFootnoteDefinition', identifier: '1', children: [{type: 'paragraph', children: [{type: 'text', value: 'Расшифровка цифровой сноски'}]}]}

// 〉Расшифровка второй цифровой сноски
// ←[[#2]] Расшифровка второй цифровой сноски
// → {type: 'womFootnoteDefinition', identifier: '2', children: [{type: 'paragraph', children: [{type: 'text', value: 'Расшифровка второй цифровой сноски'}]}]}

〉Пример 1: без параметров
←%%(python)
←@requires_authorization
←def somefunc(param1, param2):
←    r'''A docstring'''
←    if param1 > param2: # interesting
←        print 'Gre\'ater'
←        print ''
←    return (param2 - param1 + 1) or None
←
←class SomeClass:
←    pass
←%%
→ {type: 'code', lang: 'python', flags: [], value: '...'}

〉Пример 2: nomark
←%%(python nomark)
←@requires_authorization
←def somefunc(param1, param2):
←    r'''A docstring'''
←    if param1 > param2: # interesting
←        print 'Gre\'ater'
←        print ''
←    return (param2 - param1 + 1) or None
←
←class SomeClass:
←    pass
←%%
→ {type: 'code', lang: 'python', flags: ['nomark'], value: '...'}

〉Пример 3: nohighlight
←%%(code nohighlight)
←@requires_authorization
←def somefunc(param1, param2):
←    r'''A docstring'''
←    if param1 > param2: # interesting
←        print 'Gre\'ater'
←        print ''
←    return (param2 - param1 + 1) or None
←
←class SomeClass:
←    pass
←%%
→ {type: 'code', lang: null, flags: ['nohighlight'], value: '...'}

〉Cut с питон функцией
←<{код функции
←%%(python)
←def is_pretty_num(n):
←    if len(n) > 4:
←        i = n[0]
←        for l in n[1:]:
←            if l != i:
←                i = 0
←                break
←        if i != 0:
←            return 1
←        i = int(n[0])
←        for l in n[1:]:
←            if int(l) == i + 1:
←                i += 1
←            else:
←                i = 0
←                break
←        if i != 0:
←            return 1
←    i = int(n[-1])
←    for l in n[::-1][1:]:
←        if int(l) == i + 1:
←            i += 1
←        else:
←            i = 0
←            break
←    if i != 0:
←        return 1
←%%
←}>
→ {type: 'cut', title: [{type: 'text', value: 'код функции'}], children: [{type: 'code', lang: 'python', flags: [], value: '...'}]}

〉Списки
←Списки:
←  Отступ
←    Двойной отступ
→ {type: 'list', ordered: false, children: [{type: 'item', children: [
→   {type: 'text', value: 'Отступ'},
→   {type: 'list', children: [{type: 'item', children: [{type: 'text', value: 'Двойной отступ'}]}]}
→ ]}]}

〉Нумерованный список
←* ненумерованный список
←* ненумерованный список-2
→ {type: 'list', ordered: false, children: [{type: 'item', value: 'ненумерованный список'}, {type: 'item', value: 'ненумерованный список-2'}]}

// 1. нумерованный список
// 1. нумерованный список-2
// 1.#8 нумерованный список-2, с пропуском пунктов
// 3. это девятый пункт

// A. Верхний регистр
// A. Верхний регистр-2

// a. Нижний регистр
// a. Нижний регистр-2

// I. Римские цифры
// I. Римские цифры-2

// 1. список
//     1. вложенный список
//       * ещё более вложенный список
//     1. вложенный список-2
// 2. список-2

// 1. список
//     1. Вложенный список
//     1. вложенный список
//     2.+ вложенный список, свернутый пункт
//       * Скрытый пункт списка
//         * Скрытый пункт списка
//       * Скрытый пункт списка
// 2. список-2

〉css formatter wrapper
←%%(css nomark wrapper=box align=left width=270 border=0 nomark)
←.d { font-size:70% }
←%%
→ {type: 'code', lang: 'css', flags: ['nomark', ['wrapper', 'box'], ['align', 'left'], {width: 270, border: 0}], value: '.d { font-size:70% }'}

// // Как мы видим, обёртка ##box## позволяет формировать удобные "меню", обтекаемые текстом. Кстати, есть специальный форматтер (box), который не делает ничего, кроме как оборачивает текст в эту обёртку.

〉javascript formatter
←%%(javascript nomark wrapper=box border="5px dashed red")
←alert("hooray!");
←%%
→ {type: 'code', lang: 'javascript', flags: ['nomark', ['wrapper', 'box'], ['border', '5px dashed red"']], value: '\n.d { font-size:70% }\n'}

〉css formatter
←%%(css nomark wrapper=shade)
←.d2 { font-size:70% }
←%%
→ {type: 'code', lang: 'css', flags: [{type: 'attribute', name: 'nomark'}, {type: 'attribute', name: 'wrapper', value: 'shade'}],
→   value: '\n.d { font-size:70% }\n'}

〉wacko text aligned
←%%(wacko wrapper=text align=center) текст по центру %%
→ {type: 'womacko', attributes: [{type: 'attribute', name: 'wrapper', value: 'text'}, {type: 'attribute', name: 'align', value: 'center'}],
→   value: ' текст по центру '}

〉wacko page wrapper
←%%(wacko wrapper=page wrapper_width=200) этот текст не может быть шире двухсот пикселей%%
→ {type: 'womacko', attributes: [{type: 'attribute', name: 'wrapper', value: 'page'}, {type: 'attribute', name: 'wrapper_width', value: '200'}],
→   value: ' этот текст не может быть шире двухсот пикселей'}

〉Тикет в help
←help#:200912039020818
→ {type: 'womHelp', value: '200912039020818', raw: 'help#:200912039020818'}

// 〉Обычный тикет
// ←https://st.woofmd-team.ru/WIKI-1234[ --На Вики в Тесте всегда показаываются комментарии-- ]( thasonic )
// → null

〉WIKI-1234[ --На Вики в Тесте всегда показаываются комментарии-- ]( thasonic ) → null
←q
→ []

〉Несуществующие тикеты
←WIKI-123456
→ null

WIKIWIKI-123456 → null

〉нагрузочные тикеты:
←http://lunapark.woofmd-team.ru/MAPSRENDER-308
→ null

IEX-300[ --Инстанс IEX для проверки конфигов-- ]( kohen ) → null

http://lunapark.woofmd-team.ru/100 → null

кто:egorova   → {type: 'womStaff', staff: 'egorova', case: 'кто',   at: null}
кого:egorova  → {type: 'womStaff', staff: 'egorova', case: 'кого',  at: null}
кому:egorova  → {type: 'womStaff', staff: 'egorova', case: 'кому',  at: null}
кем:egorova   → {type: 'womStaff', staff: 'egorova', case: 'кем',   at: null}
оком:egorova  → {type: 'womStaff', staff: 'egorova', case: 'оком',  at: null}
staff:egorova → {type: 'womStaff', staff: 'egorova', case: 'staff', at: null}
egorova@      → {type: 'womStaff', staff: 'egorova', case: null,    at: 'suffix'}
@egorova      → {type: 'womStaff', staff: 'egorova', case: null,    at: 'prefix'}

〉Почта полная
←((mailto:mail@woofmd-team.ru mail@))
→ {type: 'link', href: 'mailto:mail@woofmd-team.ru', children: [{type: 'text', value: 'mail@'}]}

〉Почта короткая
←mail@
→ {type: 'staff', staff: '', value: 'mail'}

〉Этушка:
←https://clubs.at.woofmd-team.ru/extdata
→ null

〉math outline 1
←%%(math outline)\int\limits_{-\infty}^{+\infty} e^{-x^2/2} \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} %%
→ null

〉math outline 1
←%%(math outline)\sqrt[\frac{p+q}{m}]{\int\limits_{a^2+1}^{b^4-1} e^{-ikt} dt + \int\limits_{\min\limits_{f(a)=0} a}^{\infty}t^{\frac{1}{\alpha}}dt}
←%%
→ {type: 'womFormatter', value: null}

〉Греческие буквы
←%%(math outline)
←\alpha, \beta, \gamma, \lambda, \mu, \omega, \Gamma, \Lambda, \Omega
←%%
→ {type: 'womFormatter', attributes: [{type: 'attribute', name: 'outline', value: null, quotes: null}],
→   value: '\n\\alpha, \\beta, \\gamma, \\lambda, \\mu, \\omega, \\Gamma, \\Lambda, \\Omega\n'}

〉CSV formatter
←%%(csv delimiter=; head='1')
←Параметр;Значение;Описание;Ага!
←Пучеглазость; 0,5; Показывает степень удивления
←Красноносость; средняя; Показывает температуру за дверью;ой
←%%
→ {type: 'womFormatter', format: 'csv', attribues: [{type: 'attribute', name: 'delimiter', value: ';', quotes: null}, {type: 'attribute', name: 'delimiter', value: '1', quotes: 'single'}],
→   value: '\n←Параметр;Значение;Описание;Ага!\nПучеглазость; 0,5; Показывает степень удивления\nКрасноносость; средняя; Показывает температуру за дверью;ой\n'}

〉Тоблица из html
←<# <table border=1> <tr><td>1</td><td>2</td></tr> <tr><td>3</td><td>4</td></tr> </table> #>
→ {type: 'womHtml', value: ' <table border=1> <tr><td>1</td><td>2</td></tr> <tr><td>3</td><td>4</td></tr> </table> '}

〉Таблица из разметки
←#|
←||cell11|cell12|cell13||
←||cell21|cell22||
←|#
→ {type: 'table', align: null, kind: 'wiki', children: [
→   {type: 'tableRow', children: [{type: 'tableCell', children: [{type: 'text', value: 'cell11'}]}, {type: 'tableCell', children: [{type: 'text', value: 'cell12'}]}, {type: 'tableCell', children: [{type: 'text', value: 'cell13'}]}]},
→   {type: 'tableRow', children: [{type: 'tableCell', children: [{type: 'text', value: 'cell21'}]}, {type: 'tableCell', children: [{type: 'text', value: 'cell22'}]}]}
→ ]}

〉Ракладка из разметки
←#||
←||cell11|cell12|cell13||
←||cell21|cell22||
←||#
→ {type: 'table', align: null, kind: 'layout', children: [
→   {type: 'tableRow', children: [{type: 'tableCell', children: [{type: 'text', value: 'cell11'}]}, {type: 'tableCell', children: [{type: 'text', value: 'cell12'}]}, {type: 'tableCell', children: [{type: 'text', value: 'cell13'}]}]},
→   {type: 'tableRow', children: [{type: 'tableCell', children: [{type: 'text', value: 'cell21'}]}, {type: 'tableCell', children: [{type: 'text', value: 'cell22'}]}]}
→ ]}

((http://www.woofmd.ru)) или [[http://www.woofmd.ru]] → null
((http://www.woofmd.ru Яндекс с круглыми скобками)) или [[http://www.woofmd.ru Яндекс с квадратными скобками]]
[[Устафф]] или ((Устафф)) → null
((Устафф Страница про устав)) или [[Устафф Страница про устафф]] → null
http://www.ya.ru и https://www.ya.ru → null

〉Ссылки на якорь
←((#test)) и ((/HomePage#TOC_1))
→ null

""**Жирный текст**"" → {type: 'womEscape', value: '""**Жирный текст**""'}
~**Жирный_текст** → {type: 'womEscape', value: '~**Жирный_текст**'}

https://wiki.woofmd-team.ru/wiki/vodstvo/file/.files/bobrujjsk.doc → null
((https://wiki.woofmd-team.ru/wiki/vodstvo/file/.files/bobrujjsk.doc ссылка на файл)) → null

〉Прямая ссылка на картинку
←http://img.woofmd.net/i/logo95x37x8.png
→ null

〉Картинка с заданным размером
←100x100:https://wiki.woofmd-team.ru/wiki/vodstvo/pictures/.files/e1.jpg
→ null

〉Картинка-ссылка
←((/HomePage http://img.woofmd.net/i/logo95x37x8.png))
→ null

〉Картинка-ссылка
←((http://img.woofmd.net/i/www/citylogos/gramota2-logo-ru.png http://img.woofmd.net/i/www/logo.png))
→ null

〉Ref
←ref:http://img.woofmd.net/i/logo95x37x8.png
→ null

// 〉Formatter graphviz
// ←%%(graphviz neato)
// ←digraph A {
// ←a -> b0
// ←a -> b3
// ←xb [label="hi",width=.1,style=invis]
// ←a -> xb [style=invis]
// ←a -> b1
// ←{rank=same b0 -> xb -> b1 [style=invis]}
// ←b0 -> c0
// ←xc [label="bye",width=.1,style=invis]
// ←b0 -> xc [style=invis]
// ←b0 -> c1
// ←{rank=same c0 -> xc -> c1 [style=invis]}
// ←b0 -> c2
// ←}
// ←%%
// → null

// %%(seqdiag)
// {
//   // normal edge and doted edge
//   A -> B [label = "normal edge"];
//   B --> C [label = "dotted edge"];
//
//   B <-- C [label = "return dotted edge"];
//   A <- B [label = "return edge"];
//
//   // asynchronus edge
//   A ->> B [label = "asynchronus edge"];
//   B -->> C [label = "asynchronus dotted edge"];
//
//   B <<-- C [label = "return asynchronus doted edge"];
//   A <<- B [label = "return asynchronus edge"];
//
//   // self referenced edge
//   A -> A [label = "self reference edge"];
// }
// %%

// ====Однострочный с пробелами

// %%однострочный с пробелами однострочный с пробелами однострочный с пробелами однострочный с пробелами однострочный с пробелами однострочный с пробелами однострочный с пробелами однострочный с пробелами однострочный с пробелами однострочный с пробелами %%
// какой-то другой текст %%однострочный с пробелами однострочный с пробелами однострочный с пробелами однострочный с пробелами однострочный с пробелами однострочный с пробелами однострочный с пробелами однострочный с пробелами однострочный с пробелами однострочный с пробелами%% какой-то другой текст

// ====Многострочный с пробелами
// %%многострочный с пробелами многострочный с пробелами многострочный с пробелами многострочный с пробелами многострочный с пробелами многострочный с пробелами многострочный с пробелами многострочный с пробелами многострочный с пробелами
// многострочный с пробелами многострочный с пробелами
// многострочный с пробелами%%
// какой-то другой текст %%многострочный с пробелами многострочный с пробелами многострочный с пробелами многострочный с пробелами многострочный с пробелами многострочный с пробелами многострочный с пробелами многострочный с пробелами многострочный с пробелами
// многострочный с пробелами многострочный с пробелами
// многострочный с пробелами %%какой-то другой текст

// ====Однострочный без пробелов
// %%однострочныйбезпробеловоднострочныйбезпробеловоднострочныйбезпробеловоднострочныйбезпробеловоднострочныйбезпробеловоднострочныйбезпробеловоднострочныйбезпробеловоднострочныйбезпробеловоднострочныйбезпробеловоднострочныйбезпробеловоднострочныйбезпробелов%%
// какой-то другой текст %%однострочныйбезпробеловоднострочныйбезпробеловоднострочныйбезпробеловоднострочныйбезпробеловоднострочныйбезпробеловоднострочныйбезпробеловоднострочныйбезпробеловоднострочныйбезпробеловоднострочныйбезпробеловоднострочныйбезпробеловоднострочныйбезпробелов%% какой-то другой текст
//

// ====Многострочный без пробелов
// %%многострочныйбезпробеловмногострочныйбезпробеловмногострочныйбезпробеловмногострочныйбезпробеловмногострочныйбезпробеловмногострочныйбезпробеловмногострочныйбезпробеловмногострочныйбезпробеловмногострочныйбезпробеловмногострочныйбезпробеловмногострочныйбезпробеловмногострочныйбезпробеловмногострочныйбезпробелов
// многострочныйбезпробеловмногострочныйбезпробеловмногострочныйбезпробеловмногострочныйбезпробелов
// многострочныйбезпробелов%%
// какой-то другой текст %%многострочныйбезпробеловмногострочныйбезпробеловмногострочныйбезпробеловмногострочныйбезпробеловмногострочныйбезпробеловмногострочныйбезпробеловмногострочныйбезпробеловмногострочныйбезпробеловмногострочныйбезпробеловмногострочныйбезпробеловмногострочныйбезпробеловмногострочныйбезпробеловмногострочныйбезпробелов
// многострочныйбезпробеловмногострочныйбезпробеловмногострочныйбезпробеловмногострочныйбезпробелов
// многострочныйбезпробелов%%какой-то другой текст


〉XML
←text text text %%(xml)codecodecodecodecodecodecodecodecod ecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecod ecodecodecodecodecodecodecodecodecodecode%% text text text text text text text text text text text text text text text text text text text text text text text text text text
→ {type: 'paragraph', children: [{type: 'text', value: 'text text text '}, {type: 'womFormatter', value: 'codecodecodecodecodecodecodecodecod ecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecodecod ecodecodecodecodecodecodecodecodecodecode'}, {type: 'text', value: ' text text text text text text text text text text text text text text text text text text text text text text text text text text'}]}

〉Список
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

〉обычный кат
←<{обычный кат
←текст}>
→ {type: 'womCut', title: [{type: 'text', value: 'обычный кат'}], children: [{type: 'text', value: 'текст'}]}

〉пустой кат
←<{пустой кат
←}>
→ {type: 'womCut', title: [{type: 'text', value: 'пустой кат'}], children: []}

〉кат без заголовка
←<{
←}>
→ {type: 'womCut', title: [], children: []}
