import { Arg, ArgsType, Field, FieldResolver, Float, ID, InputType, Int, ObjectType, registerEnumType } from "type-graphql";
import { Args, Context, Mutation, Query, ResolveProperty, Resolver, Root } from "@nestjs/graphql";

export enum Role {
  ADMIN = "ADMIN",
  USER = "USER"
}
registerEnumType(Role, {
  name: "Role",
  description: undefined,
});