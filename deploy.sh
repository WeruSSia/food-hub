# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'App deploy'

git push -f git@github.com:Riserax/food-hub.git master:gh-pages

cd -