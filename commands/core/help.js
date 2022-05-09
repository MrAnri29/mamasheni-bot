const {
    MessageEmbed
} = require('discord.js');

module.exports = {
    name: 'help',
    aliases: ['h'],
    showHelp: false,
    utilisation: '{prefix}help',
    description: 'გიჩვენებთ ბოტის ბრძანებებს',

    execute(client, message, args) {

        if (args[0]) {
            const command = client.commands.get(args[0]);

            if (!command) {
                return message.channel.send("🙄 ეგეთი ბრძანება არ მოიძებნება...: " + args[0]);
            }

            let embed1 = new MessageEmbed()
                .setAuthor(command.name, client.user.displayAvatarURL())
                .addField("🧐 აღწერა:", command.description || "არ აქვს :(")
                .addField("📝 გამოყენება:", "`" + command.utilisation + "`" || "არ აქვს :(")
                .setColor("GOLD")
                .setFooter(client.user.username, client.user.displayAvatarURL());

            return message.channel.send({
                embeds: [embed1]
            });
        }else {

        const embed = new MessageEmbed();

        embed.setColor('RED');
        embed.setAuthor(client.user.username, client.user.displayAvatarURL({
            size: 1024,
            dynamic: true
        }));

        const commands = client.commands.filter(x => x.showHelp !== false);

        embed.addField(`სულ: - ${commands.size}`, commands.map(x => `\`${x.name}${x.aliases[0] ? ` (${x.aliases.map(y => y).join(', ')})\`` : '\`'}`).join(' | '));

        embed.setTimestamp();

        message.channel.send({
            embeds: [embed]
        });
    }
    },
};