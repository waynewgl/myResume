$(document).ready(
    function(){
        var csrf_token = $('meta[name=csrf-token]').attr('content');
        var csrf_param = $('meta[name=csrf-param]').attr('content');
        var params;
        if (csrf_param !== undefined && csrf_token !== undefined) {
            params = csrf_param + "=" + encodeURIComponent(csrf_token);
        }
        $('.redactor').redactor(
            { //"imageUpload":"/redactor_rails/pictures?" + params,
                //"imageGetJson":"/redactor_rails/pictures",
                //"fileUpload":"/redactor_rails/pictures?" + params,
                "path":"/assets/redactor-rails",
                "css":"style.css",
                buttons: ['formatting', '|',
                    'fontcolor', '|',
                    'bold', 'italic', 'deleted', '|',
                    'unorderedlist', 'orderedlist', 'outdent', 'indent', '|',
                    'alignleft', 'aligncenter', 'alignright', 'justify', '|',
                    'horizontalrule', '|',
                    'table', 'link', '|'],
                focus: false,
                minHeight:300,
                minWidth:500,
                autoresize: false
            }
        );


    });
