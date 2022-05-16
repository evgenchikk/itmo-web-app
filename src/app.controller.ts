import { Controller, Get, Redirect, Render, UseInterceptors, HttpCode, UseGuards } from '@nestjs/common';
import { AppService, ServerResponseTimeInterceptor } from './app.service';
import { ApiTags, ApiResponse, ApiOperation, ApiCookieAuth } from '@nestjs/swagger';

import { SessionContainer } from "supertokens-node/recipe/session";
import { AuthGuard } from './auth/auth.guard';
import { Session } from './auth/session.decorator';


@ApiTags('HTML pages')
@Controller()
@UseInterceptors(ServerResponseTimeInterceptor)
export class AppController {
  constructor(private readonly appService: AppService) {};


  @ApiOperation({ summary: 'get the main HTML page' })
  @ApiResponse({ status: 200, description: 'OK' })
  @ApiResponse({ status: 308, description: 'redirect to the main page (index.html)' })
  @Get('/')
  @HttpCode(308)
  @Redirect('/index.html', 308)
  getRoot() {}


  @ApiOperation({ summary: 'get the main HTML page' })
  @ApiResponse({ status: 200, description: 'the main page (index.html) is got' })
  @Get('/index.html')
  @Render('index')
  getIndex() {
    return {
      title: 'Portfolio Belonogov Evgeny M33122',
      metaDescription: 'This page can be used as a portfolio',
      authStatus: false,
    };
  }


  @ApiOperation({ summary: 'get page.html' })
  @ApiCookieAuth()
  @ApiResponse({ status: 200, description: 'page.html is got' })
  @Get('/page.html')
  @UseGuards(AuthGuard)
  @Render('page')
  getPage(@Session() session: SessionContainer) {
    return {
      title: 'Photo gallery',
      metaDescription: 'This page contains photo',
      authStatus: false
    };
  }


  @ApiOperation({ summary: 'get plants.html' })
  @ApiResponse({ status: 200, description: 'plants.html is got' })
  @Get('/plants.html')
  @Render('plants')
  getPlants() {
    return {
      title: 'Plants info',
      metaDescription: 'This page contains information about plants',
      authStatus: false
    };
  }


  @ApiOperation({ summary: 'get DHTML.html' })
  @ApiResponse({ status: 200, description: 'DHTML.html is got' })
  @Get('/dhtml.html')
  @Render('dhtml')
  getDhtml() {
    return {
      title: 'DHTML',
      metaDescription: 'This page contains dynamic html (DHTML)',
      authStatus: false
    };
  }


  @ApiOperation({ summary: 'get promise.html' })
  @ApiResponse({ status: 200, description: 'promise.html is got' })
  @Get('/promise.html')
  @Render('promise')
  getPromise() {
    return {
      title: 'Promise',
      metaDescription: 'This page is for promise',
      authStatus: false
    };
  }


  @ApiOperation({ summary: 'get libusing.html' })
  @ApiResponse({ status: 200, description: 'page.html is got' })
  @Get('/libusing.html')
  @Render('libusing')
  getLibusing() {
    return {
      title: 'CodeMirror',
      metaDescription: 'CodeMirror',
      authStatus: false
    };
  }


  @ApiOperation({ summary: 'get login.html' })
  @ApiResponse({ status: 200, description: 'login.html is got' })
  @Get('/login.html')
  @Render('login')
  getLogin() {
    return {
      title: 'Login',
      metaDescription: 'Login',
      authStatus: false
    };
  }
}