# Card Business Component with Preact

This is my first project with Preact. It is a static website.

The purpose of doing this project is to get familiar with Preact.

Live site — [Card Business Component with Preact](https://preact-laurasmithbusiness.netlify.app/)

## Built with

- HTML Semantic Tags
- [BEM (Block, Element, Modifier)](https://sparkbox.com/foundry/bem_by_example)
- [Preact | Preact: Fast 3kb React alternative with the same ES6 API. Components & Virtual DOM.](https://preactjs.com/)
- CSS Flexbox
- Mobile-first workflow

## What I learned

I learned a little bit about Preact.

### Create Preact components

I learned to separate HTML code into three Preact components.

Preact uses the default HTML attribute which is different from React. For example, Preact uses `class` attribute while React uses `className`. This makes it easier to copy-paste HTML to Preact.

I didn't use destructuring when passing `props`. In this case, I used the following syntax:

```javascript
export default function Button(props) {
  return (
    <a
      href={props.url}
      class={`card__button card__button--${props.backgroundColor}`}
    >
      {props.children}
    </a>
  );
}
```

## Useful resources

- [Learn Preact | Preact: Fast 3kb React alternative with the same ES6 API. Components & Virtual DOM.](https://preactjs.com/tutorial/) - This is the tutorial page of the Preact. It is easy to follow and understand. I finished the [Virtual DOM](https://preactjs.com/tutorial/01-vdom). This helped me to understand the basics of Preact.
- [Getting Started | Preact: Fast 3kb React alternative with the same ES6 API. Components & Virtual DOM.](https://preactjs.com/guide/v10/cli/getting-started) - This helped me to know how to edit the title of the page.
- [preact-cli/README.md at master · preactjs/preact-cli](https://github.com/preactjs/preact-cli/blob/master/README.md) - This can be useful for me to understand different options of `preact-cli`.

## License

[MIT](./LICENSE)
