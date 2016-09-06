function pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

$(document).ready(function() {
    $(".datetime-local").each(function() {
        if($(this).val()) {
            var formDate = new Date($(this).val() + 'Z');
            var year = pad(formDate.getFullYear(), 2),
                month = pad(formDate.getMonth(), 2),
                date = pad(formDate.getDate(), 2),
                hours = pad(formDate.getHours(), 2),
                minutes = pad(formDate.getMinutes(), 2);
            $(this).val(year + '-' + month + '-' + date + 'T' + hours + ':' + minutes);
        }
    });

    $("form").submit(function() {
        $(".datetime-local").each(function() {
            if($(this).val()) {
                var formDate = new Date($(this).val().replace('T',' ').replace('-','/'));
                $(this).val(formDate.toJSON().slice(0,19));
            }
        });
    });
});
