module.exports = {
    name: 'filter',
    aliases: [],
    utilisation: '{prefix}filter [filter name]',
    voiceChannel: true,
    description: 'მგონი სახელი გეუბნება თუ რას ნიშნავს ეს ბრძანება...',

    async execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`👨 რაიყო ძმა, მაშაყირებ?! ეხლა არაფერი არ უკრავს...`);

        const actualFilter = queue.getFiltersEnabled()[0];

        if (!args[0]) return message.channel.send(`🙄 რაიმე ფილტრი მითხარი...\n${actualFilter ? `🤩 ეხლა გააქტიურებულია: ${actualFilter} (${client.config.app.px}filter ${actualFilter} რომ გათიშო )))\n` : ''}`);

        const filters = [];

        queue.getFiltersEnabled().map(x => filters.push(x));
        queue.getFiltersDisabled().map(x => filters.push(x));

        const filter = filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

        if (!filter) return message.channel.send(`🤔 რატომგაც ეგეთი ფილტრი არ ვიცი...\n${actualFilter ? `🤩 ეხლა გააქტიურებულია: ${actualFilter}.\n` : ''}😒 ფილტრების სია: ${filters.map(x => `**${x}**`).join(', ')}.`);

        const filtersUpdated = {};

        filtersUpdated[filter] = queue.getFiltersEnabled().includes(filter) ? false : true;

        await queue.setFilters(filtersUpdated);

        message.channel.send(`${filter} არის **${queue.getFiltersEnabled().includes(filter) ? 'ჩართული' : 'გათიშული'}** ✅\n*რაც უფრო გრძელია მუსიკა მით უფრო დიდი ხანი დასჭირდება...*`);
    },
};