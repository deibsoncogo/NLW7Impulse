# Rocketseat - Next Level Week 7 Heat - Trilha Impulse - Mobile
No mobile desenvolvemos um aplicativo junto do Rodrigo Gonçalves que seja capaz de realizar o login do usuário pelo Github, salvar as mensagens enviadas e mostrar na tela somente as últimas

## Ambiente de trabalho
Para instalar as dependências necessárias temos que executar o seguinte comando
```bash
yarn
```

Depois é necessário configurar o sistema de login do GitHub para o mobile
  1. Acesse sua conta, settings, developer settings e OAuth Apps
  2. Clique em New OAuth App para criar e informar exatamente estes dados
     * Homepage URL: https://auth.expo.io/@SeuLoginExpo/nlw7heat
     * Authorization callback URL: https://auth.expo.io/@SeuLoginExpo/nlw7heat
  3. As demais informações você pode configurar como desejar
  4. Copie e cole o Client ID no arquivo abaixo dentro da variável `clientId`
     * mobile\src\hooks\authHooks.tsx

*Caso deseje você pode manter os dados atuais do login!*

Agora é necessário ajustar a variável `api` dentro do arquivo abaixo com o endereço IP que está rodando o backend, este IP vai fazer parte da API REST
  * mobile\src\services\backend.ts

Para iniciar o site podemos utilizar o atalho `yarn start` ou o seguinte comando
```bash
expo start
```

Também é necessário estar logado no `Expo` para ser reconhecido
```bash
expo login
```

## Ferramentas e dependências utilizado
As ferramentas utilizadas foram: `Yarn`, `Node JS`, `TypeScript`, `React Native` e `Expo`

As dependências utilizadas foram: `@expo-google-fonts/roboto`, `@react-native-async-storage/async-storage`, `axios`, `expo`, `expo-app-loading`, `expo-auth-session`, `expo-font`, `expo-linear-gradient`, `expo-random`, `expo-status-bar`, `moti`, `react`, `react-dom`, `react-native`, `react-native-iphone-x-helper`, `react-native-reanimated`, `react-native-svg`, `react-native-web`, `socket.io-client`,

Dependências usadas em modo de desenvolvimento: `@babel/core`, `@types/react`, `@types/react-native`, `@typescript-eslint/eslint-plugin`, `@typescript-eslint/parser`, `eslint`, `eslint-config-airbnb`, `eslint-import-resolver-typescript`, `eslint-plugin-import`, `eslint-plugin-import-helpers`, `eslint-plugin-jsx-a11y`, `eslint-plugin-react`, `eslint-plugin-react-hooks`, `react-native-svg-transformer`, `typescript`,

## Imagens
### Tela principal
![Tela principal](/mobile/src/assets/prints/print1.png)

### Tela principal com o usuário logado
![Tela principal com o usuário logado](/mobile/src/assets/prints/print2.png)
