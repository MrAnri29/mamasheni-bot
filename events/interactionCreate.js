module.exports = (client, int) => {
    if (!int.isButton()) return;

    const queue = player.getQueue(int.guildId);

    switch (int.customId) {
        case 'saveTrack': {
            if (!queue || !queue.playing) return int.reply({ content: `๐จ แ แแแงแ แซแแ, แแแจแแงแแ แแ?! แแฎแแ แแ แแคแแ แ แแ  แฃแแ แแแก...`, ephemeral: true, components: [] });

            int.member.send(`๐ค แแฅแแแ แจแแแแแฎแแ: ${queue.current.title} | ${queue.current.author} ${int.member.guild.name}-แจแ`).then(() => {
                return int.reply({ content: `๐ แแ แแแแฌแแ แแ...`, ephemeral: true, components: [] });
            }).catch(error => {
                return int.reply({ content: `๐ แแแแแ แแแแ แแแแ  แแ แแแฎแกแแแ แ แแ แแแแฌแแ แ <3`, ephemeral: true, components: [] });
            });
        }
    }
};