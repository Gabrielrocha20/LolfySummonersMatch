import disnake
import disnake.ui
from disnake.ext import commands

intents = disnake.Intents.default()
intents.typing = False
intents.presences = False

bot = commands.Bot(command_prefix='>', intents=intents)

@bot.event
async def on_ready():
    print(f'Bot está online. Nome: {bot.user.name}, ID: {bot.user.id}')

@bot.slash_command(name="fazer_perguntas", description="Faz 5 perguntas ao usuário")
async def fazer_perguntas(ctx: disnake.ApplicationCommandInteraction):
    perguntas = [
        "Qual é o seu nome?",
        "Qual é a sua idade?",
        "Qual é a sua cidade?",
        "Qual é a sua profissão?",
        "Qual é o seu hobby?"
    ]

    respostas = []

    for pergunta in perguntas:
        resposta_escolhida = await fazer_pergunta_com_botao(ctx, pergunta)
        respostas.append(resposta_escolhida)

    resposta_final = f"Respostas: {', '.join(respostas)}"
    await ctx.send(resposta_final)

async def fazer_pergunta_com_botao(ctx: disnake.ApplicationCommandInteraction, pergunta: str) -> str:
    pergunta_embed = disnake.Embed(title="Pergunta", description=pergunta)
    pergunta_embed.set_footer(text="Clique em uma opção abaixo para responder")

    # Criar botões de resposta
    opcoes = [
        disnake.SelectOption(label="Sim", value="sim"),
        disnake.SelectOption(label="Não", value="nao"),
        disnake.SelectOption(label="Não tenho certeza", value="incerto")
    ]

    # Criar menu suspenso de seleção
    menu = disnake.ui.SelectMenu(custom_id="resposta_menu", options=opcoes)

    # Adicionar menu suspenso ao embed
    pergunta_embed.add_field(name="Resposta", value="Selecione uma opção:", inline=False)

    # Enviar a pergunta com o menu suspenso
    mensagem = await ctx.send(embed=pergunta_embed, components=[menu])

    # Aguardar a resposta do usuário
    resposta = await bot.wait_for(
        "select_option",
        check=lambda i: i.component.custom_id == "resposta_menu" and i.user.id == ctx.user.id
    )

    # Obter a resposta escolhida pelo usuário
    resposta_escolhida = resposta.data.values[0]

    # Atualizar a mensagem original para indicar a resposta selecionada
    pergunta_embed.set_footer(text="Resposta selecionada: " + resposta_escolhida)
    await mensagem.edit(embed=pergunta_embed, components=[])

    # Retornar a resposta escolhida
    return resposta_escolhida

bot.run('Token de acesso')
