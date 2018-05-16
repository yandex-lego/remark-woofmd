const moo = require('moo');

// ←!!(зел)Текст зеленого цвета!!
// ↑ EXCLAMATIONS LPAREN CONST RPAREN TEXT EXCLAMATIONS

exports.lexer = moo.states({
    main: {
        // SHARPS:       '##', — Обрабатывается внутри remark токенайзеров
        HYPHENS:      /-{3,}/,

        STARS:        '**',
        SLASHES:      '//',
        LODASHES:     '__',
        PLUSES:       '++',
        MINUSES:      '--',
        TILDES:       '~~',

        LQUOTING:     '<[',
        RQUOTING:     ']>',
        LDEFINITION:  '(?',
        RDEFINITION:  '?)',

        PERCENTS:     {match: '%%', push: 'blockstart'},
        QUESTIONS:    {match: '??', push: 'blockstart'},
        EXCLAMATIONS: {match: '!!', push: 'blockstart'},

        CHAR:         {match: /[^]/, lineBreaks: true, keywords: {
            STARS:        ['**'],
            SLASHES:      '//',
            LODASHES:     '__',
            PLUSES:       '++',
            MINUSES:      '--',
            TILDES:       '~~',
            // KW: ['while', 'if', 'else', 'moo', 'cows'],
        }},
    },
    blockstart: {
        LPAREN:       {match: '(', next: 'blockparams'},
        TEXT:         {match: /[^]/, lineBreaks: true, next: 'main'},
    },
    blockparams: {
        EQUAL:        '=',
        // CONST:        {match: /([^\s=]+)/, lineBreaks: true},
        WS:           {match: /\s+/, lineBreaks: true},
        // EQUALS:       {match: '=='},
        RPAREN:       {match: ')', pop: true}
    }
});
