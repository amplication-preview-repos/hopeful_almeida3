/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { GitLabUserWhereInput } from "./GitLabUserWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class GitLabUserListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => GitLabUserWhereInput,
  })
  @ValidateNested()
  @Type(() => GitLabUserWhereInput)
  @IsOptional()
  @Field(() => GitLabUserWhereInput, {
    nullable: true,
  })
  every?: GitLabUserWhereInput;

  @ApiProperty({
    required: false,
    type: () => GitLabUserWhereInput,
  })
  @ValidateNested()
  @Type(() => GitLabUserWhereInput)
  @IsOptional()
  @Field(() => GitLabUserWhereInput, {
    nullable: true,
  })
  some?: GitLabUserWhereInput;

  @ApiProperty({
    required: false,
    type: () => GitLabUserWhereInput,
  })
  @ValidateNested()
  @Type(() => GitLabUserWhereInput)
  @IsOptional()
  @Field(() => GitLabUserWhereInput, {
    nullable: true,
  })
  none?: GitLabUserWhereInput;
}
export { GitLabUserListRelationFilter as GitLabUserListRelationFilter };