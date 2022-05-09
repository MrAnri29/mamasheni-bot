const { QueueRepeatMode } = require('discord-player');

module.exports = {
    name: 'loop',
    aliases: ['lp', 'repeat'],
    utilisation: '{prefix}loop <queue>',
    voiceChannel: true,
    description: 'ჩართე მარყუჟის რეჟიმი!',

    execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`💔 ეხლა მუსიკა არ უკრავს სხვა დროს ცადეთ!`);

        if (args.join('').toLowerCase() === 'queue') {
            if (queue.repeatMode === 1) return message.channel.send(`🤒 მიმდინარე მუსიკა ისედაც მარყუჟის რეჟიმშია... (${client.config.app.px}loop) რომ გათიშოთ!`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.QUEUE : QueueRepeatMode.OFF);

            return message.channel.send(success ? `🔁 **${queue.repeatMode === 0 ? 'გათიშულია** რიგი არ გამეორდება' : 'ჩართულია** მთლიანი რიგი განმეორდება სამუდამოდ!'} ` : `🤕 დაფიქსირდა შეცდომა თავიდან ცდეთ!`);
        } else {
            if (queue.repeatMode === 2) return message.channel.send(`🥺 გთხოვ ჯერ გათიშე რიგის მარყუჟი (${client.config.app.prefix}loop queue) და შემდეგ თავიდან ცადეთ!`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.TRACK : QueueRepeatMode.OFF);

            return message.channel.send(success ? `🔂 **${queue.repeatMode === 0 ? 'გათიშულია** მიმდინარე *მუსიკა* არ განმეორდება,' : 'ჩართულია** მიმდინარე *მუსიკა* სამუდამოდ განმეორდება,'}  თუ რიგის გამეორება გინდა მაშინ "${client.config.app.px}loop queue" 🔂` : `🤒 დაფიქსირდა შეცდომა... თავიდან ცადეთ!`);
        };
    },
};