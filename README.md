# KhalArmy Bot

Bot de avisos automáticos para a guilda KhalArmy no Discord.

## Avisos configurados
- ⚔️ Boss Mundial: 11:45 e 19:45 (todo dia)
- 🌿 Boss Natureza: 02:45, 10:45 e 18:45 (todo dia)
- 💰 Doações: segunda às 09:00

## Como subir no Railway

1. Crie uma conta em railway.app
2. Clique em "New Project" → "Deploy from GitHub repo"
3. Suba esse código no GitHub primeiro (veja abaixo)
4. Configure as variáveis de ambiente no Railway:
   - DISCORD_TOKEN → token do seu bot
   - BOSS_MUNDIAL_CHANNEL_ID → ID do canal #boss-mundial
   - BOSS_NATUREZA_CHANNEL_ID → ID do canal #boss-natureza
   - DOACOES_CHANNEL_ID → ID do canal #doações

## Como pegar o token do bot
1. Acesse discord.com/developers/applications
2. Clique em "New Application" → dê o nome "KhalArmy Bot"
3. Vá em "Bot" → "Reset Token" → copie o token
4. Em "Privileged Gateway Intents" ative: SERVER MEMBERS INTENT e MESSAGE CONTENT INTENT

## Como pegar o ID dos canais
1. No Discord, ative o Modo Desenvolvedor:
   Configurações → Avançado → Modo Desenvolvedor
2. Clique com botão direito no canal → "Copiar ID"
