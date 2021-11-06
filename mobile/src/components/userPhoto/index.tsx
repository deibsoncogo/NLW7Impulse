import React from "react"; // importa um framework
import { Image } from "react-native"; // importa um framework
import { LinearGradient } from "expo-linear-gradient"; // dependência que vai cria um gradient
import AvatarDefault from "../../assets/avatar.png";
import { color } from "../../theme";
import { style } from "./style";

// variável que vai conter os tamanhos da imagens
const sizeDefault = {
  small: { // define o nome do grupo
    containerSize: 32, // define o tamanho 1
    avatarSize: 28, // define o tamanho 2
  },

  normal: { // define o nome do grupo
    containerSize: 48, // define o tamanho 1
    avatarSize: 42, // define o tamanho 2
  },
};

type IProps = { // cria uma tipagem para o recebimento das informações
  imageUri: string | undefined;
  size?: "small" | "normal";
}

// identifica a URI na imagem padrão para os usuário sem foto
const avatarDefault = Image.resolveAssetSource(AvatarDefault).uri;

// função que servirá como componente da foto do usuário
export function UserPhoto({ imageUri, size = "normal" }: IProps) {
  const { containerSize, avatarSize } = sizeDefault[size]; // recebe as informações

  return ( // retorna algo ao chamador
    <LinearGradient
      colors={[color.pink, color.yellow]}
      start={{ x: 0, y: 0.8 }}
      end={{ x: 0.9, y: 1 }}
      style={[
        style.container,
        { width: containerSize, height: containerSize, borderRadius: containerSize / 2 },
      ]}
    >
      <Image
        source={{ uri: imageUri || avatarDefault }}
        style={[style.avatar, { width: avatarSize, height: avatarSize, borderRadius: avatarSize / 2 }]}
      />
    </LinearGradient>
  );
}

/** comentários dos comandos dentro da estrutura tsx
 * LinearGradient cria uma cor gradiente
 * colors define a cor
 * start define a posição de inicio de uma cor
 * end define o final de uma cor
 * style permite a utilização de estilização
 * Image permite a utilização de imagem
 * source define qual imagem usar dinamicamente
 */
