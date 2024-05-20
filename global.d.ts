export { };

declare global {
  interface String {
    folderFilter(): string;
  }
  interface Array<T> {
    moveToFront(predicate: (value: T) => boolean): void;
    moveToBack(predicate: (value: T) => boolean): void;
  }
}