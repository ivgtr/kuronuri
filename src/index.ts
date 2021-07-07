import { tokenize } from "kuromojin";

export type Options = {
  text: string;
  pack?: string[];
};

export const nonnoun = async (options: Options): Promise<string> => {
  const { text, pack = ["■"] } = options;

  return tokenize(text).then((tokens) => {
    const tokenArr = tokens.map((token) => {
      if (token.pos === "名詞")
        return [...Array(token.surface_form.length)]
          .map(() => pack[Math.floor(Math.random() * pack.length)])
          .join("");
      return token.surface_form;
    });

    return tokenArr.join("");
  });
};

export default nonnoun;
