const sgd = require('sfdx-git-delta');

sgd({
    to: 'b7cf7229d39dadfd0351c9e7d199adafd533c6ef',
    from: '55f7ee7f3a49b8b1de6ea1294fe6ef51817a802a',
    output: './output',
    apiVersion: `59.0`,
    repo: './',
    source: './',
    ignore: './sgd-ignore',
    ignoreDestructive: './sgd-ignore'
}).then((res) => {
    console.log(res);
});