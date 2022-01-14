# kuronuri

[![CI test](https://github.com/ivgtr/kuronuri/actions/workflows/test.yml/badge.svg)](https://github.com/ivgtr/kuronuri/actions/workflows/test.yml)

🤦 Nouns that lead to personal identification can be blacked out.

## Usages

### CLI

```shell
$ npm install --global kuronuri
```

```shell
$ kuronuri --help
  Usage
      $ kuronuri <text> [query]

  Examples
      $ kuronuri 吾輩は猫である
        ██は█である

      $ kuronuri 吾輩は猫である -p ▲
        ▲▲は▲である

      $ kuronuri 吾輩は猫である -p ▲,█,●
        ●█は▲である
```

### Packages

```shell
$ npm install kuronuri
```

```js
import { exchanging } from "kuronuri";

exchanging("吾輩は猫である").then((result) => {
  console.log(result);
  // => ██は█である
});
```

#### API

```ts
exchanging(text:string, options?:{pack?:string[]=["█"]}) => Promise<string>
```

## License

MIT ©[ivgtr](https://github.com/ivgtr)

[![Twitter Follow](https://img.shields.io/twitter/follow/ivgtr?style=social)](https://twitter.com/ivgtr) [![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE) [![Donate](https://img.shields.io/badge/%EF%BC%84-support-green.svg?style=flat-square)](https://www.buymeacoffee.com/ivgtr)
