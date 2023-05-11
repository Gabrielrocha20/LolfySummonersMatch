from random import choice, randint


def gerar_dados(n):
    rota = ["Top", "Mid", "Jungle", "Atirador", "Suporte"]
    tipo = ["Assassino", "Atirador", "Mago", "Lutador", "Tanque", "Suporte"]
    preferencia1 = ["Split Push", "Team Fight", "Snow Ball"]
    preferencia2 = ["Agressivo", "Passivo", "Tatico"]
    preferencia3 = ["Early Game", "Mid Game", "End Game"]

    dados = []

    for i in range(n):
        obj = {}
        obj["nome"] = f"{i+1}"
        obj["rota"] = choice(rota)
        obj["tipo"] = choice(tipo)
        obj["subtipo"] = choice(tipo)
        obj["preferencia1"] = choice(preferencia1)
        obj["preferencia2"] = choice(preferencia2)
        obj["preferencia3"] = choice(preferencia3)
        dados.append(obj)

    return dados