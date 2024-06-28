function toggleNotificationBoard() {
    const notificationBoard = document.getElementById("notificationBoard");
    if (notificationBoard.style.display === "block") {
        notificationBoard.style.display = "none";
    } else {
        notificationBoard.style.display = "block";
    }
}

document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', function() {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        this.classList.add('active');

        // Toggle content based on the selected tab
        if (this.textContent.trim() === 'Unread') {
            document.querySelectorAll('.notification-item').forEach(item => {
                if (!item.classList.contains('unread')) {
                    item.style.display = 'none';
                } else {
                    item.style.display = 'flex';
                }
            });
        } else {
            document.querySelectorAll('.notification-item').forEach(item => item.style.display = 'flex');
        }
    });
});
