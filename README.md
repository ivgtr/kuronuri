# non noun

[![CI test](https://github.com/ivgtr/nonnoun/actions/workflows/test.yml/badge.svg)](https://github.com/ivgtr/nonnoun/actions/workflows/test.yml)

名詞を隠して任意の文字に置き換えます

## Usages

### CLI

```shell
$ npm install --global nonnoun
```

```shell
$ nonnoun --help
  Usage
      $ nonnoun <text> [query]

  Examples
      $ nonnoun 吾輩は猫である
        ■■は■である

      $ nonnoun 吾輩は猫である -p ▲
        ▲▲は▲である

      $ nonnoun 吾輩は猫である -p ▲,■,●
        ●■は▲である
```

### Packages

```shell
$ npm install nonnoun
```

```js
import { exchanging } from "nonnoun";

exchanging({ text: "吾輩は猫である" }).then((result) => {
  console.log(result)
  // => ■■は■である
})
```

#### API
```ts
exchanging(options: {text:string, pack?:string[]=["■"]}) => Promise<string>
```

## License

MIT ©[ivgtr](https://github.com/ivgtr)

[![Twitter Follow](https://img.shields.io/twitter/follow/ivgtr?style=social)](https://twitter.com/ivgtr) [![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE) [![Donate](https://img.shields.io/badge/%EF%BC%84-support-green.svg?style=flat-square)](https://www.buymeacoffee.com/ivgtr)