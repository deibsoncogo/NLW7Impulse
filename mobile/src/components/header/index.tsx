import React from "react"; // importação do framework
import { Text, TouchableOpacity, View } from "react-native"; // importação do framework
import LogoSVG from "../../assets/logo.svg";
import { UseAuth } from "../../hooks/authHooks";
import { UserPhoto } from "../userPhoto";
import { style } from "./style";

// função que servira como o componente do cabeçalho
export function Header() {
  const { user, SignOut } = UseAuth(); // permite a utilização do contexto

  return ( // retorna algo ao chamador
    <View style={style.container}>
      <LogoSVG />

      <View style={style.logoutButton}>
        {user && (
          <TouchableOpacity onPress={SignOut}>
            <Text style={style.logoutText}>Sair</Text>
          </TouchableOpacity>
        )}

        <UserPhoto imageUri={user?.avatarUrl} />
      </View>
    </View>
  );
}

/** comentário dos comandos dentro da estrutura tsx
 * View cria um grupo para os comandos
 * LogoSVG importa uma imagem SVG
 * { boolean && true } cria um if ternário
 * TouchableOpacity cria um botão
 * onPress executa algo quando o botão for pressionado
 * Text cria um texto
 * UserPhoto importa uma imagem
 * imageUri busca uma imagem por uma URL
 */
