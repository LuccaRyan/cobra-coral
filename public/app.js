if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
        .then(() => console.log('Service Worker registrado!'))
        .catch(err => console.error('Erro ao registrar o Service Worker:', err));
}

function enviarNotificacao() {
    if (Notification.permission === 'granted') {
        new Notification('Olá! 🎉', {
            body: 'Isso é uma notificação do PWA!',
            icon: 'icon-192.png'
        });
    } else {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                enviarNotificacao();
            }
        });
    }
}