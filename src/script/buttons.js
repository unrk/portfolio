document.addEventListener('DOMContentLoaded', () => {
    const pastaButtons = document.querySelectorAll('.pasta-button');
    const secondGalleryButtons = document.querySelectorAll('.second-gallery-button');

    const discordButtons = document.querySelectorAll('.discord-button');
        const discordDiscordButtons = document.querySelectorAll('.discord-discord-button');


    pastaButtons.forEach(button => {
        button.addEventListener('click', () => {
            window.open('https://lesdeuxsiciles.fr/recettes/rigatoni-alla-norma/', '_blank');
        });
    });
        secondGalleryButtons.forEach(button => {
        button.addEventListener('click', () => {
            window.location.href = 'gallery.html';
        });
    });

    discordButtons.forEach(button => {
        button.addEventListener('click', () => {
            window.open('https://discord.gg/DDbGP2RSy3', '_blank');
        });
    });
        discordDiscordButtons.forEach(button => {
        button.addEventListener('click', () => {
            window.open('https://discord.gg/DDbGP2RSy3', '_blank');
        });
    });
});