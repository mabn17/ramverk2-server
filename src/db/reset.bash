$(> users.sqlite)
cat migrate.sql | sqlite3 users.sqlite