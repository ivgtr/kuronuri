#!/usr/bin/env node

import meow from "meow";
import type { Package } from "update-notifier";
import updateNotifier from "update-notifier";
import { exchanging, Options } from "./index.js";

const cli = async () => {
  const cli = meow(
    `
Usage
  $ kuronuri <text> [query]
Examples
  $ kuronuri 吾輩は猫である
  ██は█である
  $ kuronuri 吾輩は猫である -p ▲
  ▲▲は▲である
  $ kuronuri 吾輩は猫である -p あああ,いいい,ううう
  うううあああはいいいである
`,
    {
      importMeta: import.meta,
      flags: {
        pack: {
          type: "string",
          alias: "p",
          default: "█",
        },
      },
    }
  );

  updateNotifier({ pkg: cli.pkg as Package }).notify();

  const { input, flags } = cli;

  if (cli.flags?.v) cli.showVersion();
  if (!input.length || cli.flags?.h) cli.showHelp();

  const text = input[0];
  let options: Options = {};

  if (flags?.pack) {
    options.pack = flags.pack.split(",");
  }

  exchanging(text, options)
    .then((text) => {
      console.log(text);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

cli();
