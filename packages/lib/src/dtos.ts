import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class GreetingReqDto {
  @IsString()
  name: string;
}

export class GreetingResDto {
  @IsString()
  greeting: string;
}
