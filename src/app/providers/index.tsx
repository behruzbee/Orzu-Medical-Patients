import { MantineProvider } from "./mantine";
import { ReactQuery } from "./react-query";
import { ReactRouter } from "./react-router";

export const Providers = () => {
  return (
    <MantineProvider>
      <ReactQuery>
        <ReactRouter />
      </ReactQuery>
    </MantineProvider>
  );
};
