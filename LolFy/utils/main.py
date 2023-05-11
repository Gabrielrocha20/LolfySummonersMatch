from gerador import gerar_dados

dados = gerar_dados(150)

def escolha():
    print("Seu campeao e esse")
    print(dados[0])

def filtro(resposta1,resposta2=None, chave=None):
    for dado in dados:
        if chave == "tipo":
            if not dado["tipo"] == resposta1:
                if not dado["subtipo"] == resposta1:
                    dados.remove(dado)
                    return filtro(resposta1, resposta2, chave)
            if not dado["tipo"] == resposta2:
                if not dado["subtipo"] == resposta2:
                    dados.remove(dado)
                    return filtro(resposta1, resposta2, chave) 

        else:
            if not dado[chave] == resposta1:
                if dado in dados:
                    dados.remove(dado)
                    return filtro(resposta1, chave=chave)
    print(dados)
    if len(dados) == 1:
        return escolha()


print("""
    a - Top
    b - Jungle
    c - Mid
    d - Atirador
    e - Suporte
""")
pergunta_1 = input("Qual lane voce joga?")

match pergunta_1:
    case "a":
        pergunta_1 = "Top"
    case "b":
        pergunta_1 = "Jungle"
    case "c":
        pergunta_1 = "Mid"
    case "d":
        pergunta_1 = "Atirador"
    case "e":
        pergunta_1 = "Suporte"

filtro(pergunta_1, chave="rota")


print("""
    a - Mago
    b - Assassino
    c - Lutador
    d - Tanque
    e - Atirador
    f - Suporte
""")
pergunta_2 = input("Selecione uma das categorias que voce mais gosta 1/2")
match pergunta_2:
    case "a":
        pergunta_2 = "Mago"
    case "b":
        pergunta_2 = "Assassino"
    case "c":
        pergunta_2 = "Lutador"
    case "d":
        pergunta_2 = "Tanque"
    case "e":
        pergunta_2 = "Atirador"
    case "f":
        pergunta_2 = "Suporte"


print("""
    a - Mago
    b - Assassino
    c - Lutador
    d - Tanque
    e - Atirador
    f - Suporte
""")
pergunta_3 = input("Selecione uma das categorias que voce mais gosta 2/2")
match pergunta_3:
    case "a":
        pergunta_3 = "Mago"
    case "b":
        pergunta_3 = "Assassino"
    case "c":
        pergunta_3 = "Lutador"
    case "d":
        pergunta_3 = "Tanque"
    case "e":
        pergunta_3 = "Atirador"
    case "f":
        pergunta_3 = "Suporte"

filtro(pergunta_2, pergunta_3, chave="tipo")

print("""
    a - Snow Ball
    b - Team fight
    c - Split push
""")
pergunta_4 = input("Oque voce prefere?")
match pergunta_4:
    case "a":
        pergunta_4 = "Snow Ball"
    case "b":
        pergunta_4 = "Team Fight"
    case "c":
        pergunta_4 = "Split Push"

filtro(pergunta_4, chave="preferencia1")

print("""
    a - Agressivo
    b - Passivo
    c - Tático
""")
pergunta_5 = input("Qual é o seu estilo de jogo preferido?")
match pergunta_5:
    case "a":
        pergunta_5 = "Agressivo"
    case "b":
        pergunta_5 = "Passivo"
    case "c":
        pergunta_5 = "Tatico"

filtro(pergunta_5, chave="preferencia2")

print("""
    a - tenha um inicio de jogo forte
    b - tenha o meio de jogo forte
    c - tenha um final de jogo forte
""")
pergunta_6 = input("Que tipo de campeao voce prefere?")
match pergunta_6:
    case "a":
        pergunta_6 = "Early Game"
    case "b":
        pergunta_6 = "Mid Game"
    case "c":
        pergunta_6 = "End Game"

filtro(pergunta_6, chave="preferencia3")

print("____________________________________________")
print()
print()

print(f"""
    1) {pergunta_1}
    2) {pergunta_2}
    3) {pergunta_3}
    4) {pergunta_4}
    5) {pergunta_5}
    6) {pergunta_6}
    """)
print("____________________________________________")
print()
print()
print(dados)