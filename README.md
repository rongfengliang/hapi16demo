# hapi v16 start demo 
> this demo include one simple plugin and simple route

## run  basic plugin
```bash
yarn run start:basic-plugin
```

## run with docker
> first to the directory for run and then run like below
```bash
docker build -t demo .
docker run -d -p 3000:3000 demo

or from docker hub

docker run -d -p 3000:3000 dalongrong/hapiv16demo

```