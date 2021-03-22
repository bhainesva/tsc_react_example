class MyComponent extends React.Component {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    // Example of @types/jquery working as expected
    $.ajax('http://www.example.com');
  }

  render() {
    return "Hi"
  }
}

export function init() {
  console.log("hello");
}