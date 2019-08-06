# cd ./src/db
# $(> test.sqlite)
# cat migrate.sql | sqlite3 test.copy.sqlite
# cd ../..

# Becuace docker cant find sqlite3 command
cd ./src/db
cp test.copy.sqlite test.sqlite
cd ../..