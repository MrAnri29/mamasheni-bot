const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'invite',
    aliases: ['inv'],
    utilisation: '{prefix}invite',
    description: 'მოიწვიეთ ბოტი \<3',

    execute(client, message) {
        const invite = new MessageEmbed()
        .setTitle("invite me :)")
        .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.id}&permissions=277624638784&scope=bot`)
        .setDescription(`მოსაწვევი ლინკი darling:\nhttps://discord.com/api/oauth2/authorize?client_id=${client.id}&permissions=277624638784&scope=bot`)
        .setThumbnail(client.user.displayAvatarURL({ dinamic: true }))
        .setFooter('ცხოვრებაში აღარ წავალ არც რძეზე და არც მაწონზე 😒', client.user.displayAvatarURL())
        .setColor("#868686")
        message.reply({ embeds: [invite] });
    },
};