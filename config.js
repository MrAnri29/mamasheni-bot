module.exports = {
    app: {
        prefix: 'ბოტის პრეფიქსი',
        token: 'ბოტის ტოკენი',
        playing: 'შენი ბოტის სტატუსი'
    },
    opt: {
        DJ: {
            enabled: false, //თუ true მაშინ ქვემოთ მოემული ბრძანებები მხოლოდ DJ როლის მფლობელებს ექნებათ...
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        //აქ კი default-ად ვაყენებთ პარამეტრებს
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
