const { Telegraf, Markup } = require('telegraf');

// Telegram bot API tokenini buraya yazın
const BOT_TOKEN = '7039130457:AAGH9ZU9Kk6JbPZGf9DmYt3zLOIhxgonXwE';

// Linklerin listesi
const links = [
    { text: "Hamster Kombat", url: "https://t.me/hamstEr_kombat_bot/start?" },
    { text: "Yescoin", url: "https://t.me/theYescoin_bot/Yescoin" },
    { text: "Time Farm", url: "https://t.me/TimeFarmCryptoBot" },
    { text: "CEX.IO", url: "https://t.me/cexio_tap_bot" },
    { text: "İCEBERG", url: "https://t.me/IcebergAppBot" },
    { text: "Blum", url: "https://t.me/BlumCryptoBot/app?startapp=ref_eTRvcBnlBI" },
    { text: "TapSwap", url: "https://t.me/tapswap_mirror_1_bot" },
    { text: "Dotcoin", url: "https://t.me/dotcoin_bot" },
    { text: "PocketFİ", url: "https://t.me/pocketfi_bot/Mining?startapp=1487091349" },
    { text: "W Coin", url: "https://t.me/wcoin_tapbot" },
    { text: "PixelTap", url: "https://t.me/pixelversexyzbot" },
    { text: "MeMeFİ", url: "https://t.me/memefi_coin_bot" },
    { text: "Gleam", url: "https://t.me/GleamRewardsBot/app?startapp=cmM9ZDIzMjAxZDM" }
];

// Telegraf botunu oluştur
const bot = new Telegraf(BOT_TOKEN);

// /start komutuna yanıt ver
bot.start((ctx) => {
    ctx.reply('Merhaba! Linkleri aşağıdaki butonlarla gönderebilirim. /links komutunu kullanabilirsiniz.');
});

// /links komutuna yanıt ver
bot.command('links', (ctx) => {
    // Linkleri üç sütün şeklinde düzenle
    const buttons = [];
    for (let i = 0; i < links.length; i += 3) {
        const row = links.slice(i, i + 3).map(link => {
            return Markup.button.url(link.text, link.url);
        });
        buttons.push(row);
    }
    
    // Butonlarla linkleri gönder
    ctx.reply('İşte linkler:', Markup.inlineKeyboard(buttons));
});

// Botun çalışmasını başlat
bot.launch().then(() => {
    console.log('Bot çalışıyor...');
}).catch((err) => {
    console.error('Bot çalıştırılırken hata oluştu:', err);
});
