player.on('error', (queue, error) => {
    return
});

player.on('connectionError', (queue, error) => {
    console.log(`😥 ეხ... ხმა მაქვს ჩახლეჩილი ვერ გიმღერებ...\njk დაფიქსირდა შეცდომა ${error.message}`);
});

player.on('trackStart', (queue, track) => {
    if (!client.config.opt.loopMessage && queue.repeatMode !== 0) return;
    queue.metadata.send(`👨 შვილო ეხლა მე შენ გიმღერებ: ${track.title}-ს\n**${queue.connection.channel.name}** <- აი ამ არხში 🎧`);
});

player.on('trackAdd', (queue, track) => {
    queue.metadata.send(`👨‍🎤 ${track.title} დავამატე რიგში\n||მხოლოდ შენთვის \<3||`);
});

player.on('botDisconnect', (queue) => {
    queue.metadata.send('😠 გამოდით ლუბოი... მანახეთ აბა ვინ გამომაგდო ვოისიდან!');
});

player.on('channelEmpty', (queue) => {
    queue.metadata.send('😪 მარტო დამტოვეს ვოისში, რავი მეც წავალ პკ');
});

player.on('queueEnd', (queue) => {
    queue.metadata.send('😎 ჰეჰეჰე... რაც მითხარი ყველაფერი გიმღერე!');
});