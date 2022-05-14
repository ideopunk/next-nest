import { Controller, Get, Param } from "@nestjs/common";
import { GreetingReqDto, GreetingResDto } from "lib";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHelloWorld(): GreetingResDto {
    return { greeting: this.appService.getHello() };
  }

  @Get("hi/:name")
  getHello(@Param() params: GreetingReqDto): GreetingResDto {
    return { greeting: this.appService.getHello(params.name) };
  }
}
