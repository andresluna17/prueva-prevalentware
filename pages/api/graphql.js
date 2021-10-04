import { gql, ApolloServer } from "apollo-server-micro";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const typeDefs = gql`
  scalar Date
  type Company {
    id: ID
    name: String
    businessName: String
    documentType: DocumentType
    document: Int
    countEmployees: Int
    logo: String
    files: [File]
    state: StateCompany
    createdAt: Date
    updatedAt: Date
  }
  type File {
    id: Int
    name: String
    url: String
    Company: Company
  }
  type Query {
    getCompany: Company
    getCountCompanies: Int
  }
  type Mutation {
    updateState(id: Int, state: StateCompany): Company
  }
  enum DocumentType {
    NIT
    AT
    ID
  }
  enum StateCompany {
    APPROVED
    REJECTED
  }
`;

const resolvers = {
  Query: {
    getCompany: (_parent, { id }, _context) =>
      prisma.company.findFirst({ where: { id } }),
    getCountCompanies: (_parent, _args, _context) => prisma.company.count()
  },
  Mutation: {
    updateState: (_parent, { id, state }, _context) =>
      prisma.company.update({ where: { id }, data: { state } })
  }
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

const handler = apolloServer.createHandler({ path: "/api/graphql" });

export const config = { api: { bodyParser: false } };

export default handler;
