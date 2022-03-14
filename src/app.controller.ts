import { Controller, Get, Redirect, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Get('/')
  @Redirect('index.html')
  getRoot() {}

  @Get('/index.html')
  @Render('index')
  getIndex() {
    return {};
  }

  @Get('page.html')
  @Render('page')
  getPage() {
    return {};
  }

  @Get('plants.html')
  @Render('plants')
  getPlants() {
    return {};
  }

  @Get('dhtml.html')
  @Render('dhtml')
  getDhtml() {
    return {};
  }

  @Get('promise.html')
  @Render('promise')
  getPromise() {
    return {};
  }

  @Get('libusing.html')
  @Render('libusing')
  getLibusing() {
    return {};
  }
}