

$(document).ready(function(){
    $('#search').on('keyup', function() {
        let value = $(this).val().toLowerCase();

        $('#myTable tr').filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
            $(this).addClass('table-highlight');
            if (!value) {
                $(this).removeClass('table-highlight');
            }
        });
    });
});