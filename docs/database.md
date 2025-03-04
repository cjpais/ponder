# Database

Internally, Ponder uses a SQL database. This database stores two distinct types of data:

1. Blockchain data (blocks, transactions, and event logs)

   - **Persistent** across deploys and hot reloads
   - Populated by fetching data from an RPC provider

2. Entity data (served by the GraphQL server)

   - **Ephemeral**, does not persist across deploys or hot reloads
   - Populated by calls to entity ORM objects within event handler functions

In development, Ponder uses SQLite because it offers excellent performance and a streamlined developer experience.

In production, Ponder uses Postgres. SQLite works for small projects in production, but is not a great fit (because of performance and reliability issues with persistent disks).
