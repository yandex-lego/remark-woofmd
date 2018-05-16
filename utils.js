exports.vis = vis;
exports.dump = dump;

function vis(node, indent = 0) {
    const lc = v => `${v.line}:${v.column}`;
    const pos = node.position ? `${lc(node.position.start)}-${lc(node.position.end)}` : '?';
    const data = JSON.stringify(cleanup(node)) || '';
    return `${'  '.repeat(indent)}#${node.type} @${pos} ${data.length>2?data:''} ${'value' in node?
        JSON.stringify(node.value) : ''} ${draw('title')} ${draw('children')}`;

    function draw(field) {
        return field in node && Array.isArray(node[field])?
            ('\n' + (field !== 'children' ? field + ': ' : '')
                + (node[field].map(child => vis(child, indent + 1)).join('\n') || `${'  '.repeat(indent + 1)}—`))
            : '';
    }
}

function cleanup(node) {
    const res = {...node};
    delete res.type;
    delete res.children;
    delete res.value;
    delete res.position;
    return res;
}

function dump(node, indent = 0) {
    const res = dump_(node);
    return indent_(res);

    // return `${}#${node.type} ${data.length>2?data:''} ${'value' in node?
    //     JSON.stringify(node.value) : ''} ${'children' in node?
    //         ('\n' + (node.children.map(child => vis(child, indent + 1)).join('\n') || `${'  '.repeat(indent + 1)}—`))
    //         : ''}`;
}

function dump_(node) {
    const res = [];
    if (Array.isArray(node)) {
        res.push('[');
        for (const v of node) {
            [].push.apply(res, dump_(v));
            res.push(',');
        }
        res.pop();
        res.push(']');

    } else if (typeof node === 'object') {
        res.push('{');
        for (const k of Object.keys(node).filter(k => k !== 'position')) {
            res.push(k, ':');
            [].push.apply(res, dump_(node[k]));
            res.push(',');
        }
        res.pop();
        res.push('}');

    } else {
        return [JSON.stringify(node).replace(/'/g, `\\'`).replace(/^"|"$/g, `'`)];
    }

    return res;
}

function indent_(dump, indent = 0) {
    const res = [];
    let lineLength = 0;
    let lastOpen = 0;
    let ctx = res;
    let spaces = null;
    for (let i = 0; i < dump.length; i += 1) {
        const v = dump[i];

        if (lineLength + v.length > 80) {
            lineLength = 0;
            indent += 1;
            res.splice(lastOpen, 0, '\n' + '  '.repeat(indent));
            lastOpen = 0;
            // res.push('\n');
            spaces = null;
        }
        lineLength += v.length;

        if (v === '}' || v === ']') {
            spaces === 'before' || res.push('\n' + '  '.repeat(indent));
            spaces = 'before';
        }
        if (v === '{') {
            lastOpen = i;
        }
        if (v === '{' || v === '[') {
            spaces === 'after' && res.pop();
        }

        res.push(v);

        if (v === ':' || v === ',') {
            res.push(' ');
            spaces = null;
        }
        if (v === '{' || v === '[') {
            res.push(' ');
            spaces = 'after';
        }
        // dump.map(v => Array.isArray(v) ? ).join(' ')
    }
    return res.join('');
    // return res.map(v => Array.isArray(v) ? '\n' + indent_(v, indent + 1) : v).join(' ');
}
