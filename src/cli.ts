#!/usr/bin/env node

import meow from "meow";
import type { Package } from "update-notifier";
import updateNotifier from "update-notifier";
import { nonoun, Options } from "./index.js";

const cli = async () => {
  const cli = meow(
    `
Usage
  $ nonoun <text> [query]
Examples
  $ nonoun 吾輩は猫である
  ■■は■である
  $ nonoun 吾輩は猫である -p ▲
  ▲▲は▲である
  $ nonoun 吾輩は猫である -p ▲,■,●
  ●■は▲である
`,
    {
      importMeta: import.meta,
      flags: {
        pack: {
          type: "string",
          alias: "p",
        },
      },
    }
  );

  updateNotifier({ pkg: cli.pkg as Package }).notify();

  const { input, flags } = cli;

  const options: Options = {
    text: input[0],
  };

  if (flags?.pack) {
    options.pack = flags.pack.split(",");
  }

  nonoun(options)
    .then((text) => {
      console.log(text);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

cli();
