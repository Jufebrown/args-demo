#!/usr/bin/env node

let [,, ...args] = process.argv

console.log(args)
//or
process.stdout.write(`${args.toString()}\n`)
