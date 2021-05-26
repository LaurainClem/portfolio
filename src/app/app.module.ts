import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphqlInterceptor } from './graphql.interceptor';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { MarkdownModule, MarkedOptions, MarkedRenderer } from 'ngx-markdown';
import { TopbarComponent } from './topbar/topbar.component';

export function HttpLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http);
}

export function markedOptionsFactory(): MarkedOptions {
	const renderer = new MarkedRenderer();

	renderer.strong = (text: string) => {
		return '<strong class="subtitle">' + text + '</strong>';
	};

	renderer.paragraph = (text: string) => {
		return '<p class="textProject">' + text + '</p>';
	};

	renderer.listitem = (text: string) => {
		return '<li class="listItemProject"> - ' + text + '</li>';
	};

	renderer.heading = (text: string) => {
		return '<h3 class="subtitleBlock">' + text + '</h3>';
	};

	return {
		renderer: renderer,
		gfm: true,
		breaks: false,
		pedantic: false,
		smartLists: true,
		smartypants: false,
	};
}

@NgModule({
	declarations: [AppComponent, TopbarComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [HttpClient],
			},
		}),
		IvyCarouselModule,
		MarkdownModule.forRoot({
			markedOptions: {
				provide: MarkedOptions,
				useFactory: markedOptionsFactory,
			},
		}),
	],
	providers: [{ provide: HTTP_INTERCEPTORS, useClass: GraphqlInterceptor, multi: true }],
	bootstrap: [AppComponent],
})
export class AppModule {}
