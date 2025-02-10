import { useQueryState, parseAsString } from "nuqs";

export function UseSearchParam(key: string) {
  return useQueryState(
    key,
    parseAsString.withDefault("").withOptions({ clearOnDefault: true })
  );
}
