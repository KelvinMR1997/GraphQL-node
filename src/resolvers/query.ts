import { IResolvers } from "@graphql-tools/utils";

const query: IResolvers = {
  Query: {
    hola(): string {
      return "Hola mundo!";
    },
    holaConNombre(__: void, { nombre }): string {
      return `Hola ${nombre}, bienvenido`;
    },
    holaGraphQL(): string {
      return "Retornando HolaGraphQL porque lo pediste";
    },
  },
};

export default query;
