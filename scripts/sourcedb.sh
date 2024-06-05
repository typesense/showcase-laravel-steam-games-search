#!/bin/bash

CURRENT_DIR=$(pwd)

source "${CURRENT_DIR}/.env"

SQL_COMMAND="\copy games(name,release_date,price,positive,negative,app_id,min_owners,max_owners,hltb_single) FROM '${CURRENT_DIR}/data/games.csv' WITH (FORMAT csv, HEADER true, DELIMITER ',');  UPDATE games SET created_at = NOW();"

PGPASSWORD=$DB_PASSWORD psql -h localhost -p $DB_PORT -d $DB_DATABASE -U $DB_USERNAME -c "$SQL_COMMAND"

if [ $? -eq 0 ]; then
    echo "Copy command executed successfully."
else
    echo "An error occurred during the copy command execution."
fi
