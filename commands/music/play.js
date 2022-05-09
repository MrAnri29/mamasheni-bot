const { QueryType } = require('discord-player');

module.exports = {
    name: 'play',
    aliases: ['p'],
    utilisation: '{prefix}play [მუსიკის სახელი]',
    voiceChannel: true,
    description: 'ჩართეთ მუსიკა :)',

    async execute(client, message, args) {
        if (!args[0]) return message.channel.send(`brah... მუსიკის სახელი/ლინკი არ უნდა მითხრა?!`);

        const res = await player.search(args.join(' '), {
            requestedBy: message.member,
            searchEngine: QueryType.AUTO
        });

        if (!res || !res.tracks.length) return message.channel.send(`🙄 ეხლა მაბოლებ? ეგეთი მუსიკა მე არ მინახია და რავი...`);

        const queue = await player.createQueue(message.guild, {
            metadata: message.channel
        });

        try {
            if (!queue.connection) await queue.connect(message.member.voice.channel);
        } catch {
            await player.deleteQueue(message.guild.id);
            return message.channel.send(`🥺 შეგიძლია სტაფის წევრები მოთაგო? უთხარი რომ მე არ მაქვს უფლება რომ ვოისში შემოვიდე და თუ შეუძლიათ ჩამირთონ!`);
        }

        await message.channel.send(`დაელოდეთ... ${res.playlist ? 'ალბომი' : 'მუსიკა'}... 🎧`);

        res.playlist ? queue.addTracks(res.tracks) : queue.addTrack(res.tracks[0]);

        if (!queue.playing) await queue.play();
    },
};