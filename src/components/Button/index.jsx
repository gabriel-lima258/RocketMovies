/* eslint-disable react/prop-types */
import { Container } from "./style";

export function Button({ title, $newsave, loading = false, ...rest }) {
  return (
    <Container
      type="button"
      disabled={loading} // propriedade de carregamento caso seja verdadeiro, uso falso como padrão caso eu não especifique no seu uso
      $newsave={$newsave}
      {...rest} // ...rest é usado quando não quero especificar todas prorpriedades do botão
    >
      {loading ? "Carregando" : title}
    </Container>
  );
}
