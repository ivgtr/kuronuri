# nonown

[![CI test](https://github.com/ivgtr/nonoun/actions/workflows/test.yml/badge.svg)](https://github.com/ivgtr/nonoun/actions/workflows/test.yml)

名詞を隠して置き換えるライブラリ,CLIツール

## Usages

### CLI

```shell
$ npm install --global nonoun
```

```shell
$ nonoun --help
  Usage
      $ nonoun <text> [query]

  Examples
      $ nonoun 吾輩は猫である
        ■■は■である

      $ nonoun 吾輩は猫である -p ▲
        ▲▲は▲である

      $ nonoun 吾輩は猫である -p ▲,■,●
        ●■は▲である
```

### Packages

```shell
$ npm install nonoun
```

```js
import nonoun from "nonoun";

nonoun({ text: "吾輩は猫である" }).then((result) => {
  console.log(result)
  // => ■■は■である
})
```

#### API
```ts
nonoun(options: {text:string, pack?:string[]}) => Promise<string>
```

## License

MIT ©[ivgtr](https://github.com/ivgtr)

[![Twitter Follow](https://img.shields.io/twitter/follow/ivgtr?style=social)](https://twitter.com/ivgtr) [![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE) [![Donate](https://img.shields.io/badge/%EF%BC%84-support-green.svg?style=flat-square)](https://www.buymeacoffee.com/ivgtr)