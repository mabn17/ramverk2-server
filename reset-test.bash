cd ./src/db

$(> test.sqlite)
cat migrate.sql | sqlite3 test.sqlite

cd ../..