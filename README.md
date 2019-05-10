# Next.js && Preact X

This is a monorepo showing how to use Next.js 8+ with Preact X

It consists of 3 packages in 2 folders:

* [`apps/article`](./tree/master/apps/article) An example app, called "article" (I could have called it "app" but I didn't because of _reasons_
* [`packages/next-preact`](./tree/master/packages/next-preact) A reimplementation of [@zeit/next-preact](https://github.com/zeit/next-plugins/tree/master/packages/next-preact) but without having you have to create a custom server
* [`packages/preact`](https://github.com/developit/preact/) a clone of the [Preact X master branch](https://github.com/developit/preact) to use the latest, yet unreleased Preact that includes lazy / Suspense

Apart from these local dependencies it is important to say that `apps/article` uses `next@carnary` because only that works with Preact (because they loosened their dependency on [react-ssr-prepass](https://github.com/FormidableLabs/react-ssr-prepass)

## Explanation

* We use yarn workspaces to create links between the latest Preact, our custom Next plugin and our Next app
* Our custom Next plugin exports a bin called `next:preact` which sets up a module alias to make Next use Preact instead of React and the calls the orignal Next bin scripts. That means unlike in the orignal Preact plugin you don't have to create a custom server. You can still do so if you want to, just do the same thing as in their orignial docs on their plugin.
* Use `next:preact dev`, `next:preact build`, `next:preact start` instead of `next dev` etc.

## Install

```console
git submodule init
git submodule update
yarn
cd packages/preact
yarn build
```

# Run

```console
cd apps/article
yarn dev
```



