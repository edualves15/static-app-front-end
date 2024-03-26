def read_file_content(file_name):
    try:
        with open(file_name.strip(), 'r') as file:  # Removendo espaços em branco extras.
            return file.read()
    except FileNotFoundError:
        return 'Arquivo não encontrado.'

def main():
    output = ''
    print('Insira os nomes dos arquivos separados por vírgula ou pressione Enter para encerrar:')
    while True:
        file_names = input()
        if file_names == '':
            break

        for file_name in file_names.split(','):
            output += f'• {file_name.strip()}:\n\n{read_file_content(file_name.strip())}\n\n'  # Removendo espaços em branco extras.
    
    print(output)

if __name__ == "__main__":
    main()
