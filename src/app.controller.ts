import { Controller, Get, Redirect, Render, UseInterceptors } from '@nestjs/common';
import { AppService, ServerResponseTimeInterceptor } from './app.service';


@Controller()
@UseInterceptors(ServerResponseTimeInterceptor)
export class AppController {
  constructor(private readonly appService: AppService) {};

  @Get('/')
  @Redirect('index.html')
  getRoot() {}

  @Get('/index.html')
  @Render('index')
  getIndex() {
    return {
      title: 'Portfolio Belonogov Evgeny M33122',
      metaDescription: 'This page can be used as a portfolio',
      authStatus: false,
    };
  }

  @Get('page.html')
  @Render('page')
  getPage() {
    return {
      title: 'Photo gallery',
      metaDescription: 'This page contains photo',
      authStatus: false
    };
  }

  @Get('plants.html')
  @Render('plants')
  getPlants() {
    return {
      title: 'Plants info',
      metaDescription: 'This page contains information about plants',
      authStatus: false
    };
  }

  @Get('dhtml.html')
  @Render('dhtml')
  getDhtml() {
    return {
      title: 'DHTML',
      metaDescription: 'This page contains dynamic html (DHTML)',
      authStatus: false
    };
  }

  @Get('promise.html')
  @Render('promise')
  getPromise() {
    return {
      title: 'Promise',
      metaDescription: 'This page is for \'promise\'',
      authStatus: false
    };
  }

  @Get('libusing.html')
  @Render('libusing')
  getLibusing() {
    return {
      title: 'CodeMirror',
      metaDescription: 'CodeMirror',
      authStatus: false
    };
  }

  @Get('login.html')
  @Render('login')
  getLogin() {
    return {
      title: 'Login',
      metaDescription: 'Login',
      authStatus: false
    };
  }
}