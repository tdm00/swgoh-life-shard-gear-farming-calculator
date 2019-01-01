# swgoh-life-shard-gear-farming-calculator

This is an off-line copy of http://www.swgoh.life/farming.html that I'm using to add missing characters and gear to.

To use this you will need the following installed:
* git
* Node.js 8+

To get started do the following from a command line

```
sudo npm install --global gulp
npm install --global serve
git clone https://github.com/tdm00/swgoh-life-shard-gear-farming-calculator
cd swgoh-life-shard-gear-farming-calculator
npm install
```

You can then modify the files. To run locall you'll need to do the following in the repository directory

```
gulp
serve
```

You can then open your web browser to the address and port number listed and browse to the build directory and farming.html file

### Sort JSON Files

A handy way to sort the JSON files to be in alphabetical order is using the [jq](https://stedolan.github.io/jq/) utility

```
cat component-data.json | jq -S '.' > component-data-sorted.json
rm component-data.json
mv component-data-sorted.json component-data.json
```
