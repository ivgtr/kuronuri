import { tokenize } from "kuromojin";

export type Options = {
  pack?: string[];
};

export const exchanging = async (text: string, options: Options = {}): Promise<string> => {
  const { pack = ["█"] } = options;

  return tokenize(text).then((tokens) =>
    tokens
      .map((token) => {
        if (token.pos === "名詞")
          return [...Array(token.surface_form.length)]
            .map(() => pack[Math.floor(Math.random() * pack.length)])
            .join("");
        return token.surface_form;
      })
      .join("")
  );
};

export default exchanging;
