
// Toggle Sidebar
$('.toggle-btn').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('sidebar-open');
    $('.main-content').toggleClass('sidebar-open');
});