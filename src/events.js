player.on('error', (queue, error) => {
    return
});

player.on('connectionError', (queue, error) => {
    console.log(`๐ฅ แแฎ... แฎแแ แแแฅแแก แฉแแฎแแแฉแแแ แแแ  แแแแฆแแ แแ...\njk แแแคแแฅแกแแ แแ แจแแชแแแแ ${error.message}`);
});

player.on('trackStart', (queue, track) => {
    if (!client.config.opt.loopMessage && queue.repeatMode !== 0) return;
    queue.metadata.send(`๐จ แจแแแแ แแฎแแ แแ แจแแ แแแแฆแแ แแ: ${track.title}-แก\n**${queue.connection.channel.name}** <- แแ แแ แแ แฎแจแ ๐ง`);
});

player.on('trackAdd', (queue, track) => {
    queue.metadata.send(`๐จโ๐ค ${track.title} แแแแแแแขแ แ แแแจแ\n||แแฎแแแแ แจแแแแแแก \<3||`);
});

player.on('botDisconnect', (queue) => {
    queue.metadata.send('๐  แแแแแแแ แแฃแแแ... แแแแแฎแแ แแแ แแแ แแแแแแแแแ แแแแกแแแแ!');
});

player.on('channelEmpty', (queue) => {
    queue.metadata.send('๐ช แแแ แขแ แแแแขแแแแก แแแแกแจแ, แ แแแ แแแช แฌแแแแ แแ');
});

player.on('queueEnd', (queue) => {
    queue.metadata.send('๐ แฐแแฐแแฐแ... แ แแช แแแแฎแแ แ แงแแแแแคแแ แ แแแแฆแแ แ!');
});