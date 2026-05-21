const { Client, GatewayIntentBits } = require("discord.js");
const cron = require("node-cron");

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

const BOSS_MUNDIAL_CHANNEL = process.env.BOSS_MUNDIAL_CHANNEL_ID;
const BOSS_NATUREZA_CHANNEL = process.env.BOSS_NATUREZA_CHANNEL_ID;
const DOACOES_CHANNEL = process.env.DOACOES_CHANNEL_ID;

client.once("ready", () => {
  console.log(`✅ KhalArmy Bot online como ${client.user.tag}`);

  // Boss Mundial — aviso 15min antes das 12:00
  cron.schedule("45 11 * * *", () => {
    sendMessage(BOSS_MUNDIAL_CHANNEL, "⚔️ **BOSS MUNDIAL EM 15 MINUTOS!**\n@everyone\nBoss Mundial começa às **12:00**! Se preparem! 💀");
  }, { timezone: "America/Sao_Paulo" });

  // Boss Mundial — aviso 15min antes das 20:00
  cron.schedule("45 19 * * *", () => {
    sendMessage(BOSS_MUNDIAL_CHANNEL, "⚔️ **BOSS MUNDIAL EM 15 MINUTOS!**\n@everyone\nBoss Mundial começa às **20:00**! Se preparem! 💀");
  }, { timezone: "America/Sao_Paulo" });

  // Boss Natureza — aviso 15min antes das 03:00
  cron.schedule("45 2 * * *", () => {
    sendMessage(BOSS_NATUREZA_CHANNEL, "🌿 **BOSS NATUREZA EM 15 MINUTOS!**\n@everyone\nBoss Natureza começa às **03:00**! 🌙");
  }, { timezone: "America/Sao_Paulo" });

  // Boss Natureza — aviso 15min antes das 11:00
  cron.schedule("45 10 * * *", () => {
    sendMessage(BOSS_NATUREZA_CHANNEL, "🌿 **BOSS NATUREZA EM 15 MINUTOS!**\n@everyone\nBoss Natureza começa às **11:00**! 🌿");
  }, { timezone: "America/Sao_Paulo" });

  // Boss Natureza — aviso 15min antes das 19:00
  cron.schedule("45 18 * * *", () => {
    sendMessage(BOSS_NATUREZA_CHANNEL, "🌿 **BOSS NATUREZA EM 15 MINUTOS!**\n@everyone\nBoss Natureza começa às **19:00**! 🌿");
  }, { timezone: "America/Sao_Paulo" });

  // Doações — todo dia às 12:00
  cron.schedule("9 9 * * *", () => {
    sendMessage(DOACOES_CHANNEL, "💰 **LEMBRETE DE DOAÇÕES**\n@everyone\nContribuam com a guilda:\n• Posto avançado\n• Tecnologia");
  }, { timezone: "America/Sao_Paulo" });

  // Doações — todo dia às 19:00
  cron.schedule("0 19 * * *", () => {
    sendMessage(DOACOES_CHANNEL, "💰 **LEMBRETE DE DOAÇÕES**\n@everyone\nContribuam com a guilda:\n• Posto avançado\n• Tecnologia");
  }, { timezone: "America/Sao_Paulo" });
});

function sendMessage(channelId, message) {
  const channel = client.channels.cache.get(channelId);
  if (channel) {
    channel.send(message);
  } else {
    console.error(`❌ Canal não encontrado: ${channelId}`);
  }
}

client.login(process.env.DISCORD_TOKEN);
