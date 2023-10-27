docker build --no-cache -f SQL\Dockerfile.PostgreSql -t 9_0/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t 9_0/app ../..
