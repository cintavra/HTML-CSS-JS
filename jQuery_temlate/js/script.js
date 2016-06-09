$(function() {

var html = $('#test').html();
var articles = [
    {
        title: 'Article1',
        content: 'Lorem ipsum1'
    },
    {
        title: 'Article2',
        content: 'Lorem ipsum2'
    },
    {
        title: 'Article3',
        content: 'Lorem ipsum3'
    }
];
var content = tmpl(html,{
    data: articles
});

$('body').append(content);
});
