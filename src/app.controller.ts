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
    return {
      title: 'Portfolio Belonogov Evgeny M33122',
      metaDescription: 'This page can be used as a portfolio',
      authStatus: true,
      user: 'huy'
    };
  }

  @Get('page.html')
  @Render('page')
  getPage() {
    return {
      title: 'Photo gallery',
      metaDescription: 'This page contains photo'
    };
  }

  @Get('plants.html')
  @Render('plants')
  getPlants() {
    return {
      title: 'Plants info',
      metaDescription: 'This page contains information about plants'
    };
  }

  @Get('dhtml.html')
  @Render('dhtml')
  getDhtml() {
    return {
      title: 'DHTML',
      metaDescription: 'This page contains dynamic html (DHTML)'
    };
  }

  @Get('promise.html')
  @Render('promise')
  getPromise() {
    return {
      title: 'Promise',
      metaDescription: 'This page is for \'promise\''
    };
  }

  @Get('libusing.html')
  @Render('libusing')
  getLibusing() {
    return {
      title: 'CodeMirror',
      metaDescription: 'CodeMirror'
    };
  }

  @Get('login.html')
  @Render('login')
  getLogin() {
    return {
      title: 'Login',
      metaDescription: 'Login'
    };
  }
}