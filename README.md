### UPDATE: Fix was "allowUmdGlobalAccess": true, in tsconfig
Run `npx tsc` and get error: 

```js
index.ts:1:27 - error TS2686: 'React' refers to a UMD global, but the current file is a module. Consider adding an import instead.

1 class MyComponent extends React.Component {
```

The suggestion is to import React but I don't want to do that (it'll be provided through a separate script tag eventually).

I can add `declare var React: any` which fixes the error but then when I try and use the component it doesn't like it:
```js
index.tsx:24:14 - error TS2786: 'MyComponent' cannot be used as a JSX component.
  Its instance type 'MyComponent' is not a valid JSX element.
    Type 'MyComponent' is missing the following properties from type 'ElementClass': context, setState, forceUpdate, props, and 2 more.
```

Google searches just give me cases of people not realizing JSX syntax turns into `React.createElement` calls.

Following the same steps with `@types/jquery` seems to work (I'm able to use $.ajax without complaints).

I've also tried adding `react` explicitly to `types` in the `tsconfig` but that doesn't help.
