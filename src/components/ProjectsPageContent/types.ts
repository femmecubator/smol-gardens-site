export type SelectedFilter = Record<"filter" | "value", string>;

export type Filters = {
  [key: string]: Set<string>;
};

export type FilterButtonClickEvent = React.MouseEvent<
  HTMLButtonElement,
  MouseEvent
> & {
  target: HTMLButtonElement;
};
