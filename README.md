### Setup project

```bash
npm install prisma --save-dev
```

```bash
npx prisma init --datasource-provider postgresql
```

```text
Google Console
https://console.cloud.google.com/welcome?project=reporte-store
```

### run prisma migrate

```bash
❯ npx prisma migrate dev --name user_tables
```

### run prisma push (create database from 0)

```bash
❯ npx prisma db push
```

### run prisma db seed (inserts nas tabelas)

```bash
❯ npx prisma db seed  
```