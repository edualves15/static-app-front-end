import json
import os


def criar_estrutura(caminho, pastas_conteudo_ignorado=[], imprimir_arquivos=True):
    pasta = os.path.basename(caminho)
    item_dict = {
        pasta: {
            'subpastas': [],
            'arquivos': []
        }
    }

    if pasta not in pastas_conteudo_ignorado:
        try:
            for sub_caminho in os.scandir(caminho):
                if sub_caminho.is_dir():
                    item_dict[pasta]['subpastas'].append(criar_estrutura(sub_caminho.path, pastas_conteudo_ignorado, imprimir_arquivos))
                elif imprimir_arquivos:
                    item_dict[pasta]['arquivos'].append(sub_caminho.name)
        except PermissionError:
            pass

    return item_dict


def imprimir_estrutura_json(estrutura):
    print(json.dumps(estrutura, indent=2))


def imprimir_estrutura(estrutura, indentacao=""):
    nome_pasta = list(estrutura.keys())[0]
    print(indentacao + nome_pasta + "/")

    subpastas = estrutura[nome_pasta]['subpastas']
    arquivos = estrutura[nome_pasta]['arquivos']

    for subpasta in subpastas:
        imprimir_estrutura(subpasta, indentacao + "  ")

    for arquivo in arquivos:
        print(indentacao + "  " + arquivo)


caminho_atual = os.path.abspath(os.path.dirname(__file__))
pastas_conteudo_ignorado = ['.git', '.vscode', 'node_modules']

estrutura_diretorio = criar_estrutura(caminho_atual, pastas_conteudo_ignorado, True)

# imprimir_estrutura_json(estrutura_diretorio)
imprimir_estrutura(estrutura_diretorio)
