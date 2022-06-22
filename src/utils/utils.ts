import { QueryArgs } from "@testing-library/react";

export namespace Helper {
    export const debounce = (func: Function) => {
        let timer: NodeJS.Timeout | null;
        return function (...args: QueryArgs) {
          const context = Helper;
          if (timer) clearTimeout(timer);
          timer = setTimeout(() => {
            timer = null;
            func.apply(context, args);
          }, 500);
        };
      };
}