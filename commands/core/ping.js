const ms = require('ms');

module.exports = {
    name: 'ping',
    aliases: [],
    utilisation: '{prefix}ping',
    description: 'რაღაც ნერდებისთვის რა...',

    execute(client, message) {
        message.channel.send(`მამაშენი მოპინგე! \`\`\`ბოლოს პინგი:\n**${ms(Date.now() - client.ws.shards.first().lastPingTimestamp, { long: true })}**\n**${client.ws.ping}ms** 🛰️\`\`\``);
    },
};