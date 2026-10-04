# Banking System

[![CI](https://github.com/ongechiosiango/banking-system/actions/workflows/ci.yml/badge.svg)](https://github.com/ongechiosiango/banking-system/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A small **demo** banking API: accounts, atomic transfers, and transaction history.

> **This is a learning project. It is NOT a real bank.**
> It uses fake money, has no KYC/AML/compliance, and must not be used to
> move real funds. The goal is to demonstrate correct patterns for money
> movement: atomicity, idempotency, invariants, and concurrency safety.

**Status:** Early development. Currently serves a /health endpoint.

## Design notes

- All money is stored as **integer cents** - never floats.
- Transfers are **atomic** via SQLite transactions with rollback on failure.
- The **balance invariant** holds at all times: sum of transactions equals
  sum of balances. A test asserts this after every scenario.
- Transfers support **idempotency keys** so retrying a request does not
  double-move money.

## Requirements

- Node.js >= 22 (see .nvmrc)

## Install

    npm install

## Run

    npm start

Server listens on http://localhost:3000 by default.

## Health check

    curl http://localhost:3000/health

## Test

    npm test

## License

MIT - see LICENSE.
