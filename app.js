const unread = document.querySelectorAll('.unread'),
    newNotification = document.getElementById('new-notification')
    markAll = document.getElementById('mark').addEventListener('click', mark);

    newNotification.textContent = unread.length;

    function mark(e) {
        notified = document.querySelectorAll('.notified'),
        notification = document.getElementById('new-notification');

        notified.forEach(notified => {
            if(notified.classList.contains('unread')) {
                notified.classList.remove('unread');    
            }

        });


        notification.style.display = 'none';
        
    }
