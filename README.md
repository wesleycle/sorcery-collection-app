# Sorcery Collection App

Aplicativo web local para gerenciar sua coleção de cartas de **Sorcery: Contested Realm**
— coleção, catálogo, decks, listas personalizadas (crie quantas quiser: wishlist, troca, o que precisar) e scanner de cartas com câmera.

Feito para ser **simples de verdade**: só HTML, CSS e JavaScript puro. Sem instalação,
sem servidor, sem login, sem build. Você abre o arquivo `index.html` clicando duas vezes
e o app funciona.

---

## Requisito importante: use Google Chrome ou Microsoft Edge no computador

Este app usa a **File System Access API** do navegador para salvar seus dados
automaticamente em um arquivo `data.json` no seu disco. Essa API **só existe no
Google Chrome ou Microsoft Edge, no computador (Windows/Mac/Linux)** — não funciona
no Firefox, Safari, nem em navegadores de celular.

- Se você usar Chrome ou Edge no PC: tudo funciona automaticamente, incluindo salvar
  direto no arquivo.
- Se você usar outro navegador: o app continua funcionando normalmente, mas os dados
  ficam salvos apenas no armazenamento interno do navegador (localStorage) naquele
  computador/navegador específico — use os botões de **Exportar/Importar Backup**
  (em Configurações) para mover os dados entre navegadores/computadores.

---

## Como usar pela primeira vez

1. Copie a pasta inteira `sorcery-app` para onde quiser no seu computador (Área de
   Trabalho, Documentos, ou dentro de uma pasta sincronizada do OneDrive — veja a
   seção sobre OneDrive abaixo).
2. Dê duplo clique em `index.html`. Ele abre no seu navegador padrão.
   - Se o navegador padrão não for Chrome/Edge, abra manualmente com um deles
     (clique com o botão direito no arquivo → Abrir com → Google Chrome/Edge).
3. Assim que o app abrir, aparecerá uma barra amarela no topo:
   **"💾 Conectar arquivo de dados (data.json)..."**
   - Clique em **"Criar novo"** na primeira vez (isso cria o arquivo `data.json`
     dentro da pasta do app). Escolha salvar dentro da própria pasta `sorcery-app`.
   - Se você já tem um `data.json` de uma instalação anterior, clique em
     **"Já tenho um"** e selecione o arquivo.
4. Pronto! A partir daqui, toda ação que você fizer no app (adicionar carta, criar
   deck, editar, etc.) é salva automaticamente nesse arquivo, sem precisar clicar
   em "salvar" em lugar nenhum.

### Sobre o clique de "Reconectar" (isso é normal!)

Por segurança, os navegadores **esquecem a permissão de escrever no arquivo toda vez
que você fecha e abre o navegador de novo** (isso não é um bug do app, é assim que a
File System Access API funciona em todo navegador). Quando isso acontecer, você verá
uma barrinha discreta: **"🔒 Reconectar arquivo de dados"**. Basta clicar uma vez em
"Reconectar" e pronto — o app volta a salvar automaticamente pelo resto da sessão do
navegador, sem pedir de novo.

Enquanto você não reconectar, ou se algo der errado, **seus dados nunca são
perdidos**: o app sempre também guarda uma cópia no `localStorage` do navegador como
rede de segurança.

---

## Onde vêm as imagens das cartas

**100% das imagens vêm de uma única fonte: a pasta PESSOAL do usuário no
Google Drive** (Meu Drive → Sorcery → images →
`{alp,art,bet,dra,got,pro}`) — não é mais preciso colar link nenhum
manualmente nem manter uma pasta local com milhares de arquivos copiados em
cada computador. O antigo índice "oficial" (`drive-image-index-data.js` /
`window.SEED_DRIVE_IMAGE_INDEX`) continua no repositório por histórico, mas
**não é mais consultado** por `imageResolver.js` — a pasta pessoal cobre
sozinha as 6 edições do catálogo (Alpha, Beta, Arthurian Legends, Dragonlord,
Gothic e Promo).

**Como isso funciona por baixo dos panos:** cada arquivo dessa pasta se chama
`{setcode}-{nome-slug-com-underscore}-{tag}-{f|s}.png` (ex.:
`alp-abundance-b-s.png`). Como o Google Drive só serve imagem por **ID do
arquivo** (não por nome), o app mantém um índice `{nome_do_arquivo}.png → ID
do arquivo` guardado em `State.data.personalDriveImageIndex` — esse índice vem
pré-carregado (`personal-drive-image-index-data.js`) e **viaja junto com o
Exportar/Importar Backup** (ver "Dados do App" abaixo), então restaurar um
backup em qualquer computador já chega com as imagens funcionando.

**Ordem de resolução, pra cada carta+variante (foil/standard):**

1. **Match exato** no índice pessoal, pela chave
   `{setcode}-{nome-slug-com-underscore}-b-{f|s}.png`. Para Alpha, Beta,
   Arthurian Legends, Dragonlord e Gothic o tag é sempre `b`; algumas fichas
   especiais (Foot Soldier, Frog, Rubble, verso dos Avatares etc.) usam tags
   alternativos conhecidos (`bt`, `pd`), testados em seguida antes de desistir
   do match exato. Promo não segue um tag fixo (cada tiragem usa um código
   próprio, ex. `op`, `d`, `wk`, `ai`, `scg`, `tc`, `k`, `dk`), então o
   resolvedor monta um índice auxiliar agrupando as chaves reais por nome de
   carta e escolhendo foil/standard pelo sufixo final do nome do arquivo (ver
   comentário em `imageResolver.js`).
2. **Fallback por nome mais próximo (fuzzy match).** Se não houver match exato
   (ex.: grafia levemente diferente da usada no arquivo, apóstrofo, variação
   de nome), o resolvedor compara o nome da carta contra todos os nomes já
   indexados **do mesmo set+variante** usando distância de Levenshtein
   normalizada, e usa o candidato mais parecido — mas só se a similaridade for
   alta o bastante (≥ 82%, constante `FUZZY_MATCH_MIN_SIMILARITY` em
   `imageResolver.js`). Se o nome mais próximo encontrado ainda for muito
   diferente ("quase nenhuma correspondência"), o resolvedor **não arrisca**
   mostrar a imagem de uma carta errada — cai direto pro placeholder.
3. `images/placeholder.svg` — não é uma fonte de imagem de verdade, só o
   desenho genérico exibido quando nada acima resolveu essa carta/variante.

Não existe mais link manual por carta (a antiga aba "Fonte da Imagem" no popup
de detalhe foi removida) — a fonte automática é a pasta pessoal do Drive acima
(exata ou por nome mais próximo).

**Importante — por que uma carta pode não ter imagem:** a resolução usa
direto `card.set` + `card.name` (via `slugifyUnderscore`), então funciona
mesmo pra cartas que ainda não passaram por "Atualizar Catálogo". Ainda assim,
algumas variantes ficam sem imagem porque a pasta pessoal genuinamente não tem
esse arquivo específico (ex.: uma ficha token que só foi escaneada em
standard, nunca em foil) ou porque o nome da carta é diferente demais de
qualquer arquivo indexado nesse set para o fuzzy match arriscar um palpite -
nesses casos o placeholder é o comportamento correto, não um bug.

**Cobertura atual do índice pessoal:** `personal-drive-image-index-data.js`
tem 3.082 imagens, cobrindo as 6 edições completas (alp 817, art 452, bet 812,
dra 26, got 891, pro 84). Medindo por carta (pelo menos uma variante —
foil ou standard — resolvida), a cobertura do catálogo é de **99,4%** (1.598
de 1.608 cartas); as poucas exceções restantes são fichas/variantes cujo
arquivo específico nunca foi escaneado nessa pasta.

**Atualizando o índice em massa:** o botão **"Recarregar índices de imagens do
app"** em Configurações traz de volta o índice mais recente que acompanha os
arquivos do projeto (`personal-drive-image-index-data.js`), sem apagar nada
que você já tinha. Pra trazer um índice de outra fonte, importe um backup
atualizado (**Configurações → Importar Backup**) que já traga
`personalDriveImageIndex` completo.

**Regenerando o índice do zero (processo manual/assistido):** a pasta do
Drive é virtualizada (só uma janela de itens fica no DOM por vez), então não
dá pra listar tudo com um fetch simples — é preciso um navegador real abrindo
a pasta pessoal do usuário em Meu Drive → Sorcery → images, rolando aos
poucos e lendo o atributo `data-id` (ID do arquivo) e o nome do arquivo de
cada linha da lista — normalmente feito com ajuda de uma automação de
navegador (Claude, por exemplo). O resultado vira o objeto
`window.SEED_PERSONAL_DRIVE_IMAGE_INDEX` (em
`personal-drive-image-index-data.js`). Não precisa (e não deve) rodar em tempo
real dentro do app do usuário final.

---

## Como "usar pela OneDrive" (sem API, sem login)

A versão anterior deste app tentava usar login da Microsoft e a API do OneDrive
diretamente, o que causava erros de autenticação. **Este app não faz mais isso.**

A forma recomendada de ter seus dados disponíveis em mais de um computador é simples:

1. Coloque a pasta inteira `sorcery-app` (com `index.html` e `data.json` — as imagens
   das cartas vêm da pasta oficial no Google Drive, não precisam estar nessa pasta)
   dentro de uma pasta que já é sincronizada pelo OneDrive no seu computador (ex.
   `C:\Users\voce\OneDrive\sorcery-app`).
2. O OneDrive vai sincronizar automaticamente o `data.json` em segundo plano, como
   faz com qualquer outro arquivo — sem nenhuma configuração extra no app.
3. Em outro computador com a mesma conta do OneDrive, a pasta `sorcery-app` (já
   sincronizada) vai aparecer com o mesmo `data.json` atualizado. Basta abrir o
   `index.html` lá e clicar em **"Conectar arquivo de dados" → "Já tenho um"**,
   selecionando o `data.json` sincronizado.

Não é sincronização em tempo real entre abas abertas simultaneamente em dois lugares
(evite editar ao mesmo tempo nos dois computadores para não gerar conflito de
arquivo do próprio OneDrive) — mas para uso "num lugar de cada vez" funciona muito bem.

---

## Dados do App (Exportar/Importar Backup)

Todos os dados do app — **catálogo, coleção, decks, listas, links de imagem
(automáticos e os personalizados por carta) e preferências** — vivem num único
objeto de estado, e esse é o **único jeito de atualizar qualquer um deles em
massa**: não existe mais uma tela separada pra colar um catálogo novo, recarregar
de um arquivo, ou atualizar links de imagem de outra forma. Em **Configurações →
Dados do App**:

- **📤 Exportar Backup**: baixa um arquivo `backup-AAAA-MM-DD.json` com absolutamente
  tudo. Restaurar esse arquivo em qualquer navegador/computador já chega com o
  catálogo, a coleção e as imagens funcionando, sem depender de nenhum outro arquivo
  do projeto. Guarde esse arquivo em local seguro, ou coloque-o também dentro de uma
  pasta do OneDrive manualmente.
- **📥 Importar Backup**: restaura os dados a partir de um arquivo de backup — inclui
  catálogo, coleção, decks, listas, links de imagem e configurações (pede confirmação
  antes de sobrescrever os dados atuais).
- **🗑️ Resetar Dados**: apaga coleção, decks e listas (mantém catálogo, links de
  imagem e configurações). Pede confirmação dupla.

Cada módulo (Decks, Listas) ainda tem seus próprios botões de exportação/importação
específicos (ex: exportar um deck como texto, importar uma lista de trocas) — esses
continuam funcionando à parte, sem relação com o backup completo acima.

### Sincronizar com GitHub (opcional)

Além do Exportar/Importar Backup manual, dá pra manter uma cópia viva do
`data.json` num repositório do GitHub — funciona em **qualquer navegador**
(diferente do "Conectar arquivo de dados", que só funciona no Chrome/Edge
desktop) e não depende de instalar nada. Fica em **Configurações →
Sincronizar com GitHub**.

**Por que GitHub e não o próprio Google Drive das imagens?** A API do Google
Drive bloqueia leitura/gravação via `fetch()`/XHR de um navegador comum
(CORS) — é por isso que as imagens são carregadas via `<img src>` (que
ignora CORS), truque que só serve pra *exibir* bytes de imagem, nunca pra ler
ou gravar um JSON arbitrário, e muito menos pra escrever (gravar sempre exige
login OAuth no Drive, não importa como a pasta esteja compartilhada). A API
REST do GitHub, em compensação, aceita chamadas autenticadas direto do
navegador (CORS liberado) usando só um token — sem precisar de login OAuth
nem projeto no Google Cloud.

**Como configurar:**

1. Crie um [Personal Access Token de acesso restrito
   (fine-grained)](https://github.com/settings/tokens?type=beta) no GitHub,
   limitado a **um único repositório** (pode ser privado) com permissão
   **"Contents: Read and write"** — nunca use um token com acesso à conta
   inteira.
2. Em Configurações, preencha usuário/organização, nome do repositório,
   branch (padrão `main`) e o caminho do arquivo (padrão `data.json`), e cole
   o token no campo correspondente.
3. Clique **Testar conexão** pra confirmar que tudo está certo.
4. Use **Salvar agora no GitHub** pra gravar o estado atual, ou **Carregar do
   GitHub** pra puxar o que estiver no repositório (pede confirmação, pois
   sobrescreve tudo — mesmo cuidado que Importar Backup).
5. Marque **"Enviar automaticamente..."** pra gravar sozinho a cada mudança
   (poucos segundos depois de parar de mexer, mesmo padrão de debounce usado
   pelo arquivo local).

**Segurança do token:** o Personal Access Token **nunca fica em
`State.data`** — não é salvo no `data.json` gravado nem entra no Exportar
Backup. Ele fica só numa chave separada do `localStorage` deste navegador
(`sorcery-github-pat`, ver `githubSync.js`). Trocar de navegador ou
computador exige colar o token de novo — isso é intencional. Isso também
significa que restaurar um backup em outro dispositivo não ativa a sincronização com GitHub sozinho: é preciso configurar owner/repo/token de novo lá.

---

## Início (Home): favoritos e indicadores da coleção

A tela **Início** é um painel com atalhos e números úteis, montado a partir dos
seus dados reais:

- **Decks Favoritos**: clique na estrela ⭐ ao lado do nome de um deck (na lista de
  decks ou dentro do próprio deck) para fixá-lo aqui. Cada atalho mostra a imagem do
  Avatar, a quantidade de cartas por elemento, o preço do deck (somando o `pricePaid`
  registrado das cartas que você tem na coleção) e a completude — quanto do deck você
  já possui, comparado ao que falta.
- **Listas Favoritas**: mesma ideia, com a estrela ⭐ ao lado do nome de uma lista.
  Mostra quantidade de itens e preço.
- **Indicador de Coleção**: total de cartas e cartas únicas, valor total da coleção,
  barra de completude por edição (Alpha, Beta, Arthurian Legends, Dragonlord, Gothic,
  Promo — quantas cartas únicas você tem vs. quantas existem em cada edição), e a
  distribuição por raridade e por elemento.

Favoritar não afeta nada além da tela Início — o deck/lista continua funcionando
normalmente em todas as outras telas.

---

## Criando e montando um Deck

Em **Decks → + Novo Deck**, primeiro você escolhe como quer começar: **Criar
Manualmente** ou **Importar Arquivo ou Lista**. No manual, só pede o nome — o
deck já é criado na hora, e você cai direto na tela de montagem, que funciona
como uma decklist viva:

- Um campo de busca no topo ("Adicionar Carta ao Deck") aceita qualquer carta
  do jogo e a encaixa sozinho na seção certa (Avatar, Atlas ou Spellbook)
  conforme o tipo. Se já houver um Avatar escolhido, o app confirma antes de
  substituir.
- As seções Avatar, Atlas e Spellbook também têm sua própria busca, já
  filtrada pelo tipo de carta daquela seção.
- A seção **Collection** é a reserva de até 10 cartas de qualquer tipo usada
  durante a partida — não tem relação com a sua coleção física de cartas. Ela
  tem busca própria (sem filtro de tipo, já que aceita qualquer carta) e
  funciona exatamente como as demais seções: buscar, adicionar, ajustar
  quantidade e remover.
- Todo campo de busca de carta (deck, listas, coleção, scanner) mostra no
  dropdown a miniatura da carta ao lado do nome, pra facilitar identificar a
  opção certa.
- Passe o mouse sobre o nome de qualquer carta pra ver a arte dela.
- Não há limite de cópias por carta ou de tamanho do deck — o app apenas
  indica quando Atlas/Spellbook/Collection estão com menos ou mais cartas que
  o padrão (30/60/10), e quando alguma raridade excede o limite usual
  (Ordinary 4, Exceptional 2, Elite/Unique 1), sem bloquear nada.

**Importar por texto colado, com seção Collection**: ao colar uma lista
livre ("Analisar" na tela de importação), cabeçalhos `// Atlas`, `//
Spellbook` e `// Collection` são opcionais — sem eles, cada carta cai na
seção certa pelo próprio tipo (Site → Atlas, resto → Spellbook), como
sempre. Cartas listadas sob `// Collection` vão direto para a reserva do
deck, seja qual for o tipo da carta, já que essa seção aceita qualquer
tipo e não dá para descobrir isso só pelo nome. Essa é a única das três
formas de importar (texto, .csv, .html do curiosa.io) que consegue
preencher a Collection — o CSV e o HTML salvo do curiosa.io não têm esse
conceito de seção, então decks importados por esses dois caminhos sempre
chegam com a Collection vazia (é só adicionar na mão depois, na tela do
deck).

**Importar direto de um link do curiosa.io**: o curiosa.io bloqueia no
servidor qualquer tentativa de buscar o deck a partir de outro site (a API
responde "Forbidden: Invalid origin", e a página em si também não libera
leitura por CORS) — não é uma limitação deste app, é deliberado por parte
deles. O jeito que funciona: abra o link do deck no navegador, espere carregar
por completo, aperte **Ctrl+S** (ou **Cmd+S** no Mac) e salve como **"Página
da Web, completa"** (não "Somente HTML" nem "Página única/MHTML" — essas não
guardam a lista de cartas, que é montada via JavaScript depois que a página
carrega). Em **Importar Arquivo ou Lista**, selecione esse `.html` salvo no
campo "Importar direto de um link do curiosa.io" — o app lê a decklist já
renderizada no arquivo e monta a prévia normalmente, igual à importação por
texto ou CSV.

---

## Importar/Exportar Coleção, Decks e Listas (CSV)

Além do backup completo em JSON (acima), cada módulo tem seus próprios botões de
importar/exportar em CSV, pensados pra trocar dados com planilhas ou com outras
ferramentas de coleção:

### Coleção

No botão **"Importar/Exportar"** da tela Coleção:

- **Exportar CSV completo**: mesmo formato de colunas usado por ferramentas de
  coleção comuns (`Edicao (PTBR/EN/Sigla)`, `Card (PT/EN)`, `Quantidade`,
  `Qualidade`, `Idioma`, `Raridade`, `Cor`, `Extras`, `Card #`, `Comentario`, `# Cards
  na Edicao`) — útil se você já usa uma planilha nesse formato ou quer levar seus
  dados pra outro app.
- **Exportar CSV simples** (formato sugerido): colunas do próprio app (`Quantidade`,
  `Nome`, `Set`, `Tipo`, `Raridade`, `Condicao`, `Foil`, `Promo`, `Curio`,
  `PrecoPago`, `Moeda`, `Notas`) — round-trip sem perdas, ideal pra editar em
  planilha e reimportar.
- **Importar**: aceita um `.csv` em qualquer um dos dois formatos acima — o formato
  é detectado automaticamente pelo cabeçalho. Cartas não reconhecidas pelo nome
  aparecem numa lista com sugestões (fuzzy match) pra você escolher manualmente ou
  ignorar antes de confirmar.

Mapeamentos usados na importação/exportação do formato completo:

| Coluna do CSV | Nosso campo |
| --- | --- |
| Qualidade `M`/`NM`/`SP`/`MP`/`HP`/`D` | Condição `NM`/`NM`/`LP`/`MP`/`HP`/`DMG` |
| Raridade `O`/`EX`/`EL`/`UN`/`None` | Raridade `Ordinary`/`Exceptional`/`Elite`/`Unique`/(sem raridade — ex. Avatares) |
| Cor `0`/`A`/`E`/`F`/`W` | Elemento (nenhum)/`Air`/`Earth`/`Fire`/`Water` |
| Extras contendo "Foil"/"Promo"/"Curio" | Flags `isFoil`/`isPromo`/`isCurio` |
| Idioma (quando ≠ EN/BR) e Comentário | Anexados ao campo Notas |

### Decks

Na tela de um deck, o botão **Exportar** (no topo, junto de Renomear/Duplicar/
Deletar) abre um menu com três opções: **Exportar .txt** (formato sugerido —
leve, mesma convenção "quantidade + nome" aceita por curiosa.io/moxfield),
**Exportar CSV** (mesmo formato completo usado na Coleção) e **Salvar como
Imagem/PDF** (ver seção abaixo). Na tela de **Novo Deck → Importar Arquivo**,
dá pra colar texto livre (como já era) ou enviar um `.csv` nesse mesmo formato
— os dois caem na mesma prévia de conferência antes de salvar o deck.

**Salvar como Imagem/PDF** sempre exporta o equivalente à aba selecionada no
momento — Montar, Lista ou Imagens — então o conteúdo gerado é sempre "o que
está na tela" quando você clica em Exportar.

### Listas

As Listas são 100% criadas por você — não existem mais uma "Wishlist" e uma
"Lista de Troca" fixas. Crie quantas listas quiser, cada uma com nome e descrição
próprios (ex: "Quero conseguir", "Pra trocar", "Falta pro deck X"...), edite ou
exclua a qualquer momento. Cada lista tem seu próprio buscador/filtro de cartas
(mesmo painel do Catálogo/Coleção) e alterna entre visualização em grade ou lista.

Nos atalhos rápidos do app (popup de detalhe da carta, "faltantes" de um deck),
o botão agora é **Adicionar a Lista**, que mostra todas as suas listas como opção
— inclusive a opção de criar uma lista nova na hora, se ainda não tiver nenhuma.

Cada lista tem um botão **Importar**, com duas opções: colar texto livre
"quantidade + nome" (formato sugerido, igual aos decks) ou enviar um `.csv` no
formato completo. Cartas não identificadas mostram sugestões por fuzzy match antes
de confirmar. O botão **Exportar** (no topo, junto de Voltar/Editar) abre o mesmo
menu com três opções — **Exportar .txt**, **Exportar CSV** e **Salvar como
Imagem/PDF** — descrito abaixo.

### Salvar como Imagem/PDF

Uma das opções do botão **Exportar** (Listas e Decks, nas abas Lista/Imagens/
Montar) gera uma versão "pronta pra compartilhar" do que está sendo exibido —
no formato grade ou lista/tabela, o que estiver ativo no momento. Ao escolher
essa opção, abre a tela de impressão nativa do navegador com o conteúdo, onde
você escolhe "Salvar como PDF" (ou uma impressora, se preferir imprimir de
verdade).

Usar a impressão nativa (em vez de gerar a imagem via canvas) é proposital:
rodando via `file://` sem servidor, o Chrome trata cada imagem local de carta
como uma origem diferente e bloqueia a leitura de pixels de um canvas — a
tela de impressão não tem essa restrição, então sempre funciona, sem precisar
de bibliotecas externas nem internet.

Antes de abrir a impressão, os atalhos de quantidade (+/-) viram só o número,
e as ações por item de uma Lista (Tenho!/Editar/Remover) somem — sobra só o
conteúdo relevante pra compartilhar (nome, quantidade, custo/threshold/raridade,
imagens).

---

## Scanner de cartas (câmera + OCR)

A tela **Scanner** usa a câmera do dispositivo (`getUserMedia`) para fotografar
cartas e reconhecer o texto com **Tesseract.js** (OCR rodando no próprio navegador,
carregado via CDN — por isso é necessário estar conectado à internet no momento em
que a página carrega esse script, mesmo com o resto do app funcionando 100% offline).

- Sob `file://`, o Chrome trata o protocolo como origem seguro, então a câmera
  costuma funcionar normalmente sem precisar de HTTPS.
- Se a câmera não estiver disponível (permissão negada, sem webcam, etc.), use o
  botão **"🖼️ Enviar foto da galeria"**, que funciona em qualquer situação.
- Fluxo pensado para cadastrar várias cartas em sequência rapidamente: escaneie →
  confirme → o app salva e volta direto para a câmera, pronto para a próxima carta
  (quantidade 1 e condição NM por padrão — edite os detalhes depois na tela de
  Coleção, se precisar).

---

## Catálogo de cartas

O catálogo-semente (`catalog-data.js`, carregado como `window.SEED_CATALOG`) foi
gerado originalmente a partir de **3082 arquivos de imagem reais** e enriquecido
depois via API pública de terceiros — isso é só o ponto de partida copiado pros
seus dados na primeira vez que o app roda; depois disso, **o catálogo salvo nos
seus dados é que vale**.

**Atualização pela API oficial:** em **Configurações → "Atualizar Catálogo (API
oficial)"**, o app aplica ao catálogo um snapshot embutido da resposta de
[`api.sorcerytcg.com/api/cards`](https://api.sorcerytcg.com/api/cards) — a API
pública oficial do jogo, mantida pela equipe do Curiosa.io — e atualiza tipo,
raridade, custo, elementos, threshold, texto de regra, flavor text, artista e a
referência de imagem (`slug`) de cada carta. Cartas e coleção/decks/listas já
existentes **não são perdidos**: o app casa cada impressão da API com a carta
correspondente do seu catálogo atual pelo nome+edição e só atualiza os dados
dela; cartas de sets ainda não catalogados (lançamentos novos) são adicionadas.

**Por que um snapshot embutido em vez de buscar a API ao vivo:** o servidor da
API não envia cabeçalho `Access-Control-Allow-Origin`, então o navegador
bloqueia (CORS) qualquer `fetch()` direto a partir de uma página aberta via
`file://` (o jeito normal de abrir este app) — isso não tem contorno possível
sem um servidor no meio. Por isso a resposta da API fica congelada em
`sorcery-api-cards-data.js`, carregada via `<script>` (que não sofre CORS,
igual `catalog-data.js` e `drive-image-index-data.js`) em vez de buscada em
tempo real — o botão funciona 100% offline. A consequência é que cartas/edições
lançadas *depois* da data do snapshot (indicada no topo de
`sorcery-api-cards-data.js`) só aparecem quando esse arquivo for atualizado —
é só pedir pra eu buscar os dados mais recentes da API de novo e substituir o
arquivo.

Pra atualizar/corrigir o catálogo de outra forma (ex: colar um catálogo já
editado à mão), o catálogo continua sendo só mais um campo dentro do backup único
do app — edite ou substitua o arquivo exportado por **Exportar Backup** e importe
de volta em **Configurações → Importar Backup** (isso substitui o catálogo atual
por completo — não junta com o anterior — então inclua todas as cartas que você
quer manter).

### Card de apresentação (CardTile)

Em qualquer grade de cartas (Coleção, Catálogo, resultados de Decks/Listas), o
"tile" de cada carta mostra nome, custo de mana (ou vida, no caso de Avatares),
tipo, raridade, elemento(s), um resumo do texto de regra, e a edição+artista no
rodapé — reaproveitando a paleta sépia/dourada já usada no resto do app. Cartas
do tipo Site usam automaticamente uma moldura em paisagem (a arte delas já vem
deitada) em vez de cortar a imagem; isso não afeta a rotação já usada na aba
Imagens do deck (Atlas), que continua funcionando como antes.

---

## Estrutura de arquivos

```
sorcery-app/
├── index.html          - tela principal + navegação
├── style.css            - tema visual (dark fantasy)
├── catalog-data.js      - catálogo semente usado só na primeira vez que o app roda (window.SEED_CATALOG)
├── drive-image-index-data.js - índice-semente de imagens da pasta OFICIAL do Google Drive (window.SEED_DRIVE_IMAGE_INDEX, parcial - ver "Onde vêm as imagens")
├── personal-drive-image-index-data.js - índice-semente de imagens da pasta PESSOAL do usuário no Google Drive (window.SEED_PERSONAL_DRIVE_IMAGE_INDEX - ver "Onde vêm as imagens")
├── sorcery-api-cards-data.js - snapshot estático da resposta da API oficial (window.SORCERY_API_CARDS_SNAPSHOT, ver nota de CORS acima)
├── storage.js           - persistência: File System Access API + IndexedDB + localStorage
├── githubSync.js         - sincronização opcional do data.json com um repositório GitHub (Contents API + PAT)
├── state.js              - estado do app + operações de CRUD
├── imageResolver.js      - resolve a imagem de cada carta (Drive pessoal, exato > fuzzy > placeholder)
├── sorceryApi.js         - aplica ao catálogo o snapshot local da API pública oficial (sorcery-api-cards-data.js)
├── deckUtils.js          - parser de import de deck, fuzzy match, validação, completude
├── importExport.js       - import/export CSV de Coleção, Decks e Listas (parser CSV + mapeamentos)
├── exportImage.js        - "Salvar como Imagem/PDF" de Listas/Decks (abas Lista/Imagens) via tela de impressão nativa
├── ocr.js                - câmera + Tesseract.js + match no catálogo
├── router.js             - roteador simples baseado em location.hash
├── render-common.js      - componentes de UI reutilizados (grade, filtros, modal, etc.)
├── render-home.js        - tela Início/Dashboard
├── render-collection.js  - tela Coleção
├── render-catalog.js     - tela Catálogo
├── render-decks.js       - telas de Decks (lista, novo, detalhe/builder)
├── render-lists.js       - tela de Listas (criação livre de listas pelo usuário)
├── render-scanner.js     - tela Scanner
├── render-settings.js    - tela Configurações
├── app.js                - inicialização do app (carregado por último)
├── images/
│   └── placeholder.svg   - imagem exibida quando a carta não tem foto
└── README.md             - este arquivo
```

Não existe `package.json`, `node_modules` nem qualquer etapa de instalação — é só
abrir o `index.html`.

---

## Limitações conhecidas

- **As imagens não dependem mais de "Atualizar Catálogo".** Como a única fonte
  agora é a pasta pessoal (resolvida direto por `card.set` + `card.name`, não
  pelo `imagePath` numerado da API), as imagens aparecem mesmo com o
  catálogo-semente original — rodar "Atualizar Catálogo (API oficial)"
  continua recomendado pra completar tipo/raridade/custo/regras de cada carta,
  só não é mais pré-requisito pra imagem aparecer.
- **Índice pessoal (`personal-drive-image-index-data.js`) tem 3.082 imagens**,
  cobrindo as 6 edições completas do jogo (alp, art, bet, dra, got, pro) — ver
  "Onde vêm as imagens das cartas" pra cobertura por carta (99,4%) e como
  funciona o fallback por nome mais próximo (fuzzy match). A pasta oficial
  compartilhada (antigo índice `drive-image-index-data.js`) se mostrou
  instável pra raspagem mais profunda (a varredura via navegador parava sempre
  no mesmo ponto, mesmo repetindo do zero, e a busca da própria pasta no Drive
  não encontrava nem arquivos que sabíamos que existiam) - por isso a decisão
  de usar só a pasta pessoal como fonte única. Não existe mais link manual por
  carta como alternativa (a aba "Fonte da Imagem" foi removida).
- O scanner por OCR funciona melhor com boa iluminação e a carta bem enquadrada;
  em caso de dúvida, use sempre a busca manual que aparece como alternativa.
- Fora do Chrome/Edge desktop, a gravação automática em arquivo não está disponível
  — use Exportar/Importar Backup para mover dados entre navegadores/computadores.
- O botão "Atualizar Catálogo" usa um snapshot embutido da API (`sorcery-api-cards-data.js`),
  não uma busca ao vivo (ver seção "Catálogo de cartas" acima) — funciona offline,
  mas cartas/edições lançadas depois da data desse snapshot só aparecem quando o
  arquivo for atualizado.
