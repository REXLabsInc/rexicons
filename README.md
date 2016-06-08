# rexicons

The custom icon set we use for the REX clients.

## Install

```
bower install rexicons
```

## Develop

* You need to have [Sketch](http://www.sketchapp.com/) installed

* You'll need to have `sketchtool` installed

```
/Applications/Sketch.app/Contents/Resources/sketchtool/install.sh
```

* fontforge is needed [grunt-webfont](https://github.com/sapegin/grunt-webfont#installation)

* Install Node and it's dependencies

```
brew install nvm
nvm install 4
nvm alias default 4
nvm use 4
npm install -g grunt
```

* Clone this repo

```
git clone git@github.com:REXLabsInc/rexicons.git
cd rexicons
npm install
```

* Compile icons

```
grunt
```
