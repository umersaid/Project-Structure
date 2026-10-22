export abstract class AbstractVO<T> {
  protected readonly props: T;

  protected constructor(props: T) {
    this.props = props;
  }

  toJSON() {
    return this.props;
  }
}
