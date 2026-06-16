# Plano de Trabalho - Redesign do Hero e Stack de Imagens

Este plano descreve o redesign do hero da landing page da FJR Teleprompter.

## 🎯 Escopo do Redesign

1. **Remoção do Vídeo**: O vídeo de background `home.mp4` será removido para otimização de performance e modernização estética da seção inicial.
2. **Background Premium**: Substituído por um gradiente radial centralizado com efeito Spotlight, acompanhado por um padrão geométrico sutil que remete a uma malha de tela digital de estúdio ou viewfinder de câmera.
3. **Pilha de Imagens Sobrepostas (Interactive Photo Stack)**:
   - Apresentar as imagens (`artes/Home/1.jpeg`, `2.jpeg`, `3.jpeg` e `4.jpeg`) de forma empilhada com rotações orgânicas e offsets elegantes.
   - Efeito de abertura/leque (Fan-out) ao passar o mouse.
   - Lógica de clique para ciclar a pilha (o card superior desliza para o lado, fade out, move-se para trás com `z-index` menor e retorna suavemente para o fundo, permitindo que a próxima imagem da pilha assuma o foco).
   - Indicador de paginação minimalista sob a pilha (ex: `01 / 04`).
4. **Layout Duas Colunas**:
   - Ajustar o header em telas grandes (`lg`) para um grid de duas colunas (Card de texto à esquerda, Stack interativo de imagens à direita).
   - Manter a responsividade no mobile (empilhando verticalmente com espaçamentos elegantes).

## 🚀 Tarefas de Implementação

### 1. Estilos no CSS (`src/input.css`)
- **[ ]** Implementar a classe do grid digital de fundo (`.camera-grid`).
- **[ ]** Definir as variáveis de animação/transição e propriedades 3D das imagens sobrepostas (`.photo-stack-container`, `.photo-card`, `.photo-card-active`, etc.).
- **[ ]** Otimizar com aceleração de hardware (`will-change`, `transform-style: preserve-3d`).

### 2. Estrutura no HTML (`index.html`)
- **[ ]** Remover o bloco `<video>` e a div correspondente do background do `<header>`.
- **[ ]** Inserir o elemento `.camera-grid` de background.
- **[ ]** Redesenhar o layout interno do `<header>` para usar um grid de duas colunas no desktop (`lg:grid-cols-12`).
- **[ ]** Inserir a estrutura HTML do componente interativo na segunda coluna (`lg:col-span-5`):
  ```html
  <div class="photo-stack-container relative flex items-center justify-center ...">
    <!-- Imagens empilhadas 1, 2, 3, 4 -->
  </div>
  ```

### 3. Dinâmica no JavaScript (`js/main.js`)
- **[ ]** Desenvolver a lógica JS para ciclar as imagens no clique do container.
- **[ ]** Adicionar suporte a gestos e acessibilidade de foco do teclado.

## 🧪 Verificação e Build
- **[ ]** Compilar o CSS final rodando:
  ```bash
  npm run build
  ```
- **[ ]** Testar responsividade e transições no navegador.
