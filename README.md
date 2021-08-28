# protractor container skeleton project
start selenium service by 
```bash
docker-compose up -d selenium
```
run the protractor e2e testing
```bash
docker-compose run --rm  --entrypoint protractor e2e-tests /app/conf.js
```
