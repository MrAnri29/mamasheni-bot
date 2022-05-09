module.exports = (client, int) => {
    if (!int.isButton()) return;

    const queue = player.getQueue(int.guildId);

    switch (int.customId) {
        case 'saveTrack': {
            if (!queue || !queue.playing) return int.reply({ content: `👨 რაიყო ძმა, მაშაყირებ?! ეხლა არაფერი არ უკრავს...`, ephemeral: true, components: [] });

            int.member.send(`🤗 თქვენ შეინახეთ: ${queue.current.title} | ${queue.current.author} ${int.member.guild.name}-ში`).then(() => {
                return int.reply({ content: `😙 დმ მოგწერეთ...`, ephemeral: true, components: [] });
            }).catch(error => {
                return int.reply({ content: `🙃 კიკნა კიარავარ დმ გახსენი რომ მოგწერო <3`, ephemeral: true, components: [] });
            });
        }
    }
};