window.addEventListener('DOMContentLoaded', event => {
    // Simple-DataTables
    // https://github.com/fiduswriter/Simple-DataTables/wiki

    const datatablesSimple = document.getElementById('datatablesSimple');
    const course_table = document.getElementById('course_table');
    const datatablesSubmitted = document.getElementById('datatablesSubmitted');

    if (datatablesSimple || datatablesSubmitted || course_table) {
        new simpleDatatables.DataTable(datatablesSimple);
        new submittedDatatables.DataTable(datatablesSubmitted);
        new courseDatatables.DataTable(course_table);
    }
});

$(document).ready(function () {
    $('table.display').DataTable();
});