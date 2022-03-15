import { Controller, Get, Redirect, Render, UseInterceptors } from '@nestjs/common';
import { AppService, ServerResponseTimeInterceptor } from './app.service';


@Controller()
@UseInterceptors(ServerResponseTimeInterceptor)
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
    return {
      title: 'Portfolio Belonogov Evgeny M33122',
      etaDescription: 'This page can be used as a portfolio',
      authStatus: false,
      serverResponseTime: String(this.appService.getServerResponseTime())
    };
  }

  @Get('page.html')
  @Render('page')
  getPage() {
    return {
      title: 'Photo gallery',
      metaDescription: 'This page contains photo',
      serverResponseTime: String(this.appService.getServerResponseTime())
    };
  }

  @Get('plants.html')
  @Render('plants')
  getPlants() {
    return {
      title: 'Plants info',
      metaDescription: 'This page contains information about plants',
      serverResponseTime: String(this.appService.getServerResponseTime())
    };
  }

  @Get('dhtml.html')
  @Render('dhtml')
  getDhtml() {
    return {
      title: 'DHTML',
      metaDescription: 'This page contains dynamic html (DHTML)',
      serverResponseTime: String(this.appService.getServerResponseTime())
    };
  }

  @Get('promise.html')
  @Render('promise')
  getPromise() {
    return {
      title: 'Promise',
      metaDescription: 'This page is for \'promise\'',
      serverResponseTime: String(this.appService.getServerResponseTime())
    };
  }

  @Get('libusing.html')
  @Render('libusing')
  getLibusing() {
    return {
      title: 'CodeMirror',
      metaDescription: 'CodeMirror',
      serverResponseTime: String(this.appService.getServerResponseTime())
    };
  }

  @Get('login.html')
  @Render('login')
  getLogin() {
    return {
      title: 'Login',
      metaDescription: 'Login',
      serverResponseTime: String(this.appService.getServerResponseTime())
    };
  }
}